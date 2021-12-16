<template>
	<li :class="$style['color-picker__list-item']">
		<button
			type="button"
			:class="buttonClasses"
			:style="{ 'background-color': color.colorCode }"
			@click="selectColor"
			aria-label="select-color"
		></button>
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
			this.$emit('select-color', this.color.id, this.color.colorCode);
		},
	},
};
</script>

<style module lang="scss">
.color-picker__list-item,
.color-picker__button {
	display: flex;
	flex: 1;
}

.color-picker__button {
	justify-content: center;
	align-items: center;
	padding: 0;
	border: 0;
	width: 24/15 +0em;
	height: 20/15 +0em;
}

.color-picker__button::before {
	content: "";
	width: 7/15 +0em;
	height: 12/15 +0em;
	border: solid #fff;
	border-width: 0 3/15 +0em 3/15 +0em 0;
	transform: translate(0, -1/15 +0em) rotate(45deg);
	opacity: 0;
	visibility: hidden;
}

.color-picker__button.active::before {
	opacity: 1;
	visibility: visible;
}
</style>
