//recipe Class constructor


function RecipeClass(posX,posY,gameState){
    this.posX = posX;
    this.posY = posY;
    this.gameState = gameState;
    this.sprite = game.add.sprite(posX,posY,"recipebook");
    this.sprite.anchor.set(0.5);
    this.sprite.inputEnabled = true;
    this.sprite.events.onInputDown.add(gameState.RecipeListener, gameState);
};

RecipeClass.prototype.spriteDebug = function(){
    return this.sprite;
};

