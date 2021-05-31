export const log = (s) => console.log(`[from wasm] ${s}`);
export const now = () => performance.now();