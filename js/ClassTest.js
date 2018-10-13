//ClassTest Class

function ClassTest(name,spriteName,posX,posY,game){
    this.name = name;
    this.spritetName = spriteName;
    this.posX = posX;
    this.posY = posY;
    this.game = game;
    this.sprite = game.add.sprite(0,0,this.spritetName);
};

ClassTest.prototype.printName = function(){
    text = game.add.text(250,16,name,{fill: "#ffffff"});
};


ClassTest.prototype.spriteDebug = function()
{
    return this.sprite;
};


