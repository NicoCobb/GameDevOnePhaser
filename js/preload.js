// preloadState constructor

let preloadState = function(){

};

preloadState.prototype.preload = function(){
    //game.load.image("name", "filepath")
    //game.load.spritesheet("name", "filepath", x, y)
    game.load.image("sidebar_test", "assets/sidebar_test.png");
    game.load.image("cutting_board", "assets/cutting_board.png");
    game.load.image("recipebook", "assets/recipebook.png");
    game.load.image("main_background", "assets/main_background.png");
    game.load.image("workplace", "assets/workplace.png");
    game.load.image("dialoguebox_customer", "assets/dialoguebox_customer.png");
    game.load.image("inventory_icon","assets/inventory_icon.png");
};

preloadState.prototype.create = function(){
	game.state.start("Game");
	
};

preloadState.prototype.update = function(){
	
};