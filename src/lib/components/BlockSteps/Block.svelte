<script lang="ts" context="module">
	import ButtonRetro from '$lib/components/ButtonRetro.svelte';
	import { ButtonSize, ButtonType } from '$lib/components/ButtonRetro.svelte';
	import Step from './Step.svelte';
	// Icons from: https://icon-sets.iconify.design/
</script>

<ul class="infoGraphic">
	<li>
		<a href="https://www.minecraft.net/en-us/download">
			<div class="numberWrap">
				<div class="number fontColor1">1</div>
				<div class="coverWrap">
					<div class="numberCover"></div>
				</div>
			</div>
			<div class="content">
				<svg
					class="icon"
					xmlns="http://www.w3.org/2000/svg"
					width="1em"
					height="1em"
					viewBox="0 0 24 24"
				>
					<g
						fill="none"
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
					>
						<path
							fill="currentColor"
							fill-opacity="0"
							stroke-dasharray="20"
							stroke-dashoffset="20"
							d="M12 4h2v6h2.5l-4.5 4.5M12 4h-2v6h-2.5l4.5 4.5"
						>
							<animate
								attributeName="d"
								begin="0.5s"
								dur="1.5s"
								repeatCount="indefinite"
								values="M12 4h2v6h2.5l-4.5 4.5M12 4h-2v6h-2.5l4.5 4.5;M12 4h2v3h2.5l-4.5 4.5M12 4h-2v3h-2.5l4.5 4.5;M12 4h2v6h2.5l-4.5 4.5M12 4h-2v6h-2.5l4.5 4.5"
							/>
							<animate
								fill="freeze"
								attributeName="fill-opacity"
								begin="0.7s"
								dur="0.5s"
								values="0;1"
							/>
							<animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="20;0" />
						</path>
						<path stroke-dasharray="14" stroke-dashoffset="14" d="M6 19h12">
							<animate
								fill="freeze"
								attributeName="stroke-dashoffset"
								begin="0.5s"
								dur="0.2s"
								values="14;0"
							/>
						</path>
					</g>
				</svg>
				<h2>Download</h2>
				<p>The minecraft legacy client</p>
			</div>
		</a>
	</li>
	<li>
		<a href="https://help.minecraft.net/hc/en-us/articles/360034754852-Change-Game-Version-for-Minecraft-Java-Edition">
			<div class="numberWrap">
				<div class="number fontColor2">2</div>
				<div class="coverWrap">
					<div class="numberCover"></div>
				</div>
			</div>
			<div class="content">
				<svg
					class="icon"
					xmlns="http://www.w3.org/2000/svg"
					width="1em"
					height="1em"
					viewBox="0 0 24 24"
				>
					<path
						fill="none"
						stroke="currentColor"
						stroke-dasharray="16"
						stroke-dashoffset="16"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M12 3c4.97 0 9 4.03 9 9"
					>
						<animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="16;0" />
						<animateTransform
							attributeName="transform"
							dur="1.5s"
							repeatCount="indefinite"
							type="rotate"
							values="0 12 12;360 12 12"
						/>
					</path>
				</svg>
				<h2>Install</h2>
				<p>Minecraft v1.20.4</p>
				<p>in the launcher</p>
			</div>
		</a>
	</li>
	<li>
		<div class="numberWrap">
			<div class="number fontColor3">3</div>
			<div class="coverWrap">
				<div class="numberCover"></div>
			</div>
		</div>
		<div class="content">
			<svg
				class="icon"
				xmlns="http://www.w3.org/2000/svg"
				width="1em"
				height="1em"
				viewBox="0 0 24 24"
			>
				<mask id="lineMdCompassFilledLoop0">
					<g
						fill="none"
						stroke="#fff"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
					>
						<path
							fill="#fff"
							fill-opacity="0"
							stroke-dasharray="64"
							stroke-dashoffset="64"
							d="M12 3c4.97 0 9 4.03 9 9c0 4.97 -4.03 9 -9 9c-4.97 0 -9 -4.03 -9 -9c0 -4.97 4.03 -9 9 -9Z"
						>
							<animate
								fill="freeze"
								attributeName="fill-opacity"
								begin="0.6s"
								dur="0.5s"
								values="0;1"
							/>
							<animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0" />
						</path>
						<path
							fill="#000"
							stroke="none"
							d="M11 11L12 12L13 13L12 12z"
							transform="rotate(-180 12 12)"
						>
							<animate
								fill="freeze"
								attributeName="d"
								begin="1.1s"
								dur="0.3s"
								values="M11 11L12 12L13 13L12 12z;M10.2 10.2L17 7L13.8 13.8L7 17z"
							/>
							<animateTransform
								attributeName="transform"
								dur="9s"
								repeatCount="indefinite"
								type="rotate"
								values="-180 12 12;0 12 12;0 12 12;0 12 12;0 12 12;270 12 12;-90 12 12;0 12 12;-180 12 12;-35 12 12;-40 12 12;-45 12 12;-45 12 12;-110 12 12;-135 12 12;-180 12 12"
							/>
						</path>
						<circle cx="12" cy="12" r="1" fill="#fff" fill-opacity="0" stroke="none">
							<animate
								fill="freeze"
								attributeName="fill-opacity"
								begin="1.4s"
								dur="0.5s"
								values="0;1"
							/>
						</circle>
					</g>
				</mask>
				<rect width="24" height="24" fill="currentColor" mask="url(#lineMdCompassFilledLoop0)" />
			</svg>
			<h2>Join</h2>
			<p>The server</p>
			<p>IP: s1125016.csrv.pl</p>
		</div>
	</li>
	<!--<li>
		<div class="numberWrap">
			<div class="number fontColor4">4</div>
			<div class="coverWrap">
				<div class="numberCover"></div>
			</div>
		</div>
		<div class="content">
			<div class="icon iconMap"></div>
			<h2>Plan</h2>
			<p>Sagittis, audantium sem eveniet lacus pede porttitor aenean.</p>
		</div>
	</li>
	<li>
		<div class="numberWrap">
			<div class="number fontColor5">5</div>
			<div class="coverWrap">
				<div class="numberCover"></div>
			</div>
		</div>
		<div class="content">
			<div class="icon iconBulb"></div>
			<h2>Educate</h2>
			<p>Sagittis, audantium sem eveniet lacus pede porttitor aenean.</p>
		</div>
	</li>
	<li>
      <div class="numberWrap">
      <div class="number  fontColor6">6</div>
      <div class="coverWrap">
        <div class="numberCover"></div>
      </div>
        </div>
      <div class="content">
        <div class="icon iconPeace"></div>
        <h2>Succeed</h2>
        <p>Sagittis, audantium sem eveniet lacus pede porttitor aenean.</p>
      </div>
    </li> -->
