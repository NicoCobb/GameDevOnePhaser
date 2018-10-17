// gameplayState constructor

let gameplayState = function(){
    //5 is the index of the last member of initial inventories
    //all the inventories after this should be one-time used
    let counter = 5;
    
};

//game runs here
gameplayState.prototype.create = function(){
    this.bowlRecipeArray = [["flour", "sugar", "salt", "water"],["dough", "apple"]];
    
    this.music=game.add.audio("theme");
    this.music.play();
    this.counter = 0
    this.cookingToolsArray = new Array();
    this.background = game.add.sprite(0,0,"main_background");
    // this.background.events.onInputDown.add(this.inventoryDisappear,this,1);
    this.workplace = game.add.sprite(0,0,"workplace");
    game.add.sprite(0,0,"sidebar");
    game.add.sprite(650, 755, "stove");
    this.bowl = new CookingToolsClass(1500,800,"stirring_bowl",this);
    this.pot = new CookingToolsClass(1145,810,"pot_e",this);
    let tempArray = ["flour", "sugar", "salt", "water"];
    let tempArray2 = ["dough", "apple"];
    let stoveIngrediants = ["cutapple", "sugar", "salt", "cinnamon", "water"];
    this.bowl.addPartRecipe(tempArray, "dough_no_mix", "mix_dough_animation","dough");
    //this.bowl.addPartRecipe(tempArray);
    
    this.recipebookDebug = new RecipeClass(525,900,this);
    
    this.inventoryIcon = game.add.sprite(1270,50,"inventory_icon");
    this.inventoryIcon.anchor.set(0.5);
    this.inventoryIcon.inputEnabled = true;
    this.inventoryIcon.events.onInputDown.add(this.inventoryAppear, this);
    
    //there are two inventories now
    //the first one is uninteractable and is just used to display the sprites
    //the second one is the interactable layer that actually gets dragged
    this.inventoryNameArray = ["apple", "butter", "flour", "salt", "sugar", "water"];
    this.inventoryArray = this.addInventory(this.inventoryNameArray, false);
    this.inventoryArrayInteractable = this.addInventory(this.inventoryNameArray, true);
};

//update function
gameplayState.prototype.update = function(){
   
};


//the following functions are not automatically called
//use these functions to 
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
    this.inventoryBar = game.add.sprite(395,75,"inventory_bar");
    for(i = 0; i < this.inventoryArray.length;i++){
        this.inventoryArray[i].appear();
        this.inventoryArrayInteractable[i].appear();
    }
    this.inventoryIcon.events.onInputDown.removeAll();
    this.inventoryIcon.events.onInputDown.add(this.inventoryDisappear, this);
    // this.inventoryIcon.inputEnabled = false;
    // this.background.inputEnabled = true;
};

gameplayState.prototype.inventoryDisappear = function(){
    for(i = 0; i < this.inventoryArray.length;i++){
        this.inventoryArray[i].disappear();
        this.inventoryArrayInteractable[i].disappear();
    }
    this.inventoryBar.destroy();
    this.inventoryIcon.events.onInputDown.removeAll();
    this.inventoryIcon.events.onInputDown.add(this.inventoryAppear, this);
    // this.inventoryIcon.inputEnabled = true;
    // this.background.inputEnabled = false;
};

gameplayState.prototype.addInventory = function(nameArray,isInteractable){
    if(nameArray.length < 0){
        alert("WARNING: negative length array");
    }
    if(nameArray.length === 0){
        alert("WARNING: zero length array");
    }
    let startingPosX = 552;
    let returnArray = new Array();
    for(i = 0; i < nameArray.length; i++){
        if(i <= 5){
            returnArray.push(new InventoryClass((startingPosX+(198*i)),202,nameArray[i],this,isInteractable, false));
        }else{
            returnArray.push(new InventoryClass((startingPosX+(198*i)),202,nameArray[i],this,isInteractable, true));
        }
        
    }
    return returnArray;
};

gameplayState.prototype.inventoryListener = function(obj) {
    this.tempName = obj.name;
    this.bowl.enableInput();
};

gameplayState.prototype.cookingToolsListener = function(obj) {
    let result = obj.checkRecipe(this.tempName);
    obj.disableInput();
    
    alert(result);
};




//can add other functions too
//gameplayState will just handle the main gameplay scene