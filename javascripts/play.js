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
var nextGraveStoneSpawn = 0;
var flyRate = 750;
var music;
var jumpTimer = 0;
var loadingJump = false;

function preload() {
    
    game.load.image('graveyard', './sprites/cemetary.png');
    game.load.image('gravestone', './sprites/gravestone.png');
    game.load.image('ground', './sprites/blacksquare.jpg')
    game.load.spritesheet('skeleton', './sprites/skeleton.png', 73, 89, 21);
    game.load.audio('spooky', ['./audio/TombstoneSpookyScarySkeletonsRemix-Final-Extended.ogg']);

}


function create() {

        // Assigning Fps
    game.time.desiredFps = 60;

    // Here we set the color of the background. I made it white since the image is black.
    game.stage.backgroundColor = 0xffffff;  
    // Adds the background as a tilesprite so it can be scrolled.
    graveYard = game.add.tileSprite(0, game.world.height - 400, 1024, 366, 'graveyard');
    console.log("background loads");

    gravestone = game.add.sprite('gravestone');


    // Make the gravestones into a group.
    gravestone = game.add.group();
    // Enables physics on all sprites in the group.
    gravestone.enableBody = true;

    gravestone.createMultiple(1000, 'gravestone');

    gravestone.setAll('checkWorldBounds', true);

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
    // Sets the ground as immovable
    ground.body.immovable = true;

    cursors = game.input.keyboard.createCursorKeys();

    skeleton.body.gravity.y = 800;

    game.spawnGraveStoneTimer = 0;

    game.fontStyle = { font: "40px Arial", fill: "#FFCC00", stroke: "#333", strokeThickness: 5, align: "center" };

    // Audio

    // // Adds the music to the game.
    // music = game.add.audio('spooky');
    // // Sets the music to loop. ogg files are best for looping audio.
    // music.loop = true;
    // // Plays the music.
    // music.play();


}


function update() {


    // Checks for collision of the skeleton and floor.
    game.physics.arcade.collide(skeleton, ground);
    // Sets the scroll rate of the graveyard background.
    graveYard.tilePosition.x -= 2;
    // Plays the running animation.
    skeleton.animations.play('right');

     //  Allow the player to jump if they are touching the ground.
    if (cursors.up.isDown && skeleton.body.touching.down) {   
        // Setting the jump height.
        skeleton.body.velocity.y = -450;
    }

    gravesAttack();

}


// This function handles any debuggers I use, mostly to test collision.
function render() {

    game.debug.body(skeleton);
    game.debug.body(ground);
    this.game.debug.text(this.game.time.fps || '--', 20, 70, "#00ff00", "40px Courier");  


}

function gravesAttack() {

    // x = 850

    console.log("gravestones in");
    
    gravestones = gravestone.create(8000 ,game.world.height+4000, 'gravestone');
    // Gravity for candy
    gravestones.body.gravity.x = -300;
    // Next 4 lines checking for boundaries
    gravestones.body.collideWorldBounds = false;
    gravestones.anchor.setTo = (0.5, 0.5);
    gravestones.checkWorldBounds = true;
    gravestones.outOfBoundsKill = true;

}
