var game = new Phaser.Game(1920, 1080, Phaser.AUTO, '', { preload: preload, create: create, update: update });

function preload() {
	// Getting the Hoenn background.
	game.load.image('sky', './images/Hoenn.png');

}

function create() {
	
	// Loading the Hoenn background.
	game.add.sprite(0, 0, 'sky');
	console.log("background loads");

	 var text = " STRIFE ";
    var style = { font: "65px Rockwell", fill: "#007acc", align: "center" };

    var t = game.add.text(game.world.centerX-300, game.world.centerY-300, text, style);
}

function update() {
}




