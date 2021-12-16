module.exports = {
	css: {
		requireModuleExtension: true,
		loaderOptions: {
			sass: {
				additionalData: `
					@import "@/assets/scss/base/_variables.scss";
				`
			},
			css: {
				modules: process.env.NODE_ENV === 'production'
				? { localIdentName: 'css-[hash:hex:7]' }
				: { localIdentName: '[name]-[local]' }
			}
		}
	},
	publicPath: process.env.NODE_ENV === 'production'
		? '/3-column-preview-card-component--Frontend-Mentor/'
		: '/'
};
