let menuState = function(){

};

menuState.prototype.create = function(){
    game.add.sprite(0, 0, "title");
    game.add.button(game.world.centerX+40, game.world.centerY-85, "play_button", this.start_opening, this);
    game.add.button(game.world.centerX+360, game.world.centerY+210, "exit_button", this.end_game, this);
    level = 0;
};

menuState.prototype.start_opening = function(){
    game.state.start("Opening");
};

menuState.prototype.end_game = function(){
    game.destroy();
};