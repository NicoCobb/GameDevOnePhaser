//cookingTools Class Constructor

function CookingToolsClass(posX,posY,name,gameState){
    //store the values and references
    this.posX = posX;
    this.posY = posY;
    this.name = name;
    this.gameState = gameState;

    this.recipeArray = new Array();
    this.sprite = game.add.sprite(this.posX,this.posY,this.name);
    this.sprite.anchor.set(0.5);
    let callback = function(){gameState.cookingToolsListener(this);}
    this.sprite.events.onInputDown.add(callback, this);

};

CookingToolsClass.prototype.addPartRecipe = function(recipeArray){
    //recipeArray should be an array which contains strings of names
    this.recipeArray = recipeArray;
};


CookingToolsClass.prototype.clearRecipe = function(){
    this.recipeArray = [];
};

CookingToolsClass.prototype.checkFullInventory = function(){
    if (this.recipeArray.length === 0){
        
    }
};


CookingToolsClass.prototype.checkRecipe = function(inventoryName){
    alert("working")
    if (this.recipeArray.length === 0){
        return false;
    }
    for(i = 0; i < this.recipeArray.length; i++){
        if (inventoryName === this.recipeArray[i]){
            alert("you choose:" + inventoryName +" and deleted:" + this.recipeArray[i])
            this.recipeArray.splice(i,1);
            return true;
        }
    }
    return false;
};

CookingToolsClass.prototype.enableInput = function(){
    this.sprite.inputEnabled = true;
};

CookingToolsClass.prototype.disableInput = function(){
    this.sprite.inputEnabled = false;
}