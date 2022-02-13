<template>
	<li :class="$style['color-picker__item']">
		<button
			type="button"
			:class="buttonClasses"
			:style="{ 'background-color': color.colorCode }"
			@click="selectColor"
			aria-label="select-color"></button>
	</li>
</template>

<script>
export default {
	emits: ['select-color'],
	props: ['color'],
	computed: {
		buttonClasses() {
			return [
				this.$style['color-picker__button'],
				{ [this.$style.active]: this.color.isActive },
			];
		},
	},
	methods: {
		selectColor() {
			this.$emit('select-color', this.color.id);
		},
	},
};
</script>

<style module lang="scss">
.color-picker__item,
.color-picker__button {
	display: flex;
	flex: 1;
}

.color-picker__button {
	justify-content: center;
	align-items: center;
	padding: 0;
	border: 0;
	width: em(24, 15);
	height: em(20, 15);
}

.color-picker__button::before {
	content: '';
	width: em(7, 15);
	height: em(12, 15);
	border: solid #fff;
	border-width: 0 em(3, 15) em(3, 15) 0;
	transform: translate(0, em(-1, 15)) rotate(45deg);
	opacity: 0;
	visibility: hidden;
}

.color-picker__button.active::before {
	opacity: 1;
	visibility: visible;
}
</style>
