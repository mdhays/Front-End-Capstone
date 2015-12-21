var game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO, '', { preload: preload, create: create, update: update, render: render });


// Global variables
var startButton;
var text;
var platforms;
var player;
var player2;
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
var timer;
var attackTimer = 0;
var space;
var upButton;
var downButton;
var leftButton;
var rightButton;

function preload() {
	// Preloading the images.
	game.load.image('sky', './images/Hoenn.png');
	game.load.image('pokeBall', './images/pokeball.png');
	game.load.image('platform', './images/platform.png');
	// Preloading the spritesheets.
	game.load.spritesheet('RainbowDash', './sprites/dash.png', 43, 50, 60);
	game.load.spritesheet('Twilight', './sprites/twilight.png', 60, 65, 30);

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

    player2 = game.add.sprite(120, game.world.height - 700, 'Twilight');

    // new LifeSpan();

    // These lines of code handle flipping the sprite so it faces to the left.
    player.anchor.setTo(.5, 1); //so it flips around its middle

    // Resizing the Rainbow Dash sprite to be 2x as big.
    player.scale.setTo(2);

    // Resizing the Twilight Sparkle sprite to be 1.4x as big.
    player2.scale.setTo(1.4);

    //  We need to enable physics on the players
    game.physics.enable(player, Phaser.Physics.ARCADE);
    game.physics.enable(player2, Phaser.Physics.ARCADE);
    // Giving the sprites physics attributes.
    player.body.gravity.y = 400;
    player2.body.gravity.y = 400;
    player.body.collideWorldBounds = true;
    player2.body.collideWorldBounds = true;

    // Enable movement for player1.
    cursors = game.input.keyboard.createCursorKeys();

    upButton = game.input.keyboard.addKey(Phaser.Keyboard.W);
    downButton = game.input.keyboard.addKey(Phaser.Keyboard.S);
    leftButton = game.input.keyboard.addKey(Phaser.Keyboard.A);
    rightButton = game.input.keyboard.addKey(Phaser.Keyboard.D);

    attackButton = game.input.keyboard.addKeyCapture([ Phaser.Keyboard.SPACEBAR ]);
    // Animation for moving left.
    player.animations.add('left', [4, 3, 2, 1], 10, true);
    // Animation for moving right.
    player.animations.add('right', [1, 2, 3, 4], 10, true);

    player2.animations.add('l', [1, 2, 3, 4], 10, true);
    player2.animations.add('r', [4, 3, 2, 1], 10, true);

}

// This function handles game task that are being updated every frame.
function update() {

    //Player1 collision handlers.

	// Checks for collision of the player and platforms.
	game.physics.arcade.collide(player, platforms);
	// Checks for collision of the player and the floor/ground.
	game.physics.arcade.collide(player, floor, fallOffStageP1, null, this);
	// Checks for collision of a player and an attack.
	game.physics.arcade.collide(player, attacks, attackCollision, null, this);
	// Checks for collision between attacks and platforms.
	game.physics.arcade.collide(attacks, platforms, attackCollision, null, this);

	// Player2 collision handlers.

	// Checks for collision of the player and platforms.
	game.physics.arcade.collide(player2, platforms);
	// Checks for collision of the player and the floor/ground.
	game.physics.arcade.collide(player2, floor, fallOffStageP2, null, this);
	// Checks for collision of a player and an attack.
	game.physics.arcade.collide(player2, attacks, attackCollision, null, this);


	// Adding in properties of "player".
	
	// Horizontal speed (starts at 0 so we're idle unless we move).
	player.body.velocity.x = 0;
    player2.body.velocity.x = 0;
	






	
	
	
	
	


     if (cursors.left.isDown)
    {
        player.body.velocity.x = -350;

        if (facing != 'left')
        {
            player.animations.play('left');
            facing = 'left';
            
            
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
            // 
            player.scale.x = 2; //facing default direction
        }
    }
    else
    {
        if (facing != 'idle')
        {

            player.frame = [0, 1, 2, 3, 4];
            
        }
    }
    
    //  Allow the player to jump if they are touching the ground.
    if (cursors.up.isDown && player.body.touching.down)
    {
        player.body.velocity.y = -300;
    }

    if (game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR))
    {
        attackP1();
    }



    //Player2
	// Defining movement speed.
    if (leftButton.isDown)
    {
        player2.body.velocity.x = -350;

        if (facing != 'left')
        {
            player2.animations.play('l');
            facing = 'left';
            console.log("player 2 facing left");
            
 		 	player2.scale.x = 2; //facing default direction
 			
        }
    }
    else if (rightButton.isDown)
    {
        player2.body.velocity.x = 350;

        if (facing != 'right')
        {
            player2.animations.play('r');
            facing = 'right';
            console.log("player 2 facing right");


            player2.scale.x = -2; //flipped
        }
    }
    else
    {
        if (facing != 'idle')
        {

            player2.frame = [0, 1, 2, 3, 4];
            
        }
    }
    
    //  Allow the player to jump if they are touching the ground.
    if (upButton.isDown && player2.body.touching.down)
    {
        player2.body.velocity.y = -300;
    }

    if (downButton.isDown)
    {
        attackP2();
    }
 

}


// Handles removing the player1 sprite on contact.
function fallOffStageP1() {
	
	player.kill();
	console.log("dead");
}

// Handles removing the player2 sprite on contact.
function fallOffStageP2() {
    
    player2.kill();
    console.log("dead");
}

// This function is for debugging and should be commented out for the final version.
function render() {

   	game.debug.body(player);
   	game.debug.body(player2);
   	game.debug.body(attacks);

}

function attackP1() {

	// Incrementing attacks by 375 milliseconds.
	if (attackTimer < game.time.now) {
		attackTimer = game.time.now + 375;
		// melee is an instance of the attacks group we previously made.
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
        // Not sure I need this...
		// game.physics.enable(melee, Phaser.Physics.ARCADE);

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


function attackP2() {

    // Incrementing attacks by 375 milliseconds.
    if (attackTimer < game.time.now) {
        attackTimer = game.time.now + 375;
        // melee is an instance of the attacks group we previously made.
        var melee;

        // Defining directional attacks and the position of the attacks.
        if (facing === 'right') {
            melee = attacks.create(player2.body.x + player2.body.width / 2 + 20, player2.body.y +
            player2.body.height / 2 - 4, 'melee');
        }
        else {
            melee = attacks.create(player2.body.x + player2.body.width / 2 - 20, player2.body.y +
            player2.body.height / 2 - 4, 'melee');
        }

        // Give our attacks some physics.
        // Not sure I need this...
        // game.physics.enable(melee, Phaser.Physics.ARCADE);

        // Gets rid of attacks that go offscreen (only for testing purposes, remove before
        //  the final version).
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





		

