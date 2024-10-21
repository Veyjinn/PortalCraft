<script lang="ts">
	import { base } from '$app/paths';
	import BlockSteps from	'$lib/components/BlockSteps/Block.svelte';

	let showAside = false;
	$:buttonText = showAside ? 'RETURN' : 'JOIN THE ADVENTURE';

	function toggle_aside() {
		showAside = !showAside;

	}
</script>

<section id="landing" style="background-image: url(./bg_main.webp);">
	<img src="title.png" alt="" />
	<h2>Are you ready<br />to see the other side?</h2>
</section>

<section id="content" style="background-image: url('./bg_content.png');">
	<!--TODO: Use this to fluidly reveal parts of the background image, to make it more appealing/dynamic
	https://codepen.io/tinyrebel/pen/aMYXJV-->
	<!--TODO: Add slide-in with info about server -->
	<!--TODO: Think about adding a wiki -->
	<!--TODO: Get inspired by vietnamese minecrft: https://www.crystalgemcraft.com/ -->
	<div style="position: absolute;top: 20%;">
		<a class="minecraft-button" on:click={toggle_aside}><span>{buttonText}</span></a>
	</div>
	<!--<div>
		<a class="wiki-button" href="{base}/">Motherfucking WIKI</a>
	</div>-->
	<div style="">
		<table>
			<thead>
				<tr><td colspan="3">Best Players</td></tr>
				<tr>
					<th>Pos.</th>
					<th>Name</th>
					<th>Time Played</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td data-title="Pos.">1</td>
					<td data-title="Name">Player 2</td>
					<td data-title="Time Played">150 hours</td>
				</tr>
				<tr>
					<td data-title="Pos.">2</td>
					<td data-title="Name">Player 1</td>
					<td data-title="Time Played">100 hours</td>
				</tr>
				<tr>
					<td data-title="Pos.">3</td>
					<td data-title="Name">Player 3</td>
					<td data-title="Time Played">50 hours</td>
				</tr>
			</tbody>
		</table>
		<table>
			<thead>
				<tr><td colspan="3">Best Players</td></tr>
				<tr>
					<th>Pos.</th>
					<th>Name</th>
					<th>Time Played</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td data-title="Pos.">1</td>
					<td data-title="Name">Player 2</td>
					<td data-title="Time Played">150 hours</td>
				</tr>
				<tr>
					<td data-title="Pos.">2</td>
					<td data-title="Name">Player 1</td>
					<td data-title="Time Played">100 hours</td>
				</tr>
				<tr>
					<td data-title="Pos.">3</td>
					<td data-title="Name">Player 3</td>
					<td data-title="Time Played">50 hours</td>
				</tr>
			</tbody>
		</table>
	</div>
	<aside
		class:show={showAside}
		style="background-image: url('./ai/2024-10-21_04-55-36_8933_upscale.png');"
	>
		<BlockSteps/>
	</aside>
</section>

