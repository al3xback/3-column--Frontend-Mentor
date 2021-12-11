<template>
	<ul :class="$style['color-picker__list']">
		<color-picker-item
			v-for="color in colors"
			:key="color.id"
			:color="color"
			@select-color="selectColor"
		></color-picker-item>
	</ul>
</template>

<script>
import ColorPickerItem from './ColorPickerItem.vue';

export default {
	components: {
		ColorPickerItem,
	},
	emits: ['select-color'],
	props: ['colors'],
	methods: {
		selectColor(id, colorCode) {
			this.$emit('select-color', id, colorCode);
		},
	}
};
</script>

<style module lang="scss">
.color-picker__list {
	display: flex;
}
</style>
