"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const paraphrase_1 = require("./paraphrase");
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const promptSync = (0, prompt_sync_1.default)();
(async () => {
    const text = promptSync('Enter Text for Paraphrasing :: ');
    // Sample Text : This must be hard to go weekend as there are lots of things I need to cover up
    const mode = promptSync('Enter Mode Professional/Creative/Urgent :: ');
    try {
        const result = await (0, paraphrase_1.paraphraseText)(text, mode);
        console.log('Output Text :: ', result);
    }
    catch (error) {
        console.error(error.message);
    }
})();
