class StartScene extends Phaser.Scene {
	constructor() {
		super({ key: 'StartScene' })
	}

	create() {
		let game = this.add.rectangle(width / 2, height / 2, width, height).setStrokeStyle(1, 0x444444).setOrigin(0.5);
		let title = this.add.text(width / 2, height / 20, 'HURDLE', {fill: '#000000', font: `${width / 20}px Arial Black`})
			.setOrigin(0.5).setStroke('#000000', 2);

		let side = width / 8;
		let spacing = width / 40;
		for (var i of [-2, -1, 0, 1, 2]) {
            for (var j of [-2, -1, 0, 1, 2]) {
                let square = this.add.rectangle(width / 2 + i * (side + spacing), height / 2 + j * (side + spacing), side, side).setStrokeStyle(1, 0x444444).setOrigin(0.5).setInteractive();
            }
        }
	}
}
