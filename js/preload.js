// preloadState constructor

let preloadState = function(){

};

preloadState.prototype.preload = function(){
    //game.load.image("name", "filepath")
    //game.load.spritesheet("name", "filepath", x, y)
    game.load.image("apple", "assets/art/apple.png");
    game.load.image("big_side_bar", "assets/art/big_side_bar.png");
    game.load.image("business_man","assets/art/business_man.png");
    game.load.image("butter", "assets/art/butter.png");
    game.load.image("close_icon", "assets/art/close_icon.png");
    game.load.image("cutting_board", "assets/art/cutting_board.png");
    game.load.image("dialoguebox_customer", "assets/art/dialoguebox_customer.png");
    game.load.image("dialoguebox_owner", "assets/art/dialoguebox_owner.png");
    game.load.image("dough", "assets/art/dough.png");
    game.load.image("exit_button", "assets/art/exit_button.png");
    game.load.image("flour", "assets/art/flour.png");
    game.load.image("inventory_bar", "assets/art/inventory_bar.png");
    game.load.image("inventory_icon","assets/art/inventory_icon.png");
    game.load.image("joshua", "assets/art/joshua.png");
    game.load.image("lizzy", "assets/art/lizzy.png");
    game.load.image("main_background", "assets/art/main_background.png");
    game.load.image("maria", "assets/art/maria.png");
    game.load.image("michael", "assets/art/michael.png");
    game.load.image("pieplate", "assets/art/pieplate.png");
    game.load.image("pieplate_dough","assets/art/pieplate_dough.png");
    game.load.image("pieplate_fills", "assets/art/pieplate_fills.png");
    game.load.image("pieplate_finished", "assets/art/pieplate_finished.png");
    game.load.image("pieplate_raw", "assets/art/pieplate_raw.png");
    game.load.image("play_button", "assets/art/play_button.png");
    game.load.image("recipe_ui", "assets/art/recipe_ui.png");
    game.load.image("recipebook", "assets/art/recipebook.png");
    game.load.image("salt", "assets/art/salt.png");
    game.load.image("sidebar","assets/art/sidebar.png");
    game.load.image("stirring_bowl", "assets/art/stirring_bowl.png");
    game.load.image("stove", "assets/art/stove.png");
    game.load.image("sugar", "assets/art/sugar.png");
    game.load.image("title", "assets/art/title.png");
    game.load.image("water", "assets/art/water.png");
    game.load.image("workplace", "assets/art/workplace.png");
     
 
};

preloadState.prototype.create = function(){
	game.state.start("Menu");
	
};

preloadState.prototype.update = function(){
	
};