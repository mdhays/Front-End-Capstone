var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update, render: render });

var player;
var gravestone;
var graveYard;
var skeleton;
var cursors;
var ground;
var spawnGraveStoneTimer;
var scoreText;
var score = 0;
var nextGraveStoneSpawn = 0;
var flyRate = 750;

function preload() {
    
    game.load.image('graveyard', './sprites/cemetary.png');
    game.load.image('gravestone', './sprites/gravestone.png');
    game.load.image('ground', './sprites/blacksquare.jpg')
    game.load.spritesheet('skeleton', './sprites/skeleton.png', 73, 89, 21);

}


function create() {

        // Assigning Fps
    game.time.desiredFps = 60;

    // Here we set the color of the background. I made it white since the image is black.
    game.stage.backgroundColor = 0xffffff;  

    graveYard = game.add.tileSprite(0, game.world.height - 400, 1024, 366, 'graveyard');
    console.log("background loads");

    gravestone = game.add.sprite(150, game.world.height - 155, 'gravestone');

    gravestone.scale.setTo(.1);

    gravestone = game.add.group();

    skeleton = game.add.sprite(30, game.world.height - 190, 'skeleton');

    ground = game.add.sprite(30, game.world.height - 100, 'ground');

    ground.scale.setTo(.1);

    skeleton.animations.add('right', [1 ,2, 4, 5], 10, true);

    // enable physics on the player
    game.physics.enable(skeleton, Phaser.Physics.ARCADE);

    // enable physics on the black square serving as the ground.
    game.physics.enable(ground, Phaser.Physics.ARCADE);

    ground.body.immovable = true;

    cursors = game.input.keyboard.createCursorKeys();

    skeleton.body.gravity.y = 400;

    game.spawnGraveStoneTimer = 0;

    game.fontStyle = { font: "40px Arial", fill: "#FFCC00", stroke: "#333", strokeThickness: 5, align: "center" };



}


function update() {


    // Checks for collision of the skeleton and floor.
    game.physics.arcade.collide(skeleton, ground);

    graveYard.tilePosition.x -= 2;

    skeleton.animations.play('right');

     //  Allow the player to jump if they are touching the ground.
    if (cursors.up.isDown && skeleton.body.touching.down)
    {   
        // Setting the jump height.
        skeleton.body.velocity.y = -300;
    }


}


// This function handles any debuggers I use, mostly to test collision.
function render() {

    game.debug.body(skeleton);
    game.debug.body(ground);

}