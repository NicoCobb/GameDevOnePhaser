//Inventory Class constructer

function InventoryClass(posX,posY,name,gameState,isInteractable, destroyAfterUse){
    //store the values and references
    this.posX = posX;
    this.posY = posY;
    this.name = name;
    this.gameState = gameState;
    this.interactable = isInteractable;
    this.destroyAfterUse = destroyAfterUse;
    //add tag for convenience
    this.tag = "Inventory";

};

InventoryClass.prototype.appear = function(){
    this.sprite = game.add.sprite(this.posX,this.posY,this.name);
    this.sprite.inputEnabled = true;
    console.log(this.interactable);
    if(this.interactable)
        this.sprite.input.enableDrag(false, true);
    this.sprite.anchor.set(0.5);
    this.sprite.alpha = 0.6;
    let callback = function() {this.gameState.inventoryListener(this.name);};
    this.sprite.events.onInputDown.add(callback, this);
    this.sprite.events.onDragStart.add(this.dragStart, this);
    //this.sprite.events.onDragUpdate.add(dragUpdate);
    this.sprite.events.onDragStop.add(this.dragStop, this);
    
};

InventoryClass.prototype.disappear = function(){
    this.sprite.destroy();
    
};

InventoryClass.prototype.dragStart = function(){
    this.sprite.alpha = 1;
    console.log("dragging");
}

InventoryClass.prototype.dragStop = function() {
    this.sprite.alpha = 0.6;
    this.sprite.x = this.posX;
    this.sprite.y = this.posY;
}