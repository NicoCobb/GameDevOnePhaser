//cookingTools Class Constructor

function CookingToolsClass(posX,posY,name,gameState){
    //store the values and references
    this.posX = posX;
    this.posY = posY;
    this.name = name;
    //name of the final item, once the animation is complete
    this.final_item;
    this.gameState = gameState;

    this.recipeArray = new Array();
    this.sprite = game.add.sprite(this.posX,this.posY,this.name);
    this.sprite.anchor.set(0.5);
    let callback = function(){gameState.cookingToolsListener(this);}
    this.sprite.events.onInputDown.add(callback, this);

};

CookingToolsClass.prototype.addPartRecipe = function(recipeArray, finname){
    //recipeArray should be an array which contains strings of names
    this.recipeArray = recipeArray;
    this.final_item=finname;
};


CookingToolsClass.prototype.clearRecipe = function(){
    this.recipeArray = [];
};

CookingToolsClass.prototype.checkFullInventory = function(){
    if (this.recipeArray.length === 0){
        this.sprite.destroy();
        this.sprite=game.add.sprite(this.posX,this.posY,this.final_item);
        this.sprite.anchor.set(0.5);
    }
};


CookingToolsClass.prototype.checkRecipe = function(inventoryName){
    alert("working")
    if (this.recipeArray.length === 0){
    	this.checkFullInventory();
        return false;
    }
    for(i = 0; i < this.recipeArray.length; i++){
        if (inventoryName === this.recipeArray[i]){
            alert("you choose:" + inventoryName +" and deleted:" + this.recipeArray[i])
            this.recipeArray.splice(i,1);
            alert(this.recipeArray.length)
            this.checkFullInventory();
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