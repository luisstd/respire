/** @type {import('next').NextConfig} */
import withSerwistInit from "@serwist/next";

const revision = crypto.randomUUID();

const withSerwist = withSerwistInit({
	swSrc: "app/sw.ts",
	swDest: "public/sw.js",
	reloadOnOnline: true,
	cacheOnNavigation: true,
	additionalPrecacheEntries: [{ url: "/" }, revision],
});

const nextConfig = withSerwist({
	reactStrictMode: true,
});

export default nextConfig;
