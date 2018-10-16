// gameplayState constructor

let gameplayState = function(){
    let counter = 0;
    
};

//game runs here
gameplayState.prototype.create = function(){
    this.counter = 0
    
    this.background = game.add.sprite(0,0,"main_background");
    this.background.events.onInputDown.add(this.inventoryDisappear,this);
    this.workplace = game.add.sprite(0,0,"workplace");
    game.add.sprite(0,0,"sidebar");
    
    
    this.recipebookDebug = new RecipeClass(525,900,this);
    
    this.inventoryIcon = game.add.sprite(1270,50,"inventory_icon");
    this.inventoryIcon.anchor.set(0.5);
    this.inventoryIcon.inputEnabled = true;
    this.inventoryIcon.events.onInputDown.add(this.inventoryAppear, this);
    
    
    this.inventoryNameArray = ["apple", "butter", "flour", "salt", "sugar", "water"];
    //this.inventoryArray.push(new InventoryClass(500,500,"cutting_board",this));
    this.inventoryArray = this.addInventory(this.inventoryNameArray);
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
    for(i = 0; i < this.inventoryArray.length;i++){
        this.inventoryArray[i].appear();
    }
    this.inventoryIcon.inputEnabled = false;
    this.background.inputEnabled = true;
};

gameplayState.prototype.inventoryDisappear = function(){
    for(i = 0; i < this.inventoryArray.length;i++){
        this.inventoryArray[i].disappear();
    }
    this.inventoryIcon.inputEnabled = true;
    this.background.inputEnabled = false;
};

gameplayState.prototype.addInventory = function(nameArray){
    if(nameArray.length < 0){
        alert("WARNING: negative length array");
    }
    if(nameArray.length == 0){
        alert("WARNING: zero length array");
    }
    let startingPosX = 450;
    let returnArray = new Array();
    for(i = 0; i < nameArray.length; i++){
        returnArray.push(new InventoryClass((startingPosX+(200*i)),150,nameArray[i],this));
    }
    return returnArray;
};

gameplayState.prototype.inventoryListener = function(name) {
    alert("you clicked:"+ name);
};





//can add other functions too
//gameplayState will just handle the main gameplay scene