import axios, { AxiosError } from 'axios';
import { modeMap, paraphraseText } from '../paraphrase';

jest.mock('axios');

describe('modeMap', () => {
  it('maps professional mode correctly', () => {
    expect(modeMap('professional')).toBe('standard');
  });

  it('maps creative mode correctly', () => {
    expect(modeMap('creative')).toBe('creative');
  });

  it('maps urgent mode correctly', () => {
    expect(modeMap('urgent')).toBe('fluent');
  });

  it('invalid mode or anything else it maps to standard', () => {
    expect(modeMap('invalid')).toBe('standard');
  });
});

describe('paraphraseText', () => {
  it('paraphrases text correctly', async () => {
    const mockedText = 'Paraphrased text';
    (axios.post as jest.MockedFunction<typeof axios.post>).mockResolvedValueOnce({ data: {data:[mockedText]} });
    const result = await paraphraseText('Input text', 'professional');

    expect(result).toBe('Paraphrased text');
    expect(axios.post).toHaveBeenCalledWith('https://paraphraser.prod.hipcv.com/paraphrase', {
      text: 'Input text',
      mode: 'standard'
    },{ headers: {
      'content-type': 'application/json',
      'Referer': 'https://websymphony.net/'
    }});
  });

  it('throws an error when axios fails', async () => {
    const mockedError = new AxiosError('Axios error');
    (axios.post as jest.MockedFunction<typeof axios.post>).mockRejectedValueOnce(mockedError);
    const result = await paraphraseText('Input text','professional');
    await expect(result).toBe('');
  });
});
