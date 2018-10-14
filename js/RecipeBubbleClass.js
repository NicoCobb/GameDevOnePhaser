//TextBubble Class constructer

function RecipeBubbleClass(posX,posY,txt,gameState){
    this.posX = posX;
    this.posY = posY;
    this.gameState = gameState;
    
    this.bubble = game.add.sprite(posX,posY,"dialoguebox_customer");
    this.exit = game.add.sprite(posX+500,posY-100,"inventory_icon");
    this.text = game.add.text(posX,posY,txt,{fill: "#ffffff"});
    
    this.exit.anchor.set(0.5);
    this.exit.inputEnabled = true;
    this.exit.events.onInputDown.add(gameState.RecipeBubbleDestroyer, gameState);
};

RecipeBubbleClass.prototype.destroyAll = function(){
    this.text.destroy();
    this.exit.destroy();
    this.bubble.destroy();
};