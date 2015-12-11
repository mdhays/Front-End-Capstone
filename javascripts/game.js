var game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO, '', { preload: preload, create: create, update: update });

function preload() {
	// Preloading the images.
	game.load.image('sky', './images/Hoenn.png');
	game.load.image('pokeBall', './images/pokeball.png');
	game.load.image('platform', './images/platform.png');
}
// Global variables for menus.
var startButton;
var text;

// Character names.

var rainbowDash;
var fluttershy;

// Level names.

var hoenn;

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

    // Character initials for storing their name's text in.
    
    var RD;
    var FS;

    // Level initials for storing their name's text in.

    var HN;
    
    // When startButton is clicked, this function executes.
	function whenClicked() {
		
		// Button and text are removed...
		console.log("Click working ^^");
		startButton.destroy();
		t.destroy();

		// and new text and buttons, are created.
		text = " Choose Your Character ";
		t = game.add.text(game.world.centerX-300, game.world.centerY-300, text, style);
		


		// This section handles creating character name text and allow it to be turned into an
		// input
		RD = " Rainbow Dash ";
		rainbowDash = game.add.text(game.world.centerX-700, game.world.centerY-100, RD, style);
		rainbowDash.events.onInputDown.add(selected, this);
		rainbowDash.inputEnabled = true;
		

		FS = " Fluttershy ";
		fluttershy = game.add.text(game.world.centerX+300, game.world.centerY-100, FS, style);
		fluttershy.events.onInputDown.add(selected, this);
		fluttershy.inputEnabled = true;

		// This function runs when a character's name is clicked on.
		// It handles removing the screens elements on this page and adding ones for the level
		// select page.
		function selected() {
			
			// Text is removed and updated.
			t.destroy();
			rainbowDash.destroy();
			fluttershy.destroy();

			text = " Select A Stage ";
			t = game.add.text(game.world.centerX-300, game.world.centerY-300, text, style);

			HN = " Hoenn ";
		hoenn = game.add.text(game.world.centerX-220, game.world.centerY-100, HN, style);
		hoenn.events.onInputDown.add(levelSelected, this);
		hoenn.inputEnabled = true;

			// This function runs when a level's name has been clicked on.
			// It handles removing the screen's elements and will eventually move to the
			// level view.
			function levelSelected() {

				t.destroy();
				hoenn.destroy();

				//  We're going to be using physics, so enable the Arcade Physics system.
			    game.physics.startSystem(Phaser.Physics.ARCADE);

			     //  The platforms group contains the ground and the 2 ledges we can jump on
			    platforms = game.add.group();

			    //  We will enable physics for any object that is created in this group
			    platforms.enableBody = true;

			     // Here we create the ground.
			    var ground = platforms.create(300, game.world.height - 64, 'platform');

			    //  Scale it to fit the width of the game (the original sprite is 400x32 in size)
			    ground.scale.setTo(2, 2);

			    //  This stops it from falling away when you jump on it
			    ground.body.immovable = true;

			     //  Now let's create two ledges
			    var ledge = platforms.create(-100, 550, 'platform');

			    ledge.body.immovable = true;

			    ledge = platforms.create(1100, 550, 'platform');

			    ledge.body.immovable = true;
			}
		}


	// End of whenClicked
	}
// End of create
}



function update() {


}




