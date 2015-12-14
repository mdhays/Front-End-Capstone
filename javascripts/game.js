var game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO, '', { preload: preload, create: create, update: update });


// Global variables
var startButton;
var text;
var platforms;
var player;
var rainbowDash;
var fluttershy;
var hoenn;


function preload() {
	// Preloading the images.
	game.load.image('sky', './images/Hoenn.png');
	game.load.image('pokeBall', './images/pokeball.png');
	game.load.image('platform', './images/platform.png');

	game.load.spritesheet('RainbowDash', './sprites/rainbowdash.png', 55, 75, 39);

}


function create() {
	
	// Loading the Hoenn background.
	game.add.sprite(0, 0, 'sky');
	console.log("background loads");

 	//  The platforms group contains the ground and the 2 ledges we can jump on
    platforms = game.add.group();

    //  We will enable physics for any object that is created in this group
    platforms.enableBody = true;

    // Here we create the ground.
    var ground = platforms.create(0, game.world.height - 64, 'platform');

    //  Scale it to fit the width of the game (the original sprite is 400x32 in size)
    ground.scale.setTo(2, 2);

    //  This stops it from falling away when you jump on it
    ground.body.immovable = true;

    //  Now let's create two ledges
    var ledge = platforms.create(400, 400, 'platform');
    ledge.body.immovable = true;

    ledge = platforms.create(-150, 250, 'platform');
    ledge.body.immovable = true;

    // The player and its settings
    player = game.add.sprite(32, game.world.height - 150, 'RainbowDash');

    //  We need to enable physics on the player
    game.physics.enable(player, Phaser.Physics.ARCADE);

    
    player.body.bounce.y = 0.2;
    player.body.gravity.y = 300;
    player.body.collideWorldBounds = true;
}

    
function update() {

	game.physics.arcade.collide(player, platforms);

}
		
