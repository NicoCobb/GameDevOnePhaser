let openingState = function(){

};

openingState.prototype.create = function(){
    this.counter = 0;

    this.open_book = game.add.sprite(0, 0, "open_book");
    this.open_book.inputEnabled = true;

    this.opening_text = ["Our story starts with a farmer from Sonoma County, California named Patrick. \n" +
    "\nHis parents and their parents before them were all farmers. ",
        "They grew grapes for wine makers in the area, " +
        "but they had one personal crop that they kept as a family tradition. \n" +
        "\nThey grew gravenstein apples in a small orchard, one of the last in the U.S.",
        "Now, Patrick works to keep up the recipes of his family and keep the trees healthy, " +
        "but after bring one of his family's famous apple pies to a bake sale, " +
        "some have taken an interest in what makes his pies so good. ", "yOU ARE FUCKED UP", "YOU ARE SUPER FUCKED UP"];
    this.opening_image = ["photo1", "photo2", "photo3"];

    this.display(0);
    this.open_book.events.onInputDown.add(this.display, this);
};

openingState.prototype.display = function(){
    if(this.counter !== 0) {
        this.page_text.destroy();
        this.page_image.destroy();
    }
    let text = this.opening_text[this.counter];
    this.page_text = game.add.text(game.world.centerX+60, 125, text, {
        font: "60px Courier", fill: "#000000", fontWeight: "bold", wordWrap: true, wordWrapWidth: 800});
    this.page_text.lineSpacing = 10;

    let image = this.opening_image[this.counter];
    if(this.counter === 2) {
        this.page_image = game.add.sprite(510, 270, image);
    }
    else { this.page_image = game.add.sprite(370, 70, image); }

    this.counter++;
    if(this.counter === 3) {
        this.open_book.inputEnabled = false;
        game.add.button(game.width-540, game.height-270, "turn_page_icon", this.start_game, this);
    }
};

openingState.prototype.start_game = function(){
    game.state.start("Joshua_1");
};