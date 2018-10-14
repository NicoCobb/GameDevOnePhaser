// preloadState constructor

let preloadState = function(){

};

preloadState.prototype.preload = function(){
    //game.load.image("name", "filepath")
    //game.load.spritesheet("name", "filepath", x, y)
    game.load.image("cutting_board", "assets/art/cutting_board.png");
    game.load.image("recipebook", "assets/art/recipebook.png");
    game.load.image("main_background", "assets/art/main_background.png");
    game.load.image("workplace", "assets/art/workplace.png");
    game.load.image("dialoguebox_customer", "assets/art/dialoguebox_customer.png");
    game.load.image("inventory_icon","assets/art/inventory_icon.png");
    game.load.image("stirring_bowl", "assets/art/stirring_bowl.png");
    game.load.image("stove","assets/art/stove.png");
    game.load.image("sidebar","assets/art/sidebar.png");
};

preloadState.prototype.create = function(){
	game.state.start("Game");
	
};

preloadState.prototype.update = function(){
	
};