// gameplayState constructor

var level = 1;
let gameplayState = function(){
    //5 is the index of the last member of initial inventories
    //all the inventories after this should be one-time used
    let counter = 5;
    
};

//game runs here
gameplayState.prototype.create = function(){
    this.bowlRecipeArray = [["flour", "sugar", "salt", "water"],["dough", "apple"]];
    
    //these objects are the same in all levels
    this.music=game.add.audio("theme");
    this.music.play();
    this.counter = 0;
    this.cookingToolsArray = new Array();
    this.background = game.add.sprite(0,0,"main_background");
    this.workplace = game.add.sprite(0,0,"workplace");
    game.add.sprite(0,0,"sidebar");
    game.add.sprite(650, 760, "stove");
    this.recipebookDebug = new RecipeBook(525,900,this);
    this.inventoryIcon = game.add.sprite(1270,50,"inventory_icon");
    this.inventoryIcon.anchor.set(0.5);
    this.inventoryIcon.inputEnabled = true;
    this.inventoryIcon.events.onInputDown.add(this.inventoryAppear, this);

    //populated variably
    this.cookingToolsGroup = [];
    this.inventoryNameArray = [];
    //these objects vary per level
    console.log(level);
    switch(level) {
        case 1: //pie level
            this.bowl = new CookingToolsClass(1500,800,"stirring_bowl",this);
            this.pot = new CookingToolsClass(1145,810,"pot_e",this);
            this.cuttingBoard = new CookingToolsClass(1800,800,"cutting_board",this);
            this.piePlate = new CookingToolsClass(2100, 810, "pieplate", this);
            this.cookingToolsGroup.push(this.bowl);
            this.cookingToolsGroup.push(this.pot);
            this.cookingToolsGroup.push(this.cuttingBoard);
            this.cookingToolsGroup.push(this.piePlate);
            this.inventoryNameArray = ["apple", "butter", "flour", "salt", "sugar","cinnamon", "water"];

            var recipeSteps = [];
            var stepFour = new RecipeStep(this.piePlate, ["dough"], "pieplate_dough");
            //possible extra step in here if there is time to add a mixing action
            var stepThree = new RecipeStep(this.bowl, ["sugar", "salt", "cinnamon", "water", "apple_chunks"]);
            //possible extra step in here if there is time to add a slicing action
            var stepTwo = new RecipeStep(this.cuttingBoard, ["apple"], "");
            var stepOne = new RecipeStep(this.bowl, ["butter, flower, water"], "dough_no_mix");
            

            // let tempArray = ["flour", "sugar", "salt", "water"];
            // let tempArray2 = ["dough", "apple"];
            // let stoveIngrediants = ["cutapple", "sugar", "salt", "cinnamon", "water"];
            this.bowl.addPartRecipe(tempArray, "dough_no_mix", "mix_dough_animation","dough");
            break;
        case 0: //sauce level
            break;
        default:
            console.log("BROKE!!");
    }
    
    this.inventoryArray = this.addInventory(this.inventoryNameArray, false, this.cookingToolsGroup);
    this.inventoryArrayInteractable = this.addInventory(this.inventoryNameArray, true, this.cookingToolsGroup);
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

gameplayState.prototype.addInventory = function(nameArray,isInteractable = false){
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
            returnArray.push(new InventoryClass((startingPosX+(198*i)),202,nameArray[i],this,isInteractable, false, this.cookingToolsGroup));
        }else{
            returnArray.push(new InventoryClass((startingPosX+(198*i)),202,nameArray[i],this,isInteractable, true, this.cookingToolsGroup));
        }
        
    }
    return returnArray;
};

gameplayState.prototype.inventoryListener = function(obj) {
    console.log("inventoryListener obj name: " + obj.name);
    this.tempName = obj.name;
    // this.bowl.enableInput();
    // console.log(this.tempName);
};

gameplayState.prototype.cookingToolsListener = function(obj) {
    console.log("input up registered");
    let result = obj.checkRecipe(this.tempName);
    // obj.disableInput();
    
    alert(result);
};




//can add other functions too
//gameplayState will just handle the main gameplay scene