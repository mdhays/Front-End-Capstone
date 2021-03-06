var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update, render: render });

var player;
var gravestone;
var gravestones;
var graveYard;
var skeleton;
var cursors;
var ground;
var spawnGraveStoneTimer;
var scoreText;
var score = 0;
var timer;
var nextGraveStoneSpawn = 0;
var flyRate = 1200;
var music;
var jumpTimer = 0;
var gameOverText = "R.I.P";
var restartText = "Restart by clicking here";
var style = { font: "65px Rockwell", fill: "#00000", align: "center" };
var displayScore;
var globalGravity = 1000;
var playerJumped = false;


function preload() {
    
    game.load.image('graveyard', './sprites/cemetary.png');
    game.load.image('gravestone', './sprites/gravestone.png');
    game.load.image('ground', './sprites/blacksquare.jpg')
    game.load.spritesheet('skeleton', './sprites/skeleton.png', 73, 89, 21);
    game.load.audio('spooky', ['./audio/TombstoneSpookyScarySkeletonsRemix-Final-Extended.ogg']);

}


function create() {

    //  We only want world bounds on the left and right
    game.physics.setBoundsToWorld();

        // Assigning Fps
    game.time.desiredFps = 60;

    // Here we set the color of the background. I made it white since the image is black.
    game.stage.backgroundColor = 0xffffff;  
    // Adds the background as a tilesprite so it can be scrolled.
    graveYard = game.add.tileSprite(0, game.world.height - 400, 1024, 366, 'graveyard');
    console.log("background loads");
    //Adds the gravestone sprite to the game.
    gravestone = game.add.sprite('gravestone');
    // Make the gravestones into a group.
    gravestone = game.add.group();
    
    // Creates 1000 gravestones.
    gravestone.createMultiple(1000, 'gravestone');
    // Checks the gravestones position in relation to the world bounds. Allows us to kill the graves easily.
    gravestone.setAll('checkWorldBounds', true);
    // Scales the gravestones down to .1% because they're massive.
    gravestone.scale.setTo(.1);

    // The player's skeleton sprite.
    skeleton = game.add.sprite(30, game.world.height - 190, 'skeleton');
    // Defining where and what the ground constitutes. 
    ground = game.add.sprite(30, game.world.height - 100, 'ground');
    // Shrinks the black square down to a size we can use.
    ground.scale.setTo(.1);
    // Running animation for the skeleton.
    skeleton.animations.add('right', [1 ,2, 4, 5], 10, true);

    // enable physics on the player
    game.physics.enable(skeleton, Phaser.Physics.ARCADE);

    // enable physics on the black square serving as the ground.
    game.physics.enable(ground, Phaser.Physics.ARCADE);

    // enable physics on the gravestones.
    game.physics.enable(gravestone, Phaser.Physics.ARCADE);
    // Enables physics on all sprites in the group.
    gravestone.enableBody = true;

    // Sets the ground as immovable
    ground.body.immovable = true;

    // Creates the keys.
    cursors = game.input.keyboard.createCursorKeys();

    // Keeps track of the time between tombstones.
    game.spawnGraveStoneTimer = 0;

    // Audio

    // Adds the music to the game.
    music = game.add.audio('spooky');
    // Sets the music to loop. ogg files are best for looping audio.
    music.loop = true;
    // Plays the music.
    music.play();

    // Creating the timer.
    timer = game.time.create(false);

    //  Set a TimerEvent to occur after 2 seconds.
    timer.loop(500, updateScore, this);

    // Starts the timer.
    timer.start();



}


function update() {


    skeleton.checkWorldBounds = true;
    skeleton.outOfBoundsKill = true;

    // Checks for collision of the skeleton and floor.
    game.physics.arcade.collide(skeleton, ground);

    game.physics.arcade.collide(skeleton, gravestone, gameOver);

    // Sets the scroll rate of the graveyard background.
    graveYard.tilePosition.x -= 2;
    // Plays the running animation.
    skeleton.animations.play('right');

     //  Allow the player to jump if they are touching the ground.
    // if (cursors.up.isDown && skeleton.body.touching.down) {   
    //     // Setting the jump height.
    //     skeleton.body.velocity.y = -450;
    // }

    if (cursors.up.isDown && skeleton.body.touching.down) {
        //  Allow the player to jump if they are touching the ground.
        skeleton.body.velocity.y = -400;
        playerJumped = true;
        
    } else if (cursors.up.isDown && playerJumped == true )  {  
        // reduce players gravity if player recently jumped and jump key is down 
        skeleton.body.gravity.y = globalGravity - 500;

    } else {
        // reset gravity once the jump key is released to prevent prolongation
        playerJumped = false;
        skeleton.body.gravity.y = globalGravity;
    }


    // Calls the gravesAttack function at the correct time, fallRate set at 1000 by default
    game.spawnGraveStoneTimer += game.time.elapsed;
    // console.log("spooky!", game.spawnGraveStoneTimer);
    // if spawn timer reach one second (1000 miliseconds)
    if(game.spawnGraveStoneTimer > flyRate) {
        // reset timer
        game.spawnGraveStoneTimer = 0;
        // spawn new graves
        gravesAttack();
    }



    // These if statements control the speed the tombstones move at.
    if (score === 35) {

        gravestones.body.gravity.x = -1550;

    }
    
    if (score === 50) {

        gravestones.body.gravity.x = -2050;


    }

    if (score === 55) {

        gravestones.body.x = -2051;
    }

    if (score === 70) {

        gravestones.body.x = -2000;


    }
}


// This function handles any debuggers I use, mostly to test collision.
function render() {

    // game.debug.body(skeleton);
    // game.debug.body(ground);
    // game.debug.body(gravestone);
    game.debug.text('Score: ' + score, 32, 32);

}

function gravesAttack() {

    console.log("gravestones in");
    // Sets the coordinates of the gravestones' spawn.
    gravestones = gravestone.create(8000 ,game.world.height+4000, 'gravestone');
    // Gravity for tombstones
    gravestones.body.gravity.x = -1000;
    // Next 4 lines checking for boundaries
    gravestones.body.collideWorldBounds = false;
    gravestones.anchor.setTo = (0.5, 0.5);
    gravestones.checkWorldBounds = true;
    gravestones.outOfBoundsKill = true;

}

function updateScore() {

    // Incrementing the score.
    score++;
    console.log(score);

}

function gameOver() {

    // Kills our skeleton sprite.
    skeleton.kill();
    console.log("working");

    // Stops the timer and therefore, our score.
    timer.stop();

    // Adds text to screen when the function runs.
    var t = game.add.text(game.world.centerX-50, game.world.centerY-200, gameOverText, style);

    // Text that when click on, resets the game.
    var u = game.add.text(game.world.centerX-300, game.world.centerY-10, restartText, style);
        u.events.onInputDown.add(restartGame, this);
        u.inputEnabled = true;

    // Resets the score
    score = 0;

    // Stops the music.
    music.stop();

}

function restartGame() {


    game.state.restart();

}

