import fnv1a, { Bits } from "https://deno.land/x/fnv1a@v1.0.1/mod.ts";

export default function hash(input: string, options: { size?: Bits } = {}) {
	const { size = 32 } = options;
	const hash = fnv1a(input, { size });
	return {
		hex: () => hash.toString(16).padStart(size / 4, "0"),
		valueOf: () => hash,
	};
}
