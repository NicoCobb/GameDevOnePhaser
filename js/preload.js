// preloadState constructor

let preloadState = function(){

};

preloadState.prototype.preload = function(){
    //game.load.image("name", "filepath")
    //game.load.spritesheet("name", "filepath", x, y)
    game.load.image("apple", "assets/art/apple.png");
    game.load.image("apple_chunks", "apple_chunks_small.png");
    game.load.image("apple_pie_recipe1", "assets/art/apple_pie_recipe1.png");
    game.load.image("apple_pie_recipe2", "assets/art/apple_pie_recipe2.png");
    game.load.image("apple_sauce_recipe", "assets/art/apple_sauce_recipe.png")
    game.load.image("big_side_bar", "assets/art/big_side_bar.png");
    game.load.image("boil_apple", "assets/art/boil_apple.png");
    game.load.image("business_man","assets/art/business_man.png");
    game.load.image("butter", "assets/art/butter.png");
    game.load.image("cinnamon", "assets/art/cinnamon.png");
    game.load.image("close_icon", "assets/art/close_icon.png");
    game.load.image("cutting_board", "assets/art/cutting_board.png");
    game.load.image("cutting_board_apples", "assets/art/cutting_board_with_chunks.png")
    game.load.image("dialoguebox_customer", "assets/art/dialoguebox_customer.png");
    game.load.image("dialoguebox_owner", "assets/art/dialoguebox_owner.png");
    game.load.image("dough", "assets/art/dough.png");
    game.load.image("dough_no_mix", "assets/art/dough_no_mix.png");
    game.load.image("end_credits", "assets/art/end_credits.png");
    game.load.image("end_photo", "assets/art/end_photo.png");
    game.load.image("exit_button", "assets/art/exit_button.png");
    game.load.image("flour", "assets/art/flour.png");
    game.load.image("inventory_bar", "assets/art/inventory_bar.png");
    game.load.image("inventory_icon","assets/art/inventory_icon.png");
    game.load.image("joshua", "assets/art/joshua.png");
    game.load.image("lizzy", "assets/art/lizzy.png");
    game.load.image("main_background", "assets/art/main_background.png");
    game.load.image("maria", "assets/art/maria.png");
    game.load.image("michael", "assets/art/michael.png");
    game.load.image("name_maria", "assets/art/name_maria.png");
    game.load.image("name_patrick", "assets/art/name_patrick.png");
    game.load.image("open_book", "assets/art/open_book.png");
    game.load.image("photo1", "assets/art/photo1.png");
    game.load.image("photo2", "assets/art/photo2.png");
    game.load.image("photo3", "assets/art/photo3.png");
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
    game.load.image("turn_page_icon", "assets/art/turn_page_icon.png");
    game.load.image("turn_page_back_icon", "assets/art/turn_page_icon_left.png");
    game.load.image("water", "assets/art/water.png");
    game.load.image("workplace", "assets/art/workplace.png");
    game.load.image("pot_e", "assets/art/pot_empty.png");
    game.load.image("stirring_bowl_fills_before_mixing", "assets/art/stirring_bowl_fills_before_mixing.png");
    game.load.audio("theme", "assets/music/music_apple.mp3");
    game.load.spritesheet("mix_dough_animation", "assets/art/mix_dough.png",1026, 1125);
    game.load.spritesheet("mix_apple_fills_animation", "assets/art/mix_apple_fills.png", 1026,1125);
 
};

preloadState.prototype.create = function(){
	game.state.start("Menu");
	
};

preloadState.prototype.update = function(){
	
};