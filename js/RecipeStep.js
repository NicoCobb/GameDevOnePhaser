//Recipe step class

function RecipeStep(cookingTool, ingredients, finishedSpriteName, generatedIngredient = "n") {
    this.toolRequired = cookingTool;
    this.nextSprite = finishedSpriteName;
    this.generatedIngredient = generatedIngredient;

    //*NOTE* these are just lists of ingredient NAMES
    this.ingredientsRequired = ingredients;
    this.ingredientsIn = [];
    
};

RecipeStep.prototype.allIngredients = function() {
    this.ingredientsRequired.sort();
    this.ingredientsIn.sort();
    // console.log("checking all ingredients.");
    console.log("requires: " + this.ingredientsRequired);
    console.log("contains: " + this.ingredientsIn);
    if(this.ingredientsRequired.length === this.ingredientsIn.length) {
        for (i = 0; i < this.ingredientsIn.length; i++) {
            if (this.ingredientsIn[i] !== this.ingredientsRequired[i])
                return false;
        }
    } else return false;

    return true;
};

RecipeStep.prototype.swapSprite = function() {
    this.toolRequired.sprite.destroy();
    this.toolRequired.sprite = game.add.sprite(this.toolRequired.posX,this.toolRequired.posY,this.nextSprite);
    this.toolRequired.sprite.anchor.set(0.5);
    this.toolRequired.sprite.inputEnabled = true;
    this.toolRequired.sprite.moveDown();
    this.toolRequired.sprite.events.onInputDown.add(this.toolRequired.onInputDown, this.toolRequired);
    this.giveHeldItem();
};

RecipeStep.prototype.addIngredient = function(ingredientName, toolUsed) {
    // console.log("current step needs: " + this.ingredientsRequired);
    // console.log("trying to add: " + ingredientName);
    console.log("toolUsed name: " + toolUsed.name);
    console.log("toolRequired name: " + this.toolRequired.name);
    var isRequired = false;
    //could maybe have used .includes, but not sure how that works for js "classes"
    for (i = 0; i < this.ingredientsRequired.length; i++) {
        if(this.ingredientsRequired[i] === ingredientName && toolUsed.name === this.toolRequired.name) {
            isRequired = true;
            this.ingredientsIn.push(ingredientName);
        }
    }
    console.log("adding ingredient: " + isRequired);
    return isRequired;
};

RecipeStep.prototype.giveHeldItem = function() {
    this.toolRequired.receiveHeldItem(this.generatedIngredient);
}