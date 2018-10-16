// preloadState constructor

let preloadState = function(){

};

preloadState.prototype.preload = function(){
    //game.load.image("name", "filepath")
    //game.load.spritesheet("name", "filepath", x, y)
    game.load.image("apple", "assets/apple.png");
    game.load.image("big_side_bar", "assets/big_side_bar.png");
    game.load.image("business_man","assets/business_man.png");
    game.load.image("butter", "assets/butter.png");
    game.load.image("close_icon", "assets/close_icon.png");
    game.load.image("cutting_board", "assets/cutting_board.png");
    game.load.image("dialoguebox_customer", "assets/dialoguebox_customer.png");
    game.load.image("dialoguebox_owner", "assets/dialoguebox_owner.png");
    game.load.image("dough", "assets/dough.png");
    game.load.image("flour", "assets/flour.png");
    game.load.image("inventory_bar", "assets/inventory_bar.png");
    game.load.image("inventory_icon","assets/inventory_icon.png");
    game.load.image("joshua", "assets/joshua.png");
    game.load.image("lizzy", "assets/lizzy.png");
    game.load.image("main_background", "assets/main_background.png");
    game.load.image("maria", "assets/maria.png");
    game.load.image("michael", "assets/michael.png");
    game.load.image("pieplate", "assets/pieplate.png");
    game.load.image("pieplate_dough","assets/pieplate_dough.png");
    game.load.image("pieplate_fills", "assets/pieplate_fills.png");
    game.load.image("pieplate_finished", "assets/pieplate_finished.png");
    game.load.image("pieplate_raw", "assets/pieplate_raw.png");
    game.load.image("recipe_ui", "assets/recipe_ui.png");
    game.load.image("recipebook", "assets/recipebook.png");
    game.load.image("salt", "assets/salt.png");
    game.load.image("sidebar","assets/sidebar.png");
    game.load.image("stirring_bowl", "assets/stirring_bowl.png");
    game.load.image("stove", "assets/stove.png");
    game.load.image("sugar", "assets/sugar.png");
    game.load.image("water", "assets/water.png");
    game.load.image("workplace", "assets/workplace.png");
     
 
};

preloadState.prototype.create = function(){
	game.state.start("Game");
	
};

preloadState.prototype.update = function(){
	
};