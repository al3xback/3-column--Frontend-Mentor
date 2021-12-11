<template>
	<base-card :card-bg="cardBgColor" :class="$style['card__item']">
		<template #head>
			<i :class="iconClass" aria-hidden="true"></i>
		</template>
		<template #default>
			<h2 :class="$style['card__title']">{{ card.title }}</h2>
			<p :class="$style['card__desc']">{{ card.desc }}</p>
		</template>
		<template #foot>
			<base-button :color="card.backgroundColor">Learn More</base-button>
		</template>
		<template #misc>
			<color-picker
				:class="$style['color-picker']"
				:colors="formattedColors"
				@select-color="onSelectColor"
			></color-picker>
		</template>
	</base-card>
</template>

<script>
export default {
	emits: ['select-color'],
	props: ['card'],
	data() {
		return {
			formattedColors: null,
			cardBgColor: this.card.backgroundColor
		};
	},
	computed: {
		iconClass() {
			return 'icon-' + this.card.title.toLowerCase();
		},
	},
	methods: {
		onSelectColor(id, colorCode) {
			this.cardBgColor = colorCode;
			this.formattedColors.forEach((color) => {
				color.isActive = false;

				if (color.id === id) {
					color.isActive = true;
				}
			});
		},
	},
	mounted() {
		this.formattedColors = this.card.colors.map((color, ix) => {
			return { id: ix, colorCode: color, isActive: false };
		});
	},
};
</script>

<style module lang="scss">
.card__item {
	display: flex;
	flex-direction: column;
	flex: 1;
	position: relative;
	transition: all 0.3s;
}

.color-picker {
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
	box-shadow: 0 -1px 1px 0px rgb(255 255 255 / 30%);
	transform: translate(0, 100%);
	transition: all 0.3s ease-out;
}

.card__item:hover .color-picker {
	transform: translate(0, 0);
}

.card__title {
	margin-bottom: 25/40 +0em;
	font-family: $heading-font-family;
	font-weight: $bold-font-weight;
	font-size: 40/15 +0em;
	line-height: 48/40 +0em;
	color: $very-light-gray;
	text-transform: uppercase;
}
</style>
