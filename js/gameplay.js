// gameplayState constructor

let gameplayState = function(){
    let counter = 0;
    
};

gameplayState.prototype.create = function(){
    this.counter = 0
    
    this.background = game.add.sprite(0,0,"main_background");
    this.background.inputEnabled = true;
    this.background.events.onInputDown.add(this.inventoryDisappear,this);
    
    game.add.sprite(0,0,"sidebar");
    this.workplace = game.add.sprite(0,0,"workplace");
    this.recipebookDebug = new RecipeClass(75,775,this);
    
    this.inventoryIcon = game.add.sprite(250,250,"inventory_icon");
    this.inventoryIcon.anchor.set(0.5)
    this.inventoryIcon.inputEnabled = true;
    this.inventoryIcon.events.onInputDown.add(this.inventoryAppear, this);
    

    this.inventoryArray = new Array();
    this.inventoryArray.push(new InventoryClass(500,500,"cutting_board",this));
};

gameplayState.prototype.update = function(){
    
};

gameplayState.prototype.render = function(){
    game.debug.spriteInfo(this.recipebookDebug.spriteDebug(), 32,32);
};

gameplayState.prototype.recipeListener = function(){
    let txt = "testing text.";
    this.tempBubble = new RecipeBubbleClass(1000,350,txt,this);
};

gameplayState.prototype.recipeBubbleDestroyer = function(){
    this.tempBubble.destroyAll();
};

gameplayState.prototype.inventoryAppear = function(){
    for(i = 0; i < this.inventoryArray.length;i++){
        this.inventoryArray[i].appear();
    }
    
};

gameplayState.prototype.inventoryDisappear = function(){
    for(i = 0; i < this.inventoryArray.length;i++){
        this.inventoryArray[i].disappear();
    }

};




//can add other functions too
//gameplayState will just handle the main gameplay scene