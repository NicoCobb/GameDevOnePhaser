let joshuaState_2 = function(){

};

joshuaState_2.prototype.create = function(){
    this.i = 0;
    this.j = 0;

    game.add.sprite(0, 0, "main_background");
    this.workplace = game.add.sprite(0, 0, "workplace");
    this.workplace.inputEnabled = true;
    game.add.sprite(0, 0, "sidebar");
    game.add.sprite(650, 760, "stove");
    game.add.sprite(300, game.world.centerY+160, "recipebook");
    this.customer = game.add.sprite(game.world.centerX-72, game.world.centerY+48, "joshua");
    this.customer.anchor.set(0, 1);
    this.customer.inputEnabled = true;

    this.dialogue_text = [["Here you go. "],
        ["Have you ever considered opening up a bakery? "],
        ["No, have you? "],
        ["Okay when I ask it, it actually makes sense since you can bake. I can't. "],
        ["Sure you can. Maybe not well, but you CAN. "],
        ["I can already see it.",
        "Me behind the counter, an apron will a big ole' heart on it, singing songs ever day. "],
        ["Baking may not be manly in your eyes, but you're still asking me to make you a pie. ",
        "I think you're just jealous. "],
        ["Nah, I'm just pulling your leg. For pete's sake my hobby is knitting. Who am I to judge. "]];

    this.helper_1 = function(){
        this.display_customer_dialogue(this.i)
    };
    this.helper_2 = function(){
        this.display_owner_dialogue(this.i)
    };
    this.workplace.events.onInputDown.add(this.helper_2, this);
    this.customer.events.onInputDown.add(this.helper_2, this);
};

joshuaState_2.prototype.display_customer_dialogue = function(i){
    if(this.i === this.dialogue_text.length){
        game.state.start("Maria_1");
    }
    if(this.j !== 0){
        this.dialoguebox_customer.destroy();
        this.customer_name.destroy();
        this.customer_text.destroy();
    }
    this.dialoguebox_customer = game.add.sprite(400, 118, "dialoguebox_customer");
    this.customer_name = game.add.sprite(380, 100, "name_joshua");

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

joshuaState_2.prototype.display_owner_dialogue  = function(i){
    if(this.i === this.dialogue_text.length){
        game.state.start("Maria_2");
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