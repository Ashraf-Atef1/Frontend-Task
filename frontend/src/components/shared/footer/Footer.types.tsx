export interface IFooterProps {
	className?: string;
}

export interface IFooterLink {
	id: string;
	label: string;
	href: string;
	isExternal?: boolean;
}

export interface IFooterSection {
	id: string;
	title: string;
	links: IFooterLink[];
}

export interface ISubscriptionFormValues {
	email: string;
}

export interface ISocialLink {
	id: string;
	name: string;
	href: string;
	icon: React.ComponentType<{ size?: number; className?: string }>;
}
