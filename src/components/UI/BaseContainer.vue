<template>
	<div :class="$style.container">
		<slot></slot>
	</div>
</template>

<style module lang="scss">
.container {
	padding: 0 24/16 +0em;
}
</style>
