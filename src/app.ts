import { paraphraseText } from "./paraphrase";
import prompt from 'prompt-sync';
const promptSync = prompt();

(async () => {
  const text = promptSync('Enter Text for Paraphrasing :: ');
  // Sample Text : This must be hard to go weekend as there are lots of things I need to cover up
  const mode = promptSync('Enter Mode Professional/Creative/Urgent :: ');

  try {
    const result = await paraphraseText(text, mode);
    console.log('Output Text :: ',result);
  } catch (error:any) {
    console.error(error.message);
  }
})();
