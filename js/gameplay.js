// gameplayState constructor

var level = 0;
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
    this.stove = new CookingToolsClass(650, 760, "stove", this);
    this.recipebookDebug = new RecipeBook(525,900,this);
    this.inventoryIcon = game.add.sprite(1270,50,"inventory_icon");
    this.inventoryIcon.anchor.set(0.5);
    this.inventoryIcon.inputEnabled = true;
    this.inventoryIcon.events.onInputDown.add(this.inventoryAppear, this);

    //populated variably
    this.cookingToolsGroup = [];
    this.cookingToolsGroup.push(this.stove);
    this.inventoryNameArray = [];
    this.currentRecipe;
    this.currentRecipeStep = 0;
    this.animatedSteps = [];
    //these objects vary per level
    console.log(level);
    switch(level) {
        case 0: //pie level
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
            //*NOTE* need to add in generated ingredients
            var stepSeven = new RecipeStep(this.stove, ["pieplate_raw"], "delete");
            recipeSteps.push(stepSeven);
            var stepSix = new RecipeStep(this.piePlate, ["dough"], "pieplate_raw");
            recipeSteps.push(stepSix);
            var stepFive = new RecipeStep(this.piePlate, ["apple_fills"] ,"pieplate_fills");
            recipeSteps.push(stepFive);
            var stepFour = new RecipeStep(this.piePlate, ["dough"], "pieplate_dough");
            recipeSteps.push(stepFour);
            //possible extra step in here if there is time to add a mixing action
            //split this one into smaller steps to show all the art?
            var stepThree = new RecipeStep(this.bowl, ["sugar", "salt", "cinnamon", "water", "apple_chunks"]);
            recipeSteps.push(stepThree);
            //possible extra step in here if there is time to add a slicing action
            var stepTwo = new RecipeStep(this.cuttingBoard, ["apple"], "cutting_board_apples");
            recipeSteps.push(stepTwo);
            var stepOne = new RecipeStep(this.bowl, ["butter, flower, water"], "dough_no_mix");
            recipeSteps.push(stepOne);
            
            this.currentRecipe = new Recipe(recipeSteps);
            this.currentRecipeStep = this.currentRecipe.nextStep();
            this.animatedSteps = ["mix_dough_animation", "n", "mix_apple_fills_animation", "n", "n", "n", "n"]; //seven steps, size of seven
            // let tempArray = ["flour", "sugar", "salt", "water"];
            // let tempArray2 = ["dough", "apple"];
            // let stoveIngrediants = ["cutapple", "sugar", "salt", "cinnamon", "water"];
            // this.bowl.addPartRecipe(tempArray, "dough_no_mix", "mix_dough_animation","dough");
            break;
        case 1: //sauce level
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
    this.recipebookDebug.disableInput();
    this.tempBubble = new RecipeBubbleClass(800,250,this);
};

gameplayState.prototype.recipeBubbleDestroyer = function(){
    this.recipebookDebug.enableInput();
    this.tempBubble.destroyAll();
};

gameplayState.prototype.recipebookTurnPage = function(para){
    if (para === 0){
        this.tempBubble.replaceBubble("apple_pie_recipe2");
        this.tempBubble.resetCallback(para);
    }else{
        this.tempBubble.replaceBubble("apple_pie_recipe1");
        this.tempBubble.resetCallback(para);
    }
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

gameplayState.prototype.playAnimation = function(animeName) {
    if(animeName === "n") return; //if there is no animation
    let temp = game.add.sprite(1500,0,3);
    let anim = temp.animations.add(animeName);
    anim.play(2,false,true);
}

gameplayState.prototype.inventoryListener = function(obj) {
    console.log("inventoryListener obj name: " + obj.name);
    this.tempName = obj.name;
    // this.bowl.enableInput();
    // console.log(this.tempName);
};

gameplayState.prototype.checkRecipe = function() {
    if(this.currentRecipe.isRecipeComplete) {
        if(level === 0) {
            level++;
            game.state.start("Joshua");
        }
        else if (level === 1) {
            level++;
            game.state.start("Ending");
        } else {
            console.log("SOMETHING WENT WRONG!!");
            game.state.start("Menu");
        }
    }
}

// gameplayState.prototype.cookingToolsListener = function(obj) {
//     let result = obj.checkRecipe(this.tempName);
//     // obj.disableInput();
    
//     alert(result);
// };




//can add other functions too
//gameplayState will just handle the main gameplay scene