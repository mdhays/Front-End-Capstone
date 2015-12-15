var game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO, '', { preload: preload, create: create, update: update });


// Global variables
var startButton;
var text;
var platforms;
var player;
var cursors;
var jumpButton;
var facing;
var rainbowDash;
var fluttershy;
var hoenn;


function preload() {
	// Preloading the images.
	game.load.image('sky', './images/Hoenn.png');
	game.load.image('pokeBall', './images/pokeball.png');
	game.load.image('platform', './images/platform.png');

	game.load.spritesheet('RainbowDash', './sprites/dash.png', 43, 60, 60);

}


function create() {
	
	// Assigning Fps
	game.time.desiredFps = 60;

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
    player = game.add.sprite(32, game.world.height - 200, 'RainbowDash');

        player.scale.setTo(2);

    //  We need to enable physics on the player
    game.physics.enable(player, Phaser.Physics.ARCADE);

    // Giving the sprite physics attributes.
    player.body.bounce.y = 0.2;
    player.body.gravity.y = 300;
    player.body.collideWorldBounds = true;

    cursors = game.input.keyboard.createCursorKeys();
    jumpButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

    player.animations.add('left', [4, 3, 2, 1], 10, true);
    player.animations.add('turn', [4], 20, true);
    player.animations.add('right', [1, 2, 3, 4], 10, true);
}

    
function update() {

	game.physics.arcade.collide(player, platforms);

	 player.body.velocity.x = 0;

    if (cursors.left.isDown)
    {
        player.body.velocity.x = -150;

        if (facing != 'left')
        {
            player.animations.play('left');
            facing = 'left';
        }
    }
    else if (cursors.right.isDown)
    {
        player.body.velocity.x = 150;

        if (facing != 'right')
        {
            player.animations.play('right');
            facing = 'right';
        }
    }
    else
    {
        if (facing != 'idle')
        {
            // player.animations.stop();

            if (facing == 'left')
            {
                player.frame = 0;
            }
            else
            {
                player.frame = [0, 1, 2, 3, 4];
            }

            facing = 'idle';
        }
    }
    
    if (jumpButton.isDown && player.body.onFloor() && game.time.now > jumpTimer)
    {
        player.body.velocity.y = -250;
        jumpTimer = game.time.now + 750;
    }

}

		

