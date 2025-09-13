"use server";
import fetcher from "./fetcher";

export async function subscribe(email: string) {
	const response = await fetcher("subscribe", {
		method: "post",
		body: { data: { email } },
	});
	return response;
}
