let menuState = function(){

};

menuState.prototype.create = function(){
    this.title = game.add.sprite(0, 0, "title");
    this.play_button = game.add.button(game.world.centerX+40, game.world.centerY-85, "play_button", this.start_game, this);
    this.exit_button = game.add.button(game.world.centerX+360, game.world.centerY+210, "exit_button", this.end_game, this);
};

menuState.prototype.update = function(){

};

menuState.prototype.start_game = function(){
    game.state.start("Game");
};

menuState.prototype.end_game = function(){
    game.destroy();
};