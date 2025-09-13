"use server";

import fetcher from "./fetcher";
import { ITeamMemberData } from "./types/ourTeam.types";

export async function getTeamMembers() {
	const response = await fetcher("ourTeam");
	return response as ITeamMemberData[];
}
