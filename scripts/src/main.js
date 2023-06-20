
window.addEventListener('load', function () {

	var game = new Phaser.Game({
		parent: 'phaser-example',
		width: 1280,
		height: 720,
		type: Phaser.AUTO,
        backgroundColor: "rgb(220, 220, 220)",
		scale: {
			mode: Phaser.Scale.FIT,
			autoCenter: true
		},
		physics: {
			default: 'arcade',
			arcade: {
				gravity: { y: 0 },
				debug: false
			}
		}
	});

	game.scene.add("Boot", Boot, true);
});

class Boot extends Phaser.Scene {

	preload() {
		
		this.load.pack("pack", "assets/asset-pack.json");
	}

	create() {

		this.scene.start("Preload");
	}
}