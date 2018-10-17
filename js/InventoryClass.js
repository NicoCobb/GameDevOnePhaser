//Inventory Class constructer

function InventoryClass(posX,posY,name,gameState,destroyAfterUse){
    //store the values and references
    //destroyAfterUse is an boolean
    this.posX = posX;
    this.posY = posY;
    this.name = name;
    this.gameState = gameState;
    this.destroyAfterUse = destroyAfterUse;
    //add tag for convenience
    this.tag = "Inventory";

};

InventoryClass.prototype.appear = function(){
    this.sprite = game.add.sprite(this.posX,this.posY,this.name);
    this.sprite.inputEnabled = true;
    this.sprite.anchor.set(0.5);
    let callback = function() {this.gameState.inventoryListener(this);};
    this.sprite.events.onInputDown.add(callback, this);
    
};

InventoryClass.prototype.disappear = function(){
    this.sprite.destroy();
    
};