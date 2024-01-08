import axios, { AxiosResponse } from 'axios';

export const modeMap = (inputmode: string): string => {
    inputmode = inputmode.toLowerCase();
    if (inputmode === 'professional') {
        return 'standard';
    } else if (inputmode === 'creative') {
        return 'creative';
    } else if (inputmode === 'urgent') {
        return 'fluent';
    } else {
        return 'standard'
    }
};

export const paraphraseText = async (inputText: string, paraphraseMode: string): Promise<string> => {
    const paraphraseUrl = "https://paraphraser.prod.hipcv.com/paraphrase";
    const bodyData = {
        text: inputText,
        mode: modeMap(paraphraseMode)
    };
    try {
        const response:AxiosResponse = await axios.post(paraphraseUrl, bodyData, {
            headers: {
                'content-type': 'application/json',
                'Referer': 'https://websymphony.net/'
            }
        });

        return response.data?.data[0];
    } catch (error:any) {
        console.error('Error during paraphrasing:', error.message);
        return ''
    }
}
