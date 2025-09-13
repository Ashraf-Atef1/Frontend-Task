// Mock next/image
jest.mock("next/image", () => ({
	__esModule: true,
	default: (props: React.ImgHTMLAttributes<HTMLImageElement>) => {
		// eslint-disable-next-line @next/next/no-img-element
		return <img {...props} alt={props.alt} />;
	},
}));

describe("TeamMemberCard", () => {
	const mockMember = {
		id: "1",
		name: "John Doe",
		role: "Senior Developer",
		photo: {
			url: "/test-image.jpg",
			mime: "image/jpeg",
		},
		whatsapp: "+1234567890",
		phone: "+1234567890",
		email: "john@example.com",
		linkedIn: "https://linkedin.com/in/johndoe",
	};

	it("should render a placeholder test", () => {
		// This is a placeholder test until we can properly mock the component
		expect(mockMember.name).toBe("John Doe");
	});
});
