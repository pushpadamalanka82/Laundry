import { StartFunc as StartFuncDeleteButton } from "./DeleteButton.js";

const StartFunc = (row, $element, field) => {
    if (field === 6) {
        StartFuncDeleteButton({ inRow: row });
    };
};
export { StartFunc };