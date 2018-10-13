// gameplayState constructor

let gameplayState = function(){
    let counter = 0;
    
};

gameplayState.prototype.create = function(){
    //game.add.sprite(0,0,"main_background");
    //this.workplace = game.add.sprite(0,0,"workplace");
    this.recipebookDebug = new ClassTest("recipebook", "recipebook", 250, 250,this.game);

};

gameplayState.prototype.update = function(){
    
};

gameplayState.prototype.render = function(){
    game.debug.spriteInfo(this.recipebookDebug.spriteDebug(), 32,32);
};



//can add other functions too
//gameplayState will just handle the main gameplay scene