<template>
	<ul :class="$style['color-picker']">
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
		selectColor(colorId) {
			this.$emit('select-color', colorId);
		},
	}
};
</script>

<style module lang="scss">
.color-picker {
	display: flex;
}
</style>
