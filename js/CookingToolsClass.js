//cookingTools Class Constructor

function CookingToolsClass(posX,posY,name,gameState){
    //store the values and references
    this.posX = posX;
    this.posY = posY;
    this.name = name;
    this.gameState = gameState;
    //add tag for convenience
    this.tag = "CookingTools";

};