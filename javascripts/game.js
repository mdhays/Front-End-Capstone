var game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO, '', { preload: preload, create: create, update: update, render: render });


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
var ground;
var floor;
var ledge;
var attacks;
var attackTimer = 0;
var space;

function preload() {
	// Preloading the images.
	game.load.image('sky', './images/Hoenn.png');
	game.load.image('pokeBall', './images/pokeball.png');
	game.load.image('platform', './images/platform.png');
	// Preloading the spritesheets.
	game.load.spritesheet('RainbowDash', './sprites/dash.png', 43, 50, 60);

}


function create() {
	
	// Assigning Fps
	game.time.desiredFps = 60;

	// Loading the Hoenn background.
	game.add.sprite(0, 0, 'sky');
	console.log("background loads");

 	//  The platforms group contains the 2 ledges we can jump on
    platforms = game.add.group();

    // floor is a seperate group for the ground. This is so we can work more easily on making
    // collision with the ground result in removing the sprite.
    floor = game.add.group();

    // This group will be invisible bullets for attacking.
    attacks = game.add.group();

    // Here we enable physics on the attacks group.
    game.physics.enable(attacks, Phaser.Physics.ARCADE);

    //  We will enable physics for any object that is created in these groups.
    platforms.enableBody = true;
    
    floor.enableBody = true;

    attacks.enableBody = true;

    // Here we create the ground.
    ground = floor.create(0, game.world.height - 64, 'platform');

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
    player = game.add.sprite(32, game.world.height - 700, 'RainbowDash');

    // Resizing the sprite to be 2x as big.
    player.scale.setTo(2);

    //  We need to enable physics on the player
    game.physics.enable(player, Phaser.Physics.ARCADE);

    // Giving the sprite physics attributes.
    player.body.gravity.y = 400;
    player.body.collideWorldBounds = true;

    // Enable movement.
    cursors = game.input.keyboard.createCursorKeys();
    attackButton = game.input.keyboard.addKeyCapture([ Phaser.Keyboard.SPACEBAR ]);
    // Animation for moving left.
    player.animations.add('left', [4, 3, 2, 1], 10, true);
    // Animation for moving right.
    player.animations.add('right', [1, 2, 3, 4], 10, true);
}

    
function update() {
	// Checks for collision of the player and platforms.
	game.physics.arcade.collide(player, platforms);
	// Checks for collision of the player and the floor/ground.
	game.physics.arcade.collide(player, floor, fallOffStage, null, this);
	// Checks for collision of a player and an attack.
	game.physics.arcade.collide(player, attacks, attackCollision, null, this);
	// Checks for collision between attacks and platforms.
	game.physics.arcade.collide(attacks, platforms, attackCollision, null, this);


	// Adding in properties of "player".
	
	// Horizontal speed (starts at 0 so we're idle unless we move).
	player.body.velocity.x = 0;
	
	// Showing the player is alive.
	player.alive = true;
	
	// Keeps track of damage taken.
	player.damageTaken = 0;

	// Attack power is calculated between 4 and 8.
	player.power = Math.random(4, 8); 
	
	// Does damage between 4 and 8.
	player.power = game.rnd.integerInRange(4, 8);


	// Defining movement speed.
    if (cursors.left.isDown)
    {
        player.body.velocity.x = -350;

        if (facing != 'left')
        {
            player.animations.play('left');
            facing = 'left';
            player.anchor.setTo(.5, 1); //so it flips around its middle
 		 	
 			player.scale.x = -2; //flipped
        }
    }
    else if (cursors.right.isDown)
    {
        player.body.velocity.x = 350;

        if (facing != 'right')
        {
            player.animations.play('right');
            facing = 'right';
            player.scale.x = 2; //facing default direction
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
    
    //  Allow the player to jump if they are touching the ground.
    if (cursors.up.isDown && player.body.touching.down)
    {
        player.body.velocity.y = -300;
    }

    if (game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR))
    {
        attack();
    }

}


// Handles removing the player sprite on contact.
function fallOffStage() {
	
	player.kill();
	console.log("dead");
}


// This function is for debugging and should be commented out for the final version.
function render() {

   	game.debug.body(player);
   	game.debug.body(attacks);

}

function attack() {

	// Incrementing attacks by 375 milliseconds to decrease spamming.
	if (attackTimer < game.time.now) {
		attackTimer = game.time.now + 375;
		var melee;

		// Defining directional attacks and the position of the attacks.
		if (facing === 'right') {
			melee = attacks.create(player.body.x + player.body.width / 2 + 20, player.body.y +
			player.body.height / 2 - 4, 'melee');
		}
		else {
			melee = attacks.create(player.body.x + player.body.width / 2 - 20, player.body.y +
			player.body.height / 2 - 4, 'melee');
		}

		// Give our attacks some physics.
		game.physics.enable(melee, Phaser.Physics.ARCADE);

		// Gets rid of attacks that go offscreen (only for testing purposes, remove before
		//	the final version).
		melee.outOfBoundsKill = true;

		// Defining the speed of the attacks.
		if (facing == 'right') {
			melee.body.velocity.x = 400;
		}

		else {
			melee.body.velocity.x = -400;
		}
		console.log("attack");
	}
 
}

// This function handles removing attacks from the game upon impact.
// Melee is passed in so we can destroy it.
function attackCollision(melee) {

	melee.kill();

}





		

