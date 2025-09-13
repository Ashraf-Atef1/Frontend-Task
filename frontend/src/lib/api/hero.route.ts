"use server";

import fetcher from "./fetcher";
import { IHeroSlideData } from "./types/hero.types";

export async function getHero() {
	const response = await fetcher("hero");
	return response as IHeroSlideData[];
}
