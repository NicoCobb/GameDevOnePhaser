let menuState = function(){

};

menuState.prototype.create = function(){
    this.title = game.add.sprite(0, 0, "title");
    this.play_button = game.add.button(game.world.centerX+15, game.world.centerY-105, "play_button", this.start_game, this);
    this.exit_button = game.add.button(game.world.centerX+335, game.world.centerY+180, "exit_button", this.end_game, this);
};

menuState.prototype.update = function(){

};

menuState.prototype.start_game = function(){
    game.state.start("Game");
};

menuState.prototype.end_game = function(){
    game.destroy();
};