<template>
	<div :class="$style.container">
		<slot></slot>
	</div>
</template>

<style module lang="scss">
.container {
	padding: 0 em(24);
}
</style>
