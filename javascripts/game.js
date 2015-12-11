var game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO, '', { preload: preload, create: create, update: update });

function preload() {
	// Preloading the images.
	game.load.image('sky', './images/Hoenn.png');
	game.load.image('pokeBall', './images/pokeball.png');
}
// Global variables for menus.
var startButton;
var text;



function create() {
	
	// Loading the Hoenn background.
	game.add.sprite(0, 0, 'sky');
	console.log("background loads");
	// Loads pokeball image and creates a button on it.
	startButton = game.add.button(0, 100, 'pokeBall', whenClicked, this);
	console.log("button loads");

	text = "             STRIFE ";
    var style = { font: "65px Rockwell", fill: "#007acc", align: "center" };
    // Creates the text, positions it, and adds it to the game world.
    var t = game.add.text(game.world.centerX-300, game.world.centerY-300, text, style);

    var RD;
    
    // When startButton is clicked, this function executes.
	function whenClicked() {
		// Button and text are removed...
		console.log("Click working ^^");
		startButton.destroy();
		t.destroy();

		// and new text and buttons, are created.
		text = " Choose Your Character ";
		t = game.add.text(game.world.centerX-300, game.world.centerY-300, text, style);
		RD = " Rainbow Dash ";
		

		rainbowDash = game.add.text(game.world.centerX-300, game.world.centerY-100, RD, style);
		rainbowDash.events.onInputDown.add(selected, this);
		rainbowDash.inputEnabled = true;
		
		function selected() {
			
			rainbowDash.destroy();
			t.destroy();
		}


	// End of whenClicked
	}
// End of create
}



function update() {


}




