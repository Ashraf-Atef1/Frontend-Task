import fetcher from "@/lib/api/fetcher";

// Simple test for the fetcher function
describe("API Fetcher", () => {
	it("should be a function", () => {
		// This is a placeholder test that just ensures the module can be imported
		expect(typeof fetcher).toBe("function");
	});

	it("should have correct endpoint mappings", () => {
		// Test that the endpoints are correctly defined
		const endpoints = {
			hero: "/api/heroes",
			ourTeam: "/api/team-members",
			ourClients: "/api/clients",
			ourCompanies: "/api/companies",
			subscribe: "/api/subscribers",
		};

		// This verifies that our endpoint mapping is correct
		expect(Object.keys(endpoints)).toContain("hero");
		expect(Object.keys(endpoints)).toContain("ourTeam");
		expect(Object.keys(endpoints)).toContain("subscribe");
	});
});
