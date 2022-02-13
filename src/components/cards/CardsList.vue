<template>
	<div :class="$style.cards">
		<card-item
			v-for="card in cards"
			:key="card.id"
			:card="card"
			@select-color="onSelectColor"></card-item>
	</div>
</template>

<script>
import CardItem from './CardItem.vue';

export default {
	components: {
		CardItem,
	},
	data() {
		return {
			cards: [
				{
					id: 'c1',
					title: 'Sedans',
					desc: `Choose a sedan for its affordability and excellent fuel economy.
						Ideal for cruising in the city or on your next road trip.`,
					backgroundColor: this.$style.orange,
					colors: [
						this.$style.orange,
						'#577590',
						'#972d07',
						'#ff4b3e',
						'#FFB20F',
						'#FFE548',
						'#FFCA3A',
						'#8AC926',
					],
				},
				{
					id: 'c2',
					title: 'Suvs',
					desc: `Take an SUV for its spacious interior, power, and versatility.
						Perfect for your next family vacation and off-road adventures.`,
					backgroundColor: this.$style.darkCyan,
					colors: [
						this.$style.darkCyan,
						'#f94144',
						'#f3722c',
						'#f8961e',
						'#f9c74f',
						'#90be6d',
						'#43aa8b',
						'#577590',
					],
				},
				{
					id: 'c3',
					title: 'Luxury',
					desc: `Cruise in the best car brands without the bloated prices.
						Enjoy the enhanced comfort of a luxury rental and arrive in style.`,
					backgroundColor: this.$style.veryDarkCyan,
					colors: [
						this.$style.veryDarkCyan,
						'#067BC2',
						'#84BCDA',
						'#ECC30B',
						'#F37748',
						'#D56062',
						'#F4BBD3',
						'#F686BD',
					],
				},
			],
		};
	},
	methods: {
		onSelectColor(color, cardId) {
			const card = this.cards.find((card) => card.id === cardId);
			card.backgroundColor = color;
		},
	},
};
</script>

<style module lang="scss">
.cards {
	display: flex;
	flex-direction: column;
	max-width: em(360, 15);
	overflow: hidden;
	border-radius: em(8, 15);
	color: $white-75;
}

@media (min-width: em(820)) {
	.cards {
		flex-direction: row;
		max-width: em(920, 15);
	}
}
</style>
