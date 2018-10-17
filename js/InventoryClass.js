//Inventory Class constructer

function InventoryClass(posX,posY,name,gameState,isInteractable,destroyAfterUse,cookingToolsGroup){
    //store the values and references
    //destroyAfterUse is an boolean
    this.posX = posX;
    this.posY = posY;
    this.name = name;
    this.gameState = gameState;
    this.interactable = isInteractable;
    this.destroyAfterUse = destroyAfterUse;
    this.toolsGroup = cookingToolsGroup;
    //add tag for convenience
    this.tag = "Inventory";

};

InventoryClass.prototype.appear = function(){
    this.sprite = game.add.sprite(this.posX,this.posY,this.name);
    this.sprite.inputEnabled = true;
    if(this.interactable)
        this.sprite.input.enableDrag(false, true);
    this.sprite.anchor.set(0.5);
    this.sprite.alpha = 0.5;
    let callback = function() {this.gameState.inventoryListener(this);};
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
    console.log("obj name:" + this.name);
    console.log(this.gameState.tempName);
}

InventoryClass.prototype.dragStop = function(sprite, pointer, dragX, dragY, snapPoint) {
    this.sprite.alpha = 0.5;
    //check to see if we are above one of the cooking items
    for(i = 0; i < this.toolsGroup.length; i++) {
        if(this.toolsGroup[i].sprite.getBounds().contains(pointer.x, pointer.y))
            this.toolsGroup[i].checkRecipe(this.name);
        
    }
    this.sprite.x = this.posX;
    this.sprite.y = this.posY;
}