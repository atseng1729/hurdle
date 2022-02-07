const gameState = {
}

const config = {
    type: Phaser.AUTO,
    width: window.innerWidth * window.devicePixelRatio,
    height: window.innerHeight * window.devicePixelRatio,
    scale: window.devicePixelRatio,
    backgroundColor: "#ffffff",
    scene: [StartScene]
};

const game = new Phaser.Game(config)
