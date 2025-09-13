"use server";

import fetcher from "./fetcher";
import { IClientData, ICompanyData } from "./types/cleint.types";

export async function getOurClients() {
	const response = await fetcher("ourClients");
	return response as IClientData[];
}

export async function getOurCompanies() {
	const response = await fetcher("ourCompanies");
	return response as ICompanyData[];
}
