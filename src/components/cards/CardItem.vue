<template>
	<base-card :bg="cardBg" :class="$style['card-cs']">
		<template #head>
			<svg width="64" height="40" xmlns="http://www.w3.org/2000/svg">
				<g fill="none" fill-rule="evenodd">
					<circle fill="#000" opacity=".201" cx="20" cy="20" r="20" />
					<path
						:d="iconPath[card.title]"
						:style="iconStyles"
						fill-rule="nonzero"
					/>
				</g>
			</svg>
		</template>
		<template #default>
			<h2 :class="$style['card__title']">{{ card.title }}</h2>
			<p :class="$style['card__desc']">{{ card.desc }}</p>
		</template>
		<template #foot>
			<base-button :color="cardBg">Learn More</base-button>
		</template>
		<template #feature>
			<color-picker
				:class="$style['color-picker-cs']"
				:colors="formattedColors"
				@select-color="onSelectColor"
			></color-picker>
		</template>
	</base-card>
</template>

<script>
export default {
	emits: ['select-color'],
	props: ['card'],
	data() {
		return {
			formattedColors: null,
			cardBg: this.card.backgroundColor,
			iconPath: {
				'Sedans': 'M52.936 24.11c1.942 0 3.517 1.542 3.517 3.445 0 1.903-1.575 3.445-3.517 3.445s-3.516-1.542-3.516-3.445c0-1.903 1.574-3.445 3.516-3.445zm-21.957 0c1.942 0 3.517 1.542 3.517 3.445 0 1.903-1.575 3.445-3.517 3.445s-3.516-1.542-3.516-3.445c0-1.903 1.574-3.445 3.516-3.445zm6.948-4.848v1.429c0 .716.61 1.293 1.348 1.259a1.295 1.295 0 001.225-1.295v-1.393h8.256l13.483 1.313c.956.093 1.676.881 1.676 1.814 0 2.89-2.126 5.303-4.926 5.819.397-3.557-2.458-6.62-6.053-6.62-3.646 0-6.504 3.14-6.039 6.723h-9.879c.466-3.588-2.397-6.722-6.039-6.722-3.595 0-6.45 3.062-6.052 6.62-2.14-.398-3.916-1.912-4.61-3.931h1.142c.731 0 1.32-.598 1.285-1.322-.033-.678-.629-1.2-1.322-1.2H20v-.251c0-1.274 1.066-2.243 2.306-2.243h15.62zM42.59 11c2.645 0 4.99 1.556 5.972 3.963l.726 1.779H40.17L38.413 11h4.178zm-6.865 0l1.758 5.741H26.505l3.357-3.654A6.502 6.502 0 0134.644 11h1.082z',
				'Suvs': 'M31.002 22.358c2.917 0 5.18 2.593 4.762 5.506a4.828 4.828 0 01-2.962 3.778 4.797 4.797 0 01-5.3-1.165c-1.188-1.26-1.235-2.613-1.263-2.613-.42-2.924 1.857-5.506 4.763-5.506zm22 0c3.457 0 5.798 3.567 4.41 6.744A4.816 4.816 0 0152.3 31.94a4.826 4.826 0 01-4.06-4.077c-.42-2.915 1.846-5.506 4.762-5.506zm-15.04-6.083v1.462a1.29 1.29 0 001.352 1.29c.693-.033 1.227-.631 1.227-1.326v-1.426h8.3l13.056.716a1.29 1.29 0 011.164.917c.27.895.446 1.477.563 1.87h-1.047c-.694 0-1.291.534-1.324 1.228a1.29 1.29 0 001.288 1.352h1.445c-.164 2.225-1.57 4.193-3.6 5.05.13-4.212-3.255-7.63-7.384-7.63-4.317 0-7.762 3.718-7.358 8.086h-7.285c.43-4.655-3.503-8.531-8.131-8.046v-3.543h7.734zm-10.312 0v4.308a7.4 7.4 0 00-4.006 7.274 3.874 3.874 0 01-3.642-3.864v-1.635h1.46a1.29 1.29 0 000-2.58h-1.461v-3.213l.003-.29h7.646zm14.986-8.196c2.65 0 5 1.592 5.984 4.055l.63 1.579a5.525 5.525 0 01-.065-.004l-.026-.002-.034-.002-.022-.002a4.178 4.178 0 00-.224-.006l-.098-.001h-.039l-.136-.001h-.052l-.326-.001H40.211L38.528 8.08zm-13.632 0l-1.122 5.616h-7.144l1.47-4.71a1.29 1.29 0 011.231-.906h5.565zm6.832 0l1.683 5.615h-7.007l1.121-5.615h4.203z',
				'Luxury': 'M30.98 22.835c1.941 0 3.516 1.604 3.516 3.583 0 1.978-1.575 3.582-3.517 3.582s-3.516-1.604-3.516-3.582c0-1.979 1.574-3.583 3.516-3.583zm21.956 0c1.942 0 3.517 1.604 3.517 3.583 0 1.978-1.575 3.582-3.517 3.582s-3.516-1.604-3.516-3.582c0-1.979 1.574-3.583 3.516-3.583zm-9.143-10.45a1.27 1.27 0 011.819 0l3.715 3.784c4.444-.115 9.7 1.142 13.964 3.753.387.237.624.664.624 1.124 0 3.006-2.126 5.514-4.926 6.05.397-3.698-2.458-6.882-6.053-6.882-3.646 0-6.504 3.264-6.039 6.99h-9.669c.76-1.544.993-2.026 1.337-2.711l.082-.162c.421-.835 1.056-2.07 2.883-5.65 1.68-.023 3.47-.408 5.247-1.403l-2.984-3.04a1.328 1.328 0 010-1.854zm-7.68 1.064c.683-.2 1.395.202 1.592.898l.749 2.652a3.46 3.46 0 01-.247 2.51l-1.733 3.395-.216.424c-1.07-1.89-3.06-3.114-5.279-3.114-3.595 0-6.45 3.184-6.052 6.885-1.832-.347-3.414-1.537-4.278-3.276a1.331 1.331 0 01.117-1.376l.955-1.303-1.325-1.295c-.751-.735-.376-2.024.64-2.231l6.614-1.346.13-.026c.092-.019.145-.03.157-.031.314-.146 1.07-.591 1.07-1.506 0-.734.592-1.327 1.316-1.31.712.016 1.268.662 1.256 1.388a4.11 4.11 0 01-.348 1.611 22.69 22.69 0 014.7 1.146l-.7-2.473a1.314 1.314 0 01.882-1.622z'
			}
		};
	},
	computed: {
		iconStyles() {
			var cardTitle = this.card.title;
			var lightness;
			switch (cardTitle) {
				case 'Sedans':
					lightness = 60;
					break;
				case 'Suvs':
					lightness = 75;
					break;
				case 'Luxury':
					lightness = 180;
					break;
			}
			return { fill: this.shadeColor(this.cardBg, lightness), transition: 'all 0.3s' }
		}
	},
	methods: {
		shadeColor(color, percent) {
			var R = parseInt(color.substring(1,3),16);
			var G = parseInt(color.substring(3,5),16);
			var B = parseInt(color.substring(5,7),16);

			R = parseInt(R * (100 + percent) / 100);
			G = parseInt(G * (100 + percent) / 100);
			B = parseInt(B * (100 + percent) / 100);

			R = (R<255)?R:255;  
			G = (G<255)?G:255;  
			B = (B<255)?B:255;  

			var RR = ((R.toString(16).length==1)?"0"+R.toString(16):R.toString(16));
			var GG = ((G.toString(16).length==1)?"0"+G.toString(16):G.toString(16));
			var BB = ((B.toString(16).length==1)?"0"+B.toString(16):B.toString(16));

			return "#"+RR+GG+BB;
		},
		onSelectColor(colorId) {
			this.formattedColors.forEach((color) => {
				color.isActive = false;

				if (color.id === colorId) {
					color.isActive = true;
					this.cardBg = color.colorCode;
				}
			});
		},
	},
	mounted() {
		this.formattedColors = this.card.colors.map((color, ix) => {
			return { id: ix, colorCode: color, isActive: false };
		});
	},
};
</script>

<style module lang="scss">
.card-cs {
	display: flex;
	flex-direction: column;
	flex: 1;
	position: relative;
	transition: all 0.3s;
}

.color-picker-cs {
	position: absolute;
	left: 0;
	bottom: 0;
	width: 100%;
	box-shadow: 0 -1px 1px 0px rgb(255 255 255 / 30%);
	transform: translate(0, 100%);
	transition: all 0.3s ease-out;
}

.card-cs:hover .color-picker-cs {
	transform: translate(0, 0);
}

.card__title {
	margin-bottom: 25/40 +0em;
	font-family: $ff-secondary;
	font-size: 40/15 +0em;
	font-weight: $fw-700;
	line-height: 48/40 +0em;
	color: $neutral-1;
	text-transform: uppercase;
}
</style>
