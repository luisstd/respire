/** @type {import('next').NextConfig} */
import withSerwistInit from "@serwist/next";
const { withPlausibleProxy } = require("next-plausible");

const revision = crypto.randomUUID();

const withSerwist = withSerwistInit({
	swSrc: "app/sw.ts",
	swDest: "public/sw.js",
	reloadOnOnline: true,
	cacheOnNavigation: true,
	additionalPrecacheEntries: [{ url: "/" }, revision],
});

const nextConfig = {
	reactStrictMode: true,
};

export default withPlausibleProxy()(withSerwist(nextConfig));