<style lang="scss">
	section {
		/* https://codepen.io/tinyrebel/pen/aMYXJV */
		scroll-snap-align: start;
		position: relative;
		width: 100%;
		margin-top: -15rem;
		padding-top: 15rem;
		gap: 6rem;
		background-size: cover;
		background-position: center;
		min-height: 100vh;
		text-align: center;

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-align: center;

		> div {
			display: flex;
			flex-direction: row;
			gap: 10rem;
		}
		/* Blending background images */
		/* https://stackoverflow.com/questions/67995632/how-to-fade-edges-of-background-image-of-element-to-blend-in-with-the-main-backg */
		mask-image: linear-gradient(to top, black 0%, black 100%),
			linear-gradient(to top, transparent 0%, black 100%);
		mask-position: center, top, right, bottom, left;
		mask-size:
			100% 100%,
			100% 15rem;
		mask-repeat: no-repeat, no-repeat;
		mask-composite: subtract, add, add, add;

		aside {
			position: absolute;
			width: 100%;
			height: 0%;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			text-align: center;
			left: 0;
			bottom:0;
			background-size: cover;
			background-position: center;
			transition-duration: 1s;
			overflow: clip;

			mask-image: linear-gradient(to top, black 0%, black 100%),
			linear-gradient(to top, transparent 0%, black 100%);
			mask-position: center, top;
			mask-size:
				100% 100%,
				100% 20%;
			mask-repeat: no-repeat, no-repeat;
			mask-composite: subtract, add;

			&.show {
				height: 80%;
			}
		}
	}

	#landing {
		display: flex;
		flex-direction: column;
		justify-content: center; // Center vertically
		align-items: center; // Center horizontally
		height: 100vh; // Full viewport height
		text-align: center; // Center align text

		img {
			max-width: 80%; // Adjust as needed
			height: auto; // Maintain aspect ratio
			margin-bottom: 20px; // Space below the image
		}

		h2 {
			font-size: 2.5rem; // Adjust size as needed
			line-height: 1.2; // Adjust line height for readability
			text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.8); // Add shadow for contrast
			margin: 0; // Remove default margin
			padding: 0 20px; // Optional padding for small screens
		}
	}

	#content {

	}

	.minecraft-button {
		font-family: 'MinecraftTen', sans-serif;
		font-size: 4rem;
		text-decoration: none;
		text-align: center;
		text-shadow: rgb(6, 77, 42) 0 0.1em 0;
		color: var(--text);
		background-color: rgb(0, 140, 69);
		z-index: 1;
		position: relative;
		padding: 0 5rem;
		width: 7em;
		padding-bottom: 0.3em;
		border-radius: 0.1rem;
		transition-duration: 0.2s;

		&:hover {
			transform: translateY(-2px); /* Slight upward movement */
			box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); /* Add a slight shadow */
			background-color: rgb(10, 152, 80); /* Change background color slightly */
			text-shadow: rgb(6, 77, 42) 0 0.1em 0.1em; /* Increase text shadow slightly */
		}

		&:active {
			transition-duration: 0ms;
			transform: translateY(2px); /* Slight downward movement */
			box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.2); /* Add an inner shadow */
			background-color: rgb(0, 120, 60); /* Darken the background */
		}

		&::before {
			content: '';
			position: absolute;
			box-sizing: border-box;
			top: 0;
			left: -0.175em;
			width: 105%;
			height: 100%;
			background-color: rgb(12 110 61);
			z-index: -1;
			border: 0.07em solid rgb(40, 18, 18);
		}

		&::after {
			content: '';
			box-sizing: border-box;
			border: 1px solid red;
			position: absolute;
			top: -0.175em;
			left: 0;
			width: 100%;
			height: 125%;
			background-image: linear-gradient(rgb(6, 77, 42) 1% 1%, rgb(23, 154, 185));
			z-index: -1;
			border: 0.07em solid rgb(40, 18, 18);

			&:hover {
				filter: brightness(1.1); /* Brighten the gradient slightly */
			}
		}
	}

	.wiki-button {
		position: relative;
		top: -2px;
		border: 1px solid #135;
		font-weight: bold;
		text-transform: uppercase;
		color: #135;
		background-color: #39c;
		cursor: pointer;
		-moz-border-radius: 5px;
		-webkit-border-radius: 5px;
		border-radius: 5px;
		text-shadow:
			0 1px 2px rgba(255, 255, 255, 0.7),
			0 -1px 0 rgba(64, 38, 5, 0.9);
		-moz-box-shadow:
			inset 0 0 3px rgba(255, 255, 255, 0.6),
			inset 0 1px 2px rgba(255, 255, 255, 0.7),
			0 5px 0 #17a,
			0 6px 0 #135;
		-webkit-box-shadow:
			inset 0 0 3px rgba(255, 255, 255, 0.6),
			inset 0 1px 2px rgba(255, 255, 255, 0.7),
			0 5px 0 #17a,
			0 6px 0 #135;
		box-shadow:
			inset 0 0 3px rgba(255, 255, 255, 0.6),
			inset 0 1px 2px rgba(255, 255, 255, 0.7),
			0 5px 0 #17a,
			0 6px 0 #135;
		-webkit-transition: background 0.2s ease-out;
		transition: background 0.2s ease-out;

		&:hover {
			background-color: #6cd;
			top: 0;
			-moz-box-shadow:
				inset 0 0 3px rgba(255, 255, 255, 0.9),
				inset 0 2px 1px rgba(200, 220, 250, 0.8),
				0 5px 0 #17a,
				0 6px 0 #135;
			-webkit-box-shadow:
				inset 0 0 3px rgba(255, 255, 255, 0.9),
				inset 0 2px 1px rgba(200, 220, 250, 0.8),
				0 5px 0 #17a,
				0 6px 0 #135;
			box-shadow:
				inset 0 0 3px rgba(255, 255, 255, 0.9),
				inset 0 2px 1px rgba(200, 220, 250, 0.8),
				0 5px 0 #17a,
				0 6px 0 #135;
		}

		&:active {
			top: 0;
			background-color: #fff;
			-moz-box-shadow:
				inset 0 0 3px rgba(255, 255, 255, 0.9),
				inset 0 1px 2px rgba(200, 220, 250, 0.8),
				0 3px 0 #17a,
				0 0px 0 #135;
			-webkit-box-shadow:
				inset 0 0 3px rgba(255, 255, 255, 0.9),
				inset 0 1px 2px rgba(200, 220, 250, 0.8),
				0 3px 0 #17a,
				0 0px 0 #135;
			box-shadow:
				inset 0 0 3px rgba(255, 255, 255, 0.9),
				inset 0 1px 2px rgba(200, 220, 250, 0.8),
				0 3px 0 #17a,
				0 0px 0 #135;
		}
	}

	table {
		margin: 0 0 40px 0;
		box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
		display: table;
		background-image: linear-gradient(to bottom, rgba(255, 0, 0, 0), rgba(0, 0, 0, 16));
		border-radius: 2rem;
		padding: 1rem;

		thead {
			tr {
				font-weight: 900;
				color: #ffffff;
				background: var(--background) !important;
			}
		}

		tr {
			display: table-row;
			background: var(--accent);

			&:nth-of-type(even) {
				background: var(--secondary);
			}
			td {
				padding: 6px 12px;
				display: table-cell;
			}
		}
	}
	@media screen and (max-width: 580px) {
		table {
			display: block;

			thead {
				tr {
					padding: 0;
					height: 6px;
					display: none;

					td {
						display: none;
					}
				}
			}

			tr {
				padding: 14px 0 7px;
				display: block;
				text-align: start;

				&:nth-of-type(even) {
					td {
						&::before {
							color: var(--highlight_bright);
						}
					}
				}

				td {
					margin-bottom: 10px;
					padding: 2px 16px;
					display: block;

					&::before {
						margin-bottom: 3px;
						content: attr(data-title);
						min-width: 98px;
						font-size: 10px;
						line-height: 10px;
						font-weight: bold;
						text-transform: uppercase;
						color: var(--highlight_dark);
						display: block;
					}
				}
			}
		}
	}
</style>
