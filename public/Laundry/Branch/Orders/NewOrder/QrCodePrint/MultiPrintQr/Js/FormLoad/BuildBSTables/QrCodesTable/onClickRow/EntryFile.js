// import { StartFunc as StartFuncButtonClickFunc } from "./QRGenerate/2-ButtonClickFunc.js";
import { StartFunc as StartFuncButtonClickFunc } from "./MultipleQrCodeButtonId/2-ButtonClickFunc.js";
import { StartFunc as StartFuncButtonClickFunc1 } from "./MultipleQrCodeButtonId1/2-ButtonClickFunc.js";
import { StartFunc as StartFuncButtonClickFunc2 } from "./MultipleQrCodeButtonId2/2-ButtonClickFunc.js";

const StartFunc = (row, $element, field) => {
    if (field === 8) {
        StartFuncButtonClickFunc({ inRowData: row });
    };
    if (field === 9) {
        StartFuncButtonClickFunc1({ inRowData: row });
    };
    if (field === 10) {
        StartFuncButtonClickFunc2({ inRowData: row });
    };
};
export { StartFunc };