export const headerLinks: IHeaderLinkProps[] = [
	{ href: "/", label: "about" },
	{
		label: "services",
		nestedLinks: [
			{ href: "/service/web-development", label: "web-development" },
			{ href: "/service/mobile-development", label: "mobile-development" },
			{ href: "/service/ui-ux-design", label: "ui/ux-design" },
		],
	},
	{ href: "/", label: "blogs" },
	{ href: "/", label: "our-team" },
	{ href: "/", label: "contact-us" },
];
