# wasm-demo
ONEのTechTalkでWebAssemblyのデモをするためのrepo

[発表スライド](https://docs.google.com/presentation/d/1LLEcjy1D2jK07zNMzSMbFSoIG9PyOzUFqBjaWz0xUuM/edit?usp=sharing)

## usage
```
$ docker compose up
```

起動後， [localhost:8080]() にアクセスする

ある数 `n` 以下で最大の素数をwasm/jsでそれぞれ計算し，出力する．`serv/public/index.js` 内の `const n = BigInt(1000000);` の値を変更することで，使用する `n` を変えられる