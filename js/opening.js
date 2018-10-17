let openingState = function(){

};

openingState.prototype.create = function(){
    this.counter = 0;

    this.open_book = game.add.sprite(0, 0, "open_book");
    this.open_book.inputEnabled = true;

    this.opening_text = ["Our story starts with a farmer from Sonoma County, California named Patrick.\n" +
                         "\nHis parents and their parents before them were all farmers.",
                         "They grew grapes for wine makers in the area, " +
                         "but they had one personal crop that they kept as a family tradition.\n" +
                         "\nThey grew gravenstein apples in a small orchard, one of the last in the U.S.",
                         "Now, Patrick works to keep up the recipes of his family and keep the trees healthy, " +
                         "but after bring one of his family's famous apple pies to a bake sale, " +
                         "some have taken an interest in what makes his pies so good.", "yOU ARE FUCKED UP", "YOU ARE SUPER FUCKED UP"]
    this.display_text(0);
    let helper = function(){this.display_text(this.counter)};
    this.open_book.events.onInputDown.add(helper, this);
        //this.play_button = game.add.button(game.world.centerX+40, game.world.centerY-85, "play_button", this.start_game, this);
};

openingState.prototype.update = function(){

};

openingState.prototype.display_text = function(i) {
    if(i !== 0) {
        this.book_page.destroy();
    }
    let text = this.opening_text[i];
    this.book_page = game.add.text(game.world.centerX+60, 125, text, {font: "60px Courier", fill: "#000000",
        fontWeight: "bold", wordWrap: true, wordWrapWidth: 800});
    this.book_page.lineSpacing = 10;

    this.counter++;
    if(this.counter === 3) {
        this.open_book.inputEnabled = false;
    }
};

//openingState.prototype.start_game = function(){
    //game.state.start("Game");
//};