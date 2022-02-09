class StartScene extends Phaser.Scene {
	constructor() {
		super({ key: 'StartScene' })
	}

	create() {
		let side = Math.min(config.width, config.height) / 2;
		let rect = this.add.rectangle(config.width / 2, config.height / 2, config.width, config.height).setStrokeStyle(4, 0x444444);
		console.log(config.width, config.height)
	}
}
