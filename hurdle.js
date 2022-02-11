const gameState = {
}

var isMobile = false;
var height = 0.75 * Math.min(window.innerWidth, window.innerHeight);
var width = 0.75 * height;

window.addEventListener('touchstart', function () {
    isMobile = true;
    var height = Math.min(4 / 3 * window.innerWidth, window.innerHeight);
    var width = 0.75 * height;
})

const config = {
    type: Phaser.AUTO,
    height: height,
    width: width,
    scale: window.devicePixelRatio,
    backgroundColor: "#ffffff",
    scene: [StartScene]
};

const game = new Phaser.Game(config)
