const gameState = {
}

const side = Math.max(window.innerWdidth)

const config = {
    type: Phaser.AUTO,
    width: 0.9 * window.innerWidth,
    height: 0.9 * window.innerHeight,
    scale: window.devicePixelRatio,
    backgroundColor: "#ffffff",
    scene: [StartScene]
};

const game = new Phaser.Game(config)
