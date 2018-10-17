//Recipe class constructor

function Recipe(recipe) {
    this.recipeStack = recipe;
};

Recipe.prototype.nextStep = function() {
    if(this.recipeStack.length === 0)
        console.log("RECIPE ALREADY FINISHED");
    return this.recipeStack.pop();
};

Recipe.prototype.isRecipeComplete = function() {
    return (this.recipeStack.length === 0);
};