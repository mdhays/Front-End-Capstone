var game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO, '', { preload: preload, create: create, update: update, render: render });


function preload() {
    
    game.load.image('graveyard', './sprites/cemetary.png');
    game.load.image('gravestone', './sprites/gravestone.png');
    game.load.spritesheet('skeleton', './sprites/skeleton.png');

}


function create() {

    game.add.sprite(0, 0, 'graveyard');
    console.log("background loads");

    // game.add.sprite(0, 0, 'gravestone');

    game.add.sprite(0, game.world.height - 700, 'skeleton');
}


function update() {

}



function render() {

}