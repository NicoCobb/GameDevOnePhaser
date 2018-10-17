let mariaState_2 = function(){

};

mariaState_2.prototype.create = function(){
    this.i = 0;
    this.j = 0;

    game.add.sprite(0, 0, "main_background");
    this.workplace = game.add.sprite(0, 0, "workplace");
    this.workplace.inputEnabled = true;
    game.add.sprite(0, 0, "sidebar");
    game.add.sprite(650, 760, "stove");
    game.add.sprite(300, game.world.centerY+160, "recipebook");
    this.customer = game.add.sprite(game.world.centerX-72, game.world.centerY+48, "maria");
    this.customer.anchor.set(0, 1);
    this.customer.inputEnabled = true;

    this.dialogue_text = [["Thank you, my dear. ",
        "You know, I watched your father go through the exact same motions for so many years.",
        "I must say, you are the spitting image of him. "],
        ["Thank you. I've stayed true to his recipe as best as I can. ",
        "He would be so happy if he could see me now. ",
        "He used to go on and on about keeping this recipe alive. "],
        ["For heaven's sake child! It's not JUST his recipe. It's also yours now. ",
        "Sure he would be happy if you kept the recipe around, ",
        "but he would be so proud if you took that recipe and made it your own. "],
        ["I never thought about it like that before. ",
        "Then again, I'd never thought of myself as a baker before either, but I guess I'm one now. "]];

    this.helper_1 = function(){
        this.display_customer_dialogue(this.i)
    };
    this.helper_2 = function(){
        this.display_owner_dialogue(this.i)
    };
    this.workplace.events.onInputDown.add(this.helper_1, this);
    this.customer.events.onInputDown.add(this.helper_1, this);
};

mariaState_2.prototype.display_customer_dialogue = function(i){
    if(this.i === this.dialogue_text.length){
        game.state.start("B_man");
    }
    if(this.j !== 0){
        this.dialoguebox_customer.destroy();
        this.customer_name.destroy();
        this.customer_text.destroy();
    }
    this.dialoguebox_customer = game.add.sprite(400, 118, "dialoguebox_customer");
    this.customer_name = game.add.sprite(380, 100, "name_maria");

    let text = this.dialogue_text[this.i][this.j];
    this.customer_text = game.add.text(500, 200, text, {
        font: "42px Courier", fill: "#000000", fontWeight: "bold", wordWrap: true, wordWrapWidth: 500});
    this.customer_text.lineSpacing = 10;
    this.j++;
    if (this.j > this.dialogue_text[i].length){
        this.dialoguebox_customer.destroy();
        this.customer_name.destroy();
        this.customer_text.destroy();
        this.workplace.events.onInputDown.removeAll();
        this.customer.events.onInputDown.removeAll();
        this.i++;
        this.j = 0;
        this.workplace.events.onInputDown.add(this.helper_2, this);
        this.customer.events.onInputDown.add(this.helper_2, this);
    }
};

mariaState_2.prototype.display_owner_dialogue  = function(i){
    if(this.i === this.dialogue_text.length){
        game.state.start("B_man");
    }
    if(this.j !== 0) {
        this.dialoguebox_owner.destroy();
        this.customer_name.destroy();
        this.owner_text.destroy();
    }
    this.dialoguebox_owner = game.add.sprite(game.world.centerX+480, 110, "dialoguebox_owner");
    this.customer_name = game.add.sprite(game.world.centerX+460, 100, "name_patrick");

    let text = this.dialogue_text[i][this.j];
    this.owner_text = game.add.text(game.world.centerX+580, 200, text, {
        font: "42px Courier", fill: "#000000", fontWeight: "bold", wordWrap: true, wordWrapWidth: 500});
    this.owner_text.lineSpacing = 10;
    this.j++;
    if(this.j > this.dialogue_text[i].length) {
        this.dialoguebox_owner.destroy();
        this.customer_name.destroy();
        this.owner_text.destroy();
        this.workplace.events.onInputDown.removeAll();
        this.customer.events.onInputDown.removeAll();
        this.i++;
        this.j = 0;
        this.workplace.events.onInputDown.add(this.helper_1, this);
        this.customer.events.onInputDown.add(this.helper_1, this);
    }
};