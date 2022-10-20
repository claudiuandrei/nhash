import { build, emptyDir } from "https://deno.land/x/dnt@0.31.0/mod.ts";

await emptyDir("./npm");

await build({
	entryPoints: ["./mod.ts"],
	outDir: "./npm",
	shims: {
		// see JS docs for overview and more options
		deno: {
			test: "dev",
		},
	},
	compilerOptions: {
		lib: ["es2021", "dom"],
	},
	package: {
		// package.json properties
		name: "@denox/nhash",
		version: Deno.args[0],
		description: "Non-cryptographic hash function wrapper.",
		license: "MIT",
		keywords: ["fnv1a", "hash", "hashing"],
		repository: {
			type: "git",
			url: "git+https://github.com/claudiuandrei/nhash.git",
		},
		bugs: {
			url: "https://github.com/claudiuandrei/nhash/issues",
		},
		engines: {
			node: ">=11.0.0",
		},
	},
});

// post build steps
Deno.copyFileSync("LICENSE", "npm/LICENSE");
Deno.copyFileSync("README.md", "npm/README.md");
