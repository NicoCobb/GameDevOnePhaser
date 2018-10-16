//Inventory Class constructer

function InventoryClass(posX,posY,name,gameState){
    //store the values and references
    this.posX = posX;
    this.posY = posY;
    this.name = name;
    this.gameState = gameState;
    //add tag for convenience
    this.tag = "Inventory";

};

InventoryClass.prototype.appear = function(){
    this.sprite = game.add.sprite(this.posX,this.posY,this.name);
    this.sprite.inputEnabled = true;
    this.sprite.anchor.set(0.5);
    let callback = function() {this.gameState.inventoryListener(this.name);};
    this.sprite.events.onInputDown.add(callback, this);
    
};

InventoryClass.prototype.disappear = function(){
    this.sprite.destroy();
    
};