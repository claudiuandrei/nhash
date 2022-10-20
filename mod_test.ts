import { assertEquals } from "https://deno.land/std@0.160.0/testing/asserts.ts";
import hash from "./mod.ts";

Deno.test("hex", () => {
	assertEquals(hash("hello world", { size: 32 }).hex(), "d58b3fa7");
	assertEquals(hash("hello world", { size: 64 }).hex(), "779a65e7023cd2e7");
	assertEquals(
		hash("hello world", { size: 128 }).hex(),
		"6c155799fdc8eec4b91523808e7726b7"
	);
	assertEquals(
		hash("hello world", { size: 256 }).hex(),
		"ecc3cf2e0edfccd3d87f21ec0883aad4db43eead66ce09eb4a97e04e1a184527"
	);
	assertEquals(
		hash("hello world", { size: 512 }).hex(),
		"2b9c19ec56ccf98da0f227cc82bfaacbd8350928bd2ceacae7bc8aa13e747f5c43ca4e2e98fc25e94e4e805675545ee95a3b968c0acfaecb90aea2fdbcd4de0f"
	);
	assertEquals(
		hash("hello world", { size: 1024 }).hex(),
		"3fa9d253e52ae80105b382c80a01e27a53d7bc1d201efb47b38f4d6e465489829d7d272127d20e1076129c00000000000000000000000000000000000000000000000000000000000000000000000000000253eb20f42a7228af9022d9f35ece5bb71e40fcd8717b80d164ab921709996e5c43aae801418e878cddf968d4616f"
	);
	assertEquals(
		hash("🦄🌈", { size: 128 }).hex(),
		"0a25841ae4659905b36cb0d359fad39f"
	);
});

Deno.test("valueOf", () => {
	assertEquals(hash("hello world", { size: 32 }).valueOf(), 3_582_672_807n);
	assertEquals(
		hash("hello world", { size: 64 }).valueOf(),
		8_618_312_879_776_256_743n
	);
	assertEquals(
		hash("hello world", { size: 128 }).valueOf(),
		143_667_438_548_887_148_232_425_432_707_801_491_127n
	);
	assertEquals(
		hash("hello world", { size: 256 }).valueOf(),
		107_091_797_346_500_423_043_575_108_682_219_024_833_276_789_533_882_915_251_308_540_790_054_288_114_983n
	);
	assertEquals(
		hash("hello world", { size: 512 }).valueOf(),
		2_284_029_013_641_389_081_834_419_821_678_833_770_628_458_656_170_256_635_031_087_663_449_512_080_707_767_615_593_291_542_658_598_229_555_444_082_872_593_184_965_938_618_627_164_785_141_330_455_595_113_999n
	);
	assertEquals(
		hash("hello world", { size: 1024 }).valueOf(),
		44_705_935_654_141_004_193_995_617_877_036_239_954_733_433_467_987_873_110_224_072_050_244_340_907_292_522_365_820_412_193_858_445_161_665_446_294_825_421_372_819_542_910_915_471_013_433_687_867_782_180_376_165_625_451_113_035_481_518_665_896_563_620_971_904_987_624_930_607_920_254_296_854_636_148_526_204_223_268_570_335_218_685_421_013_388_560_424_369_170_244_435_379_864_974_005_188_041_151_940_650_099_055n
	);
	assertEquals(
		hash("🦄🌈", { size: 128 }).valueOf(),
		13_487_074_350_300_261_116_944_693_128_525_960_095n
	);
});
