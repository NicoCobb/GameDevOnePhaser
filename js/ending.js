let endingState = function(){

};

endingState.prototype.create = function(){
    this.open_book = game.add.sprite(0, 0, "open_book");
    this.open_book.inputEnabled = true;

    let text = ["Thank you~"];
    this.ending_text = game.add.text(game.world.centerX+60, 125, text, {
        font: "60px Courier", fill: "#000000", fontWeight: "bold", wordWrap: true, wordWrapWidth: 800});
    this.ending_text.lineSpacing = 10;
    game.add.sprite(320, 200, "end_photo");

    this.open_book.events.onInputDown.add(this.display_credits, this);
};
endingState.prototype.display_credits = function(){
    game.add.sprite(0, 0, "end_credits");
}

endingState.prototype.end_game = function(){
    game.state.start("Maria");
};