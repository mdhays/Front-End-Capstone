var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update, render: render });

var player;
var gravestone;

function preload() {
    
    game.load.image('graveyard', './sprites/cemetary.png');
    game.load.image('gravestone', './sprites/gravestone.png');
    game.load.spritesheet('skeleton', './sprites/skeleton.png', 80, 100, 50);

}


function create() {

    game.stage.backgroundColor = 0xffffff;

    game.add.sprite(0, game.world.height - 400, 'graveyard');
    console.log("background loads");

    gravestone = game.add.sprite(150, game.world.height - 105, 'gravestone');

    gravestone.scale.setTo(.1);

    game.add.sprite(0, game.world.height - 150, 'skeleton');
}


function update() {


}



function render() {

}