import { render, screen } from "@/__tests__/test-utils";
import Header from "@/components/shared/header/Header.component";

// Mock next/image
jest.mock("next/image", () => ({
	__esModule: true,
	default: (props: React.ImgHTMLAttributes<HTMLImageElement>) => {
		// eslint-disable-next-line @next/next/no-img-element
		return <img {...props} alt={props.alt} />;
	},
}));

// Mock the Link component from i18n routing
jest.mock("@/i18n/routing", () => ({
	Link: ({
		children,
		...props
	}: {
		children: React.ReactNode;
		[key: string]: unknown;
	}) => <a {...props}>{children}</a>,
}));

// Mock the header data
jest.mock("@/components/shared/header/Header.data", () => ({
	headerLinks: [
		{ href: "/", label: "Home" },
		{ href: "/about", label: "About" },
		{ href: "/services", label: "Services" },
	],
}));

// Mock child components
jest.mock("@/components/shared/header/header-link/HeaderLink.component", () => {
	return function MockHeaderLink({
		href,
		label,
		nestedLinks,
	}: {
		href: string;
		label: string;
		nestedLinks?: Array<{ href: string; label: string }>;
	}) {
		return (
			<li>
				<a href={href}>{label}</a>
				{nestedLinks && (
					<ul>
						{nestedLinks.map((nested, index) => (
							<li key={index}>
								<a href={nested.href}>{nested.label}</a>
							</li>
						))}
					</ul>
				)}
			</li>
		);
	};
});

jest.mock(
	"@/components/shared/header/language-select/LanguageSelect.component",
	() => {
		return function MockLanguageSelect() {
			return <div data-testid="language-select">Language Select</div>;
		};
	}
);

jest.mock("@/components/shared/header/book-button/BookButton.component", () => {
	return function MockBookButton() {
		return <button data-testid="book-button">Book Now</button>;
	};
});

jest.mock("@/components/shared/header/search-bar/SearchBar.component", () => {
	return function MockSearchBar() {
		return <div data-testid="search-bar">Search Bar</div>;
	};
});

jest.mock("@/components/shared/header/side-menu/SideMenu.component", () => {
	return function MockSideMenu() {
		return <div data-testid="side-menu">Side Menu</div>;
	};
});

describe("Header", () => {
	beforeEach(() => {
		// Mock scroll methods
		Object.defineProperty(window, "scrollY", {
			writable: true,
			value: 0,
		});

		global.addEventListener = jest.fn();
		global.removeEventListener = jest.fn();
	});

	it("renders header with logo and navigation elements", () => {
		render(<Header />);

		expect(screen.getAllByTestId("language-select")).toHaveLength(2); // One for desktop, one for mobile
		expect(screen.getByTestId("book-button")).toBeInTheDocument();
		expect(screen.getByTestId("search-bar")).toBeInTheDocument();
		expect(screen.getByTestId("side-menu")).toBeInTheDocument();
	});
	it("sets up scroll event listener on mount", () => {
		render(<Header />);

		expect(global.addEventListener).toHaveBeenCalledWith(
			"scroll",
			expect.any(Function)
		);
	});

	it("removes scroll event listener on unmount", () => {
		const { unmount } = render(<Header />);

		unmount();

		expect(global.removeEventListener).toHaveBeenCalledWith(
			"scroll",
			expect.any(Function)
		);
	});
});
