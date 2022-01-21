<template>
	<a :href="to" :class="$style.btn" :style="{ color: color }">
		<slot></slot>
	</a>
</template>

<script>
export default {
	props: {
		color: {
			type: String,
			required: false,
			default: null,
		},
		to: {
			type: String,
			required: false,
			default: '#',
		},
	},
};
</script>

<style module lang="scss">
.btn {
	display: inline-block;
	padding: 10/15 +0em 30/15 +0em;
	background-color: $white;
	border: 2/15 +0em solid transparent;
	border-radius: 25/15 + 0em;
	font: inherit;
	color: $primary-3;
	transition: all 0.3s;
}

.btn:hover,
.btn:active {
	background-color: transparent;
	border-color: $white;
	color: $white !important;
}
</style>
