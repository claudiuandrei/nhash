# nhash

[Non-cryptographic hash function](https://en.wikipedia.org/wiki/List_of_hash_functions#Non-cryptographic_hash_functions) wrapper. Currently supporting [FNV-1a](https://en.wikipedia.org/wiki/Fowler–Noll–Vo_hash_function) with hex and BigInt output.

## Importing in Deno

```ts
import hash from "https://deno.land/x/nhash/mod.ts";
```

## Importing in Node

```js
import hash from "@denox/nhash";
```

#### Basic usage

```js
hash("🦄🌈", { size: 32 }).hex();
//=> "aaf5fee7"

hash("🦄🌈", { size: 128 }).hex();
//=> "0a25841ae4659905b36cb0d359fad39f"

hash("🦄🌈", { size: 32 })).valueOf();
//=> 2_868_248_295
```

## License

[MIT](LICENSE)
