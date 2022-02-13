<template>
	<div :class="$style.card" :style="{ 'background-color': bg }">
		<div :class="$style['card__head']">
			<slot name="head"></slot>
		</div>
		<div :class="$style['card__body']">
			<slot></slot>
		</div>
		<div :class="$style['card__foot']">
			<slot name="foot"></slot>
		</div>
		<slot name="feature"></slot>
	</div>
</template>

<script>
export default {
	props: ['bg'],
};
</script>

<style module lang="scss">
.card {
	padding: em(48, 15);
}

.card__head {
	display: flex;
	margin-bottom: em(35, 15);
}

.card__body {
	margin-bottom: auto;
}

.card__foot {
	margin-top: em(25, 15);
}

@media (min-width: em(820)) {
	.card__foot {
		margin-top: em(83, 15);
	}
}
</style>
