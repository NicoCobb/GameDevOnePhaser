// gameplayState constructor

let gameplayState = function(){
    let counter = 0;
    
};

gameplayState.prototype.create = function(){
    game.add.sprite(0,0,"main_background");
    game.add.sprite(0,0,"workplace");

};

gameplayState.prototype.update = function(){
};

//can add other functions too
//gameplayState will just handle the main gameplay scene