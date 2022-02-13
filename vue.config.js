module.exports = {
	css: {
		requireModuleExtension: true,
		loaderOptions: {
			sass: {
				additionalData: `
					@import "@/assets/scss/preload.scss";
				`,
			},
			css: {
				modules:
					process.env.NODE_ENV === 'production'
						? { localIdentName: 'css-[hash:hex:7]' }
						: { localIdentName: '[name]-[local]' },
			},
		},
	},
	publicPath:
		process.env.NODE_ENV === 'production'
			? '/3-column--Frontend-Mentor/'
			: '/',
};
