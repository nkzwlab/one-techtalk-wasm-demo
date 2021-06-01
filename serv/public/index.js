import init, { demo_main as wasm_main } from "./wasm/wasm_rs.js";
import { main as js_main } from "./js/main.js";

const n = BigInt(200000);

async function main() {
    log("starting wasm...");
    const wasmStart = performance.now();
    await runWasm();
    const wasmEnd = performance.now();
    log(`wasm elapsed time: ${wasmEnd - wasmStart} ms`)

    log("starting js...");
    const jsStart = performance.now();
    runJs();
    const jsEnd = performance.now();
    log(`js elapsed time: ${jsEnd - jsStart} ms`)
}

// wasm version
async function runWasm() {
    await init()
        .then(() => {
            const p = wasm_main(n);
            let out = document.getElementById('wasm-out');
            out.innerText = `${p}`;
        })
}

// js version
function runJs() {
    const jsStart = performance.now();
    const p = js_main(n);
    let out = document.getElementById('js-out');
    out.innerText = `${p}`;
    const jsEnd = performance.now();
    log(`[from js] elapsed time: ${jsEnd - jsStart} ms`)
}


let logElem = document.getElementById("log");
function log(s) {
    logElem.innerText += '\n' + s;
}


main();