//TextBubble Class constructer

function RecipeBubbleClass(posX,posY,gameState){
    this.posX = posX;
    this.posY = posY;
    this.gameState = gameState;
    
    this.bubble = game.add.sprite(posX,posY,"apple_pie_recipe1");
    this.exit = game.add.sprite(posX+1100,posY+45,"close_icon");
    this.next = game.add.sprite(posX+1050,posY+625,"turn_page_icon");
    
    
    this.exit.anchor.set(0.5);
    this.exit.inputEnabled = true;
    this.exit.events.onInputDown.add(gameState.recipeBubbleDestroyer, this.gameState);

    this.next.anchor.set(0.5);
    this.next.inputEnabled = true;
    this.nextPage = function(){gameState.recipebookTurnPage(0)};
    this.previousPage = function(){gameState.recipebookTurnPage(1)};
    this.next.events.onInputDown.add(this.nextPage, this);
};

RecipeBubbleClass.prototype.destroyAll = function(){
    this.exit.destroy();
    this.bubble.destroy();
    this.next.destroy();
};

RecipeBubbleClass.prototype.replaceBubble = function(name){
    this.bubble.destroy();
    this.bubble = game.add.sprite(this.posX,this.posY,name);
}

RecipeBubbleClass.prototype.resetCallback = function(para){
    if (para === 0){
        this.next.destroy();
        this.next = game.add.sprite(this.posX+50, this.posY+625, "turn_page_back_icon");
        this.next.anchor.set(0.5);
        this.next.inputEnabled = true;
        this.next.events.onInputDown.add(this.previousPage,this);
    }else{
        this.next.destroy();
        this.next = game.add.sprite(this.posX+1050, this.posY+625, "turn_page_icon");
        this.next.anchor.set(0.5);
        this.next.inputEnabled = true;
        this.next.events.onInputDown.add(this.nextPage,this);
    }
}