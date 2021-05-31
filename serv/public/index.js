import init, { demo_main as wasm_main } from "./wasm/wasm_rs.js";
import { main as js_main } from "./js/main.js";

const n = BigInt(500000);

async function main() {
    await run_wasm();

    const jsStart = performance.now();
    run_js();
    const jsEnd = performance.now();
    console.log(`js elapsed time: ${jsEnd - jsStart} ms`)
}

// wasm version
async function run_wasm() {
    await init()
        .then(() => {
            console.log("called wasm");
            const p = wasm_main(n);
            let out = document.getElementById('wasm-out');
            out.innerText = `${p}`;
        })
}

// js version
function run_js() {
    const p = js_main(n);
    let out = document.getElementById('js-out');
    out.innerText = `${p}`;
}


main();