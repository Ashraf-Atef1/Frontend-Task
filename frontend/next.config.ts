import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
	/* config options here */
	images: {
		domains: ["appealing-apparel-1bdaacd6bb.media.strapiapp.com"],
	},
	outputFileTracingRoot: ".",
	output: "standalone",
};

export default withNextIntl(nextConfig);
