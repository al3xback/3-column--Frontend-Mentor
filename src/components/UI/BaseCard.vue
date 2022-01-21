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
	padding: 48/15 +0em;
}

.card__head {
	display: flex;
	margin-bottom: 35/15 +0em;
}

.card__body {
	margin-bottom: auto;
}

.card__foot {
	margin-top: 25/15 +0em;
}

@media (min-width: 820/16 +0em) {
	.card__foot {
		margin-top: 83/15 +0em;
	}
}
</style>
