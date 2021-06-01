import { main as class_main } from "./js/main.js";
import { main as procedure_main } from "./js/procedure.js";

const n = BigInt(500000);

async function main() {
    console.info("starting class...");
    run(class_main, 'class-out', 'class');

    console.info("starting procedure...");
    run(procedure_main, 'procedure-out', 'procedure');
}

// wasm version
async function run_wasm() {
    await init()
        .then(() => {
            const p = wasm_main(n);
            let out = document.getElementById('wasm-out');
            out.innerText = `${p}`;
        })
}

// js version
function run(f, out, name) {
    const start = performance.now();
    const p = f(n);
    let outElem = document.getElementById(out);
    outElem.innerText = `${p}`;
    const end = performance.now();
    console.log(`[from ${name}] ${name} elapsed time: ${end - start} ms`)
}


main();