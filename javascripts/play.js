var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update, render: render });

var player;
var gravestone;
var graveYard;
var skeleton;

function preload() {
    
    game.load.image('graveyard', './sprites/cemetary.png');
    game.load.image('gravestone', './sprites/gravestone.png');
    game.load.spritesheet('skeleton', './sprites/skeleton.png', 74, 95, 50);

}


function create() {

        // Assigning Fps
    game.time.desiredFps = 60;

    // Here we set the color of the background. I made it white since the image is black.
    game.stage.backgroundColor = 0xffffff;

    graveYard = game.add.tileSprite(0, game.world.height - 400, 1024, 366, 'graveyard');
    console.log("background loads");

    gravestone = game.add.sprite(150, game.world.height - 105, 'gravestone');

    gravestone.scale.setTo(.1);

    skeleton = game.add.sprite(30, game.world.height - 150, 'skeleton');

    skeleton.animations.add('right', [3, 4, 5, 6, 7], true);

    //  We need to enable physics on the player
    game.physics.enable(skeleton, Phaser.Physics.ARCADE);


}


function update() {

    graveYard.tilePosition.x -= 2;

    skeleton.animations.play('right');

}



function render() {

    game.debug.body(skeleton);

}