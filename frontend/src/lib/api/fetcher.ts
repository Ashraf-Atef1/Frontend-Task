import "server-only";
import axios from "axios";
import { getLocale } from "next-intl/server";

const endpoints = {
	hero: "/api/heroes",
	ourTeam: "/api/team-members",
	ourClients: "/api/clients",
	ourCompanies: "/api/companies",
	subscribe: "/api/subscribers",
};
const axiosInstance = axios.create({
	baseURL: process.env.API_BASE_URL,
});
console.log("API_BASE_URL:", process.env.API_BASE_URL);

const fetcher = async (
	endpoint: keyof typeof endpoints,
	config?: {
		method: "get" | "post" | "put" | "delete" | "patch";
		body: Record<string, unknown>;
	}
) => {
	const currentLocale = await getLocale();
	switch (config?.method) {
		case "post": {
			const response = await axiosInstance.post(
				endpoints[endpoint],
				config.body
			);
			return response.data;
		}
		case "put": {
			const response = await axiosInstance.put(
				endpoints[endpoint],
				config.body
			);
			return response.data;
		}
		case "delete": {
			const response = await axiosInstance.delete(endpoints[endpoint]);
			return response.data;
		}
		case "patch": {
			const response = await axiosInstance.patch(
				endpoints[endpoint],
				config.body
			);
			return response.data;
		}
		default: {
			const response = await axiosInstance.get(endpoints[endpoint], {
				params: { populate: "*", locale: currentLocale },
			});
			return response.data.data;
		}
	}
};

export default fetcher;
