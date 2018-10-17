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
}

InventoryClass.prototype.dragStop = function(sprite, pointer, dragX, dragY, snapPoint) {
    this.sprite.alpha = 0.5;
    isAdded = false;
    // console.log("toolsGroup size: " + this.toolsGroup.length);
    // console.log("current recipe targets: " + this.gameState.currentRecipeStep.ingredientsRequired);
    //check to see if we are above one of the cooking items
    for(j = 0; j < this.toolsGroup.length; j++) {
        if(this.toolsGroup[j].sprite.getBounds().contains(pointer.x, pointer.y))
            isAdded = this.gameState.currentRecipeStep.addIngredient(this.name, this.toolsGroup[j]);
            //this.toolsGroup[i].checkRecipe(this.name);
    }

    this.ifAdded(isAdded);

    this.sprite.x = this.posX;
    this.sprite.y = this.posY;
    if (this.destroyAfterUse)
        this.disappear();
}

InventoryClass.prototype.ifAdded = function(isAdded) {
    if(isAdded) {
        if(this.gameState.currentRecipeStep.allIngredients()) { //if this is true, the step is complete
            console.log("Recipe step complete!");
            this.gameState.playAnimation();
            this.gameState.currentRecipeStep.swapSprite();
            this.gameState.checkRecipe();
            this.gameState.currentRecipeStep = this.gameState.currentRecipe.nextStep();
            //recipeStep handles giving the cookingTool a held item
        } else {
            console.log("ingredient added!");
        }
    }
}