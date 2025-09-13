import { FaTwitter, FaFacebookF, FaGooglePlusG } from "react-icons/fa";
import { IFooterSection, ISocialLink } from "./Footer.types";

export const footerSections: IFooterSection[] = [
	{
		id: "company",
		title: "company",
		links: [
			{
				id: "about",
				label: "about",
				href: "/",
			},
			{
				id: "our-strategy",
				label: "our-strategy",
				href: "/",
			},
			{
				id: "our-advantages",
				label: "our-advantages",
				href: "/",
			},
		],
	},
	{
		id: "services",
		title: "services",
		links: [
			{
				id: "social-responsibility",
				label: "social-responsibility",
				href: "/",
			},
			{
				id: "our-services",
				label: "our-services",
				href: "/",
			},
		],
	},
];

export const socialLinks: ISocialLink[] = [
	{
		id: "twitter",
		name: "Twitter",
		href: "https://twitter.com",
		icon: FaTwitter,
	},
	{
		id: "facebook",
		name: "Facebook",
		href: "https://facebook.com",
		icon: FaFacebookF,
	},
	{
		id: "google-plus",
		name: "Google Plus",
		href: "https://plus.google.com",
		icon: FaGooglePlusG,
	},
];
