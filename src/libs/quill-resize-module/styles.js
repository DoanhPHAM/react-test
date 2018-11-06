import Quill from 'quill';
const Parchment = Quill.imports.parchment;

export const FloatStyle = new Parchment.Attributor.Style('float', 'float');
export const MarginStyle = new Parchment.Attributor.Style('margin', 'margin');
export const DisplayStyle = new Parchment.Attributor.Style('display', 'display');

export const IconAlignCenter = `
    <svg xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" version="1.1">
        <line fill="#444" stroke="#444" stroke-width="2" class="ql-stroke" x1="15" x2="3" y1="9" y2="9"></line>
        <line fill="#444" stroke="#444" stroke-width="2" class="ql-stroke" x1="14" x2="4" y1="14" y2="14"></line>
        <line fill="#444" stroke="#444" stroke-width="2" class="ql-stroke" x1="12" x2="6" y1="4" y2="4"></line>
    </svg>`;

export const IconAlignLeft = `
    <svg xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" version="1.1">
        <line fill="#444" stroke="#444" stroke-width="2" class="ql-stroke" x1="3" x2="15" y1="9" y2="9"></line>
        <line fill="#444" stroke="#444" stroke-width="2" class="ql-stroke" x1="3" x2="13" y1="14" y2="14"></line>
        <line fill="#444" stroke="#444" stroke-width="2" class="ql-stroke" x1="3" x2="9" y1="4" y2="4"></line>
    </svg>`;

export const IconAlignRight = `
    <svg xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" version="1.1">
        <line fill="#444" stroke="#444" stroke-width="2" class="ql-stroke" x1="15" x2="3" y1="9" y2="9"></line>
        <line fill="#444" stroke="#444" stroke-width="2" class="ql-stroke" x1="15" x2="5" y1="14" y2="14"></line>
        <line fill="#444" stroke="#444" stroke-width="2" class="ql-stroke" x1="15" x2="9" y1="4" y2="4"></line>
    </svg>`;

export default {
    FloatStyle,
    MarginStyle,
    DisplayStyle,
    IconAlignCenter,
    IconAlignLeft,
    IconAlignRight
}
