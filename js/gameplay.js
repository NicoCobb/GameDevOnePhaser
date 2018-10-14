// gameplayState constructor

let gameplayState = function(){
    let counter = 0;
    
};

gameplayState.prototype.create = function(){
    this.counter = 0
    game.add.sprite(0,0,"main_background");
    this.workplace = game.add.sprite(0,0,"workplace");
    this.recipebookDebug = new RecipeClass(75,775,this);
    //this.textTest = game.add.sprite(375,775,"recipebook");
     //  Moves the image anchor to the middle, so it centers inside the game properly
    //this.textTest.anchor.set(0.5);

    //  Enables all kind of input actions on this image (click, etc)
    //this.textTest.inputEnabled = true;

    //this.text = game.add.text(250, 16, '', { fill: '#ffffff' });

    //this.textTest.events.onInputDown.add(this.listener, this);
};

gameplayState.prototype.update = function(){
    
};

gameplayState.prototype.render = function(){
    game.debug.spriteInfo(this.recipebookDebug.spriteDebug(), 32,32);
};

gameplayState.prototype.RecipeListener = function(){
    this.counter++;
    this.recipebookDebug.text.text = "You clicked " + this.counter + " times!";
};


//can add other functions too
//gameplayState will just handle the main gameplay scene