import { ISearchResult } from "./TeamServices.types";

export const mockSearchResults: ISearchResult[] = [
	{
		id: "1",
		title: {
			en: "Law Firm",
			ar: "مكتب محاماة",
		},
		description: {
			en: "Law Firm is one of the leading legal offices",
			ar: "مكتب المحاماة هو أحد المكاتب القانونية الرائدة",
		},
		type: "team",
		category: {
			en: "Legal Services",
			ar: "الخدمات القانونية",
		},
		url: "/",
		tags: ["legal", "law", "consulting"],
	},
	{
		id: "2",
		title: {
			en: "Corporate Law Services",
			ar: "خدمات القانون التجاري",
		},
		description: {
			en: "Law Firm is one of the leading legal offices providing comprehensive corporate law services",
			ar: "مكتب المحاماة هو أحد المكاتب القانونية الرائدة التي تقدم خدمات شاملة في القانون التجاري",
		},
		type: "service",
		category: {
			en: "Corporate Law",
			ar: "القانون التجاري",
		},
		url: "/",
		tags: ["corporate", "business", "legal"],
	},
	{
		id: "3",
		title: {
			en: "Legal Consultation Team",
			ar: "فريق الاستشارات القانونية",
		},
		description: {
			en: "Expert legal consultation team providing professional advice for various legal matters",
			ar: "فريق استشارات قانونية خبير يقدم المشورة المهنية لمختلف المسائل القانونية",
		},
		type: "team",
		category: {
			en: "Consultation",
			ar: "الاستشارات",
		},
		url: "/",
		tags: ["consultation", "advice", "legal"],
	},
	{
		id: "4",
		title: {
			en: "Real Estate Law Services",
			ar: "خدمات قانون العقارات",
		},
		description: {
			en: "Comprehensive real estate legal services including property transactions and disputes",
			ar: "خدمات قانونية شاملة للعقارات تشمل المعاملات العقارية والنزاعات",
		},
		type: "service",
		category: {
			en: "Real Estate",
			ar: "العقارات",
		},
		url: "/",
		tags: ["real estate", "property", "transactions"],
	},
	{
		id: "5",
		title: {
			en: "Immigration Law Team",
			ar: "فريق قانون الهجرة",
		},
		description: {
			en: "Specialized immigration law team handling visa applications and citizenship matters",
			ar: "فريق متخصص في قانون الهجرة يتعامل مع طلبات التأشيرات وشؤون الجنسية",
		},
		type: "team",
		category: {
			en: "Immigration",
			ar: "الهجرة",
		},
		url: "/",
		tags: ["immigration", "visa", "citizenship"],
	},
	{
		id: "6",
		title: {
			en: "Contract Review Services",
			ar: "خدمات مراجعة العقود",
		},
		description: {
			en: "Professional contract review and drafting services for businesses and individuals",
			ar: "خدمات مراجعة وصياغة العقود المهنية للشركات والأفراد",
		},
		type: "service",
		category: {
			en: "Contract Law",
			ar: "قانون العقود",
		},
		url: "/",
		tags: ["contracts", "review", "drafting"],
	},
];
