<template>
	<footer :class="$style.footer">
		<base-container>
			<p>
				Challenge by
				<a
					:class="$style['btn--link']"
					href="https://www.frontendmentor.io?ref=challenge"
					target="_blank"
					>Frontend Mentor</a
				>
				. Coded by
				<a
					:class="$style['btn--link']"
					href="https://github.com/al3xback"
					target="_blank"
					rel="noopener"
					>al3xback</a
				>.
			</p>
		</base-container>
	</footer>
</template>

<style module lang="scss">
.footer {
	flex: none;
	padding: 12/12 +0em 0;
	font-size: 12/16 +0em;
	text-align: center;
}

.btn--link {
	color: $primary-1;
}
</style>
