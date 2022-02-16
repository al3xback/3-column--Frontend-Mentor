<template>
	<footer :class="$style.footer">
		<base-container>
			<p>
				Challenge by
				<base-button
					link
					href="https://www.frontendmentor.io?ref=challenge"
					target="_blank"
					>Frontend Mentor</base-button
				>
				. Coded by
				<base-button
					link
					href="https://github.com/al3xback"
					target="_blank"
					rel="noopener"
					>al3xback</base-button
				>.
			</p>
		</base-container>
	</footer>
</template>

<style module lang="scss">
.footer {
	flex: none;
	padding: em(12, 12) 0;
	font-size: em(12, 16);
	text-align: center;
}
</style>
