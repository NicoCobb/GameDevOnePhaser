//recipe Class constructor


function RecipeBook(posX,posY,gameState){
    this.posX = posX;
    this.posY = posY;
    this.gameState = gameState;
    this.sprite = game.add.sprite(posX,posY,"recipebook");
    this.sprite.anchor.set(0.5);
    this.sprite.inputEnabled = true;
    this.sprite.events.onInputDown.add(gameState.recipeListener, gameState);
};

RecipeBook.prototype.spriteDebug = function(){
    return this.sprite;
};

RecipeBook.prototype.disableInput = function(){
    this.sprite.events.onInputDown.removeAll();
};

RecipeBook.prototype.enableInput = function(){
    this.sprite.events.onInputDown.add(this.gameState.recipeListener, this.gameState)
}

