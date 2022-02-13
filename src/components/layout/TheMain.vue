<template>
	<main :class="$style.main">
		<base-container>
			<cards-list></cards-list>
		</base-container>
	</main>
</template>

<script>
import CardsList from '../cards/CardsList.vue';

export default {
	components: {
		CardsList,
	},
};
</script>

<style module lang="scss">
.main {
	display: flex;
	justify-content: center;
	align-items: center;
	flex: auto;
	flex-shrink: 1;
	min-height: 0;
	overflow: hidden;
	padding: em(24, 16) 0;
}

@media (min-width: 48em) {
}
</style>
