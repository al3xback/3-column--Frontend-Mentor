module.exports = {
	css: {
		requireModuleExtension: true,
		loaderOptions: {
			sass: {
				additionalData: `
					@import "@/assets/scss/_variables.scss";
				`
			},
			css: {
				modules: {
					localIdentName: 'css-[hash:hex:7]'
				},
			}
		}
	},
	publicPath: process.env.NODE_ENV === 'production'
		? '/3-column-preview-card-component--Frontend-Mentor/'
		: '/'
};
