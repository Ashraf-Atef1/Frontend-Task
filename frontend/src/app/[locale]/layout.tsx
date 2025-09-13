import type { Metadata } from "next";
import { DM_Sans, DM_Mono } from "next/font/google";
import "../globals.css";
import Header from "@/components/shared/header/Header.component";
import Footer from "@/components/shared/footer/Footer.component";
import { RootProvider } from "@/provider/RootProvider.component";
import { getMessages, setRequestLocale } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { routing } from "@/i18n/routing";

const dmSans = DM_Sans({
	variable: "--font-dm-sans",
	subsets: ["latin"],
	weight: ["400", "500", "700"],
});
const dmMono = DM_Mono({
	variable: "--font-dm-mono",
	subsets: ["latin"],
	weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
	title: "IO Tech Task",
	description: "A multi-lingual website built with Next.js and Strapi",
};

export function generateStaticParams() {
	return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
	children,
	params,
}: Readonly<{
	children: React.ReactNode;
	params: Promise<{ locale: string }>;
}>) {
	const { locale } = await params;
	const dir = locale === "ar" ? "rtl" : "ltr";
	const messages = await getMessages();
	setRequestLocale(locale);
	return (
		<html lang={locale} dir={dir}>
			<body className={`${dmSans.variable} ${dmMono.variable} antialiased`}>
				<NextIntlClientProvider messages={messages}>
					<RootProvider>
						<Header />
						{children}
						<Footer />
					</RootProvider>
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
