let logElem = document.getElementById("log");
export const log = (s) => { logElem.innerText += '\n[from wasm] ' + s; }
export const now = () => performance.now();