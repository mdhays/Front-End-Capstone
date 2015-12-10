var game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO, '', { preload: preload, create: create, update: update });

function preload() {
	// Getting the Hoenn background.
	game.load.image('sky', './images/Hoenn.png');
	game.load.image('pokeBall', './images/pokeball.png');
}

var startButton;


function create() {
	
	// Loading the Hoenn background.
	game.add.sprite(0, 0, 'sky');
	console.log("background loads");
	//Loads pokeball image and creates a button on it.
	startButton = game.add.button(0, 100, 'pokeBall', whenClicked, this);
	console.log("button loads");

	var text = " STRIFE ";
    var style = { font: "65px Rockwell", fill: "#007acc", align: "center" };

    var t = game.add.text(game.world.centerX-300, game.world.centerY-300, text, style);

}

function whenClicked() {
	console.log("Working ^^")
}

function update() {


}




