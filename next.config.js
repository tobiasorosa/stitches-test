/** @type {import('next').NextConfig} */

const withBundleAnalyzer = require('@next/bundle-analyzer')({
	enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
	reactStrictMode: true,
	swcMinify: true,

	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/,
			use: ['@svgr/webpack'],
		});

		return config;
	},

	images: {
		domains: ['www.idinheiro.com.br'],
	},

	publicRuntimeConfig: {
		appEnv: process.env.APP_ENV,
		nodeEnv: process.env.NODE_ENV,
	},
});