</ul>

<style lang="scss">
	:root {
		--bg1: #f5f8f7;
		--blue: #3498db;
		--green: #2ecc71;
		--purple: #9b59b6;
		--gold: #f1c40f;
		--red: #e74c3c;
		--orange: #e67e22;
		--shadow1: 0 2px 4px #00000026, 0 3px 6px #0000001f;
		--shadow2: 0 2px 6px #00000044, 0 4px 7px #00000022;
	}
	ul.infoGraphic {
		// Resize with Ems
		font-size: var(--font-size);
		display: flex;
		flex-flow: wrap;
		justify-content: center;
		list-style-type: none;
		background: rgba(0, 0, 0, 0.5);
		border-radius: 5rem;
		li {
			position: relative;
			width: 100%;
			max-width: 25em;
			border-radius: 0.5em;
			padding: 0.5em;
			z-index: 1;
			transition: all 0.2s;
			cursor: pointer;

			.numberWrap {
				position: absolute;
			}
			.number {
				font-family: 'maven pro', sans-serif;
				font-size: 13em;
				font-weight: 900;
				width: 0.9em;
				text-align: center;
				&.fontColor1 {
					color: var(--blue);
				}
				&.fontColor2 {
					color: var(--green);
				}
				&.fontColor3 {
					color: var(--purple);
				}
				&.fontColor4 {
					color: var(--gold);
				}
				&.fontColor5 {
					color: var(--red);
				}
				&.fontColor6 {
					color: var(--orange);
				}

				mask-image: linear-gradient(to top, black 0%, black 100%),
					linear-gradient(to bottom right, transparent 0%, black 100%);
				mask-position:
					center,
					bottom right;
				mask-size:
					100% 100%,
					50% 25%;
				mask-repeat: no-repeat, no-repeat;
				mask-composite: subtract, add, add, add;
			}
			.coverWrap {
				transform: rotate(130deg);
				position: absolute;
				width: 18em;
				height: 15em;
				left: -3em;
				top: -1em;
				.numberCover {
					position: absolute;
					width: 18em;
					height: 6em;
					border-radius: 50% 50% 0 0;
					border-bottom: 3px solid #f5f8f7;
					transition: all 0.4s;

					&::before {
						position: absolute;
						bottom: 5px;
						left: 4em;
						right: 4em;
						top: 5em;
						box-shadow: 0 0 30px 17px #48668577;
						border-radius: 100px / 10px;
						z-index: -1;
					}
					&::after {
						position: absolute;
						bottom: 0;
						content: '';
						left: -10%;
						width: 120%;
						height: 150%;
						background: radial-gradient(at bottom, #48668533, transparent, transparent);
						z-index: 1;
					}
				}
			}
			.content {
				margin: 8em 3em 1em 7em;
				position: relative;
				h2 {
					font-size: 1.7em;
					font-weight: 500;
					text-align: center;
					margin-bottom: 10px;
					text-transform: uppercase;
				}
				p {
					line-height: 1.5em;
				}
			}
		}
	}

	// I like the curved version too, so I made it a hover for fun.
	ul.infoGraphic li:hover .coverWrap .numberCover {
		border-radius: 100%;
	}

	/////////////////////////////////////
	// Fontawesome Icons
	// List: http://astronautweb.co/snippet/font-awesome/

	.icon {
		position: absolute;
		font-size: 4em;
		text-align: center;
		top: -1em;
		left: 50%;
		transform: translatex(-50%);
	}

	// --------------
	// General Layout
	// --------------

	@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500&display=swap');

	@import url('https://fonts.googleapis.com/css2?family=Maven+Pro:wght@800&display=swap');
</style>
