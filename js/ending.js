let endingState = function(){

};

endingState.prototype.create = function(){
    this.counter = 0;

    this.open_book = game.add.sprite(0, 0, "open_book");
    this.open_book.inputEnabled = true;

    this.ending_text = ["After patrick had accepted the business man's offer, the apples that his family had vigilantly grown for so many years was now becoming popular again. ",
        "With his help, the apple rose back to prominence and chefs from all over the state now vied for the first pick of the season for the high quality item. ",
        "Patrick himself continued making his family's pies and took pride in the fact that he had kept not only the recipes alive, but his favorite baking ingredient as well. "];

    game.add.sprite(320, 160, "end_photo");
    this.display_text(0);
    this.open_book.events.onInputDown.add(this.display_text, this);
};

endingState.prototype.display_text = function(){
    if(this.counter !== 0) {
        this.page_text.destroy();
    }
    let text = this.ending_text[this.counter];
    this.page_text = game.add.text(game.world.centerX+60, 125, text, {
        font: "60px Courier", fill: "#000000", fontWeight: "bold", wordWrap: true, wordWrapWidth: 800});
    this.page_text.lineSpacing = 10;

    this.counter++;
    if(this.counter > 3){
        this.open_book.inputEnabled = false;
        game.add.sprite(0, 0, "end_credits");
    }
};