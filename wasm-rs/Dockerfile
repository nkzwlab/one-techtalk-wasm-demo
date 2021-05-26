FROM rust:latest

WORKDIR /app

RUN cargo install wasm-pack

CMD wasm-pack build --target web