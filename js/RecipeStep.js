//Recipe step class

function RecipeStep(cookingTool, ingredients, finishedSpriteName, generatedIngredient = "n", makesIngredient = false) {
    this.toolRequired = cookingTool;
    this.nextSprite = finishedSpriteName;
    this.makesIngredient = makesIngredient;
    this.generatedIngredient = generatedIngredient;

    //*NOTE* these are just lists of ingredient NAMES
    this.ingredientsRequired = ingredients;
    this.ingredientsIn = [];
    
};

RecipeStep.prototype.allIngredients = function() {
    this.ingredientsRequired.sort();
    this.ingredientsIn.sort();
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
};

RecipeStep.prototype.addIngredient = function(ingredientName, toolUsed) {
    var isRequired = false;
    //could maybe have used .includes, but not sure how that works for js "classes"
    for (i = 0; i < this.ingredientsRequired.length; i++) {
        if(this.ingredientsRequired[i] === ingredientName)
            isRequired = true;
    }
    if(isRequired && toolUsed.name === this.toolRequired.name)
        this.ingredientsIn.push(ingredientName);
    
    return isRequired;
};

RecipeStep.prototype.giveHeldItem = function() {
    this.toolRequired.receiveHeldItem(this.generatedIngredient);
}