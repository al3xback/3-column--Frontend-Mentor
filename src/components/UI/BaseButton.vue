<template>
	<button v-if="!link" type="button" :class="$style.btn">
		<slot></slot>
	</button>
	<a v-else :href="to" :class="btnClasses" :style="{ color: color }">
		<slot></slot>
	</a>
</template>

<script>
export default {
	props: {
		link: {
			type: Boolean,
			required: false,
			default: false,
		},
		to: {
			type: String,
			required: false,
			default: '#',
		},
		color: {
			type: String,
			required: false,
			default: null,
		},
	},
	computed: {
		btnClasses() {
			return [this.$style.btn, this.$style['btn--link']];
		},
	},
};
</script>

<style module lang="scss">
.btn {
	display: inline-block;
	padding: em(10, 15) em(30, 15);
	background-color: $neutral-2;
	border: em(2, 15) solid transparent;
	border-radius: em(25, 15);
	font: inherit;
	color: $primary-3;
	transition: all 0.3s;
}

.btn:hover,
.btn:active {
	background-color: transparent;
	border-color: $neutral-2;
	color: $neutral-2 !important;
}

.btn--link {
	padding: 0;
	color: $primary-1;
}

.btn--link:hover,
.btn--link:hover {
	color: inherit !important;
}
</style>
