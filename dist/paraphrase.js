"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.paraphraseText = exports.modeMap = void 0;
const axios_1 = __importDefault(require("axios"));
const modeMap = (inputmode) => {
    inputmode = inputmode.toLowerCase();
    if (inputmode === 'professional') {
        return 'standard';
    }
    else if (inputmode === 'creative') {
        return 'creative';
    }
    else if (inputmode === 'urgent') {
        return 'fluent';
    }
    else {
        return 'standard';
    }
};
exports.modeMap = modeMap;
const paraphraseText = async (inputText, paraphraseMode) => {
    var _a;
    const paraphraseUrl = "https://paraphraser.prod.hipcv.com/paraphrase";
    const bodyData = {
        text: inputText,
        mode: (0, exports.modeMap)(paraphraseMode)
    };
    try {
        const response = await axios_1.default.post(paraphraseUrl, bodyData, {
            headers: {
                'content-type': 'application/json',
                'Referer': 'https://websymphony.net/'
            }
        });
        return (_a = response.data) === null || _a === void 0 ? void 0 : _a.data[0];
    }
    catch (error) {
        console.error('Error during paraphrasing:', error.message);
        return '';
    }
};
exports.paraphraseText = paraphraseText;
