import {
	Scene
} from './balls.js';

const signature = `

888888b.                              d8b 888
888  "88b                             Y8P 888
888  .88P                                 888
8888888K.   .d88b.  88888b.   .d88b.  888 888888
888  "Y88b d8P  Y8b 888 "88b d88""88b 888 888
888    888 88888888 888  888 888  888 888 888
888   d88P Y8b.     888  888 Y88..88P 888 Y88b.
8888888P"   "Y8888  888  888  "Y88P"  888  "Y888



8888888b. 8888888 888b    888  .d8888b.  8888888b.  8888888 .d8888b.
888   Y88b  888   8888b   888 d88P  Y88b 888   Y88b   888  d88P  Y88b
888    888  888   88888b  888 888    888 888    888   888  Y88b.
888   d88P  888   888Y88b 888 888        888   d88P   888   "Y888b.
8888888P"   888   888 Y88b888 888  88888 8888888P"    888      "Y88b.
888         888   888  Y88888 888    888 888 T88b     888        "888
888         888   888   Y8888 Y88b  d88P 888  T88b    888  Y88b  d88P
888       8888888 888    Y888  "Y8888P88 888   T88b 8888888 "Y8888P"



`;


document.addEventListener('DOMContentLoaded', () => {
	console.log(signature);

	const scene = new Scene();
	scene.setup();
	scene.display();

	const modals = document.getElementsByClassName('active-modal');
	for (const modal of modals) {
		modal.addEventListener('click', () => {
			document.getElementById('modal-id').classList.toggle('active');
		});
	}
});