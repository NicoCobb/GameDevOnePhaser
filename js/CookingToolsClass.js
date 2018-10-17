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
    this.callback = function(){gameState.cookingToolsListener(this);}
    this.sprite.inputEnabled = true;
    // this.sprite.events.onInputUp.add(this.callback, this);

};

CookingToolsClass.prototype.addPartRecipe = function(recipeArray, finname, animeName, outputName){
    //recipeArray should be an array which contains strings of names
    alert(recipeArray.length);
    this.recipeArray = recipeArray;
    this.final_item=finname;
    this.animeName = animeName;
    this.outputName = outputName;
};


CookingToolsClass.prototype.clearRecipe = function(){
    this.recipeArray = [];
};

CookingToolsClass.prototype.checkFullInventory = function(){
    if (this.recipeArray.length === 0){
        this.sprite.destroy();
        this.sprite=game.add.sprite(this.posX,this.posY,this.name);
        this.sprite.anchor.set(0.5);
        alert("working");
        
        let temp = game.add.sprite(1500,0,this.animeName);
        let anim = temp.animations.add(this.animeName);
        anim.play(2,false,true);
        
        this.gameState.inventoryNameArray.push(this.outputName);
        //console.log(this.gameState.inventoryNameArray);
        this.gameState.inventoryDisappear();
        this.gameState.inventoryArray = this.gameState.addInventory(this.gameState.inventoryNameArray);
        this.gameState.inventoryArrayInteractable = this.gameState.addInventory(this.gameState.inventoryNameArray, true);
        
        
    }
};


CookingToolsClass.prototype.checkRecipe = function(inventoryName){
    alert("array[0] " + this.recipeArray[0] + " input: "+inventoryName);
    if (this.recipeArray.length === 0){
    	this.checkFullInventory();
        return false;
    }
    for(i = 0; i < this.recipeArray.length; i++){
        if (inventoryName === this.recipeArray[i]){
            alert("you choose:" + inventoryName +" and deleted:" + this.recipeArray[i])
            this.sprite.destroy();
            this.sprite=game.add.sprite(this.posX,this.posY,this.final_item);
            this.sprite.anchor.set(0.5);
            this.sprite.events.onInputDown.add(this.callback, this);
            this.recipeArray.splice(i,1);
            alert(this.recipeArray.length)
            this.checkFullInventory();
            return true;
        }
    }
    return false;
};

// CookingToolsClass.prototype.enableInput = function(){
//     this.sprite.inputEnabled = true;
// };

// CookingToolsClass.prototype.disableInput = function(){
//     this.sprite.inputEnabled = false;
// }