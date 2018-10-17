let joshuaState_1 = function(){

};

joshuaState_1.prototype.create = function(){
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

    this.dialogue_text = [["Well look who it is walking up to my window. "],
        ["You know me, any chance I can get to bug you makes my day 10 billion times better. ",
        "And before you say it, yes, ",
        "I consider billion a valid unit of measurement in the good ole' U S of A. "],
        ["I wasn't gonna say nothing my old friend. Though it does sound a little silly. ",
        "I wanna know, what lies within the old think tank today Joshua."],
        ["Well you see, ever since you invited me over last year, ",
        "I've been reminding myself about a certain something. ",
        "Your legendary apple pie. You know, the one with the German apples. ",
        "The, oh what do you call them? Gravystain? I know that's not right. "],
        ["Gravenstein, and it's actually a Dutch name. "],
        ["Is that right? Huh, who would've thought? In any case, I was wondering if you'd make me one. ",
        "Me and the family are going for a picnic soon and I'd love to surprise them. ",
        "Don't worry, I'm willing to pay. "],
        ["I guess? I'd never really thought about selling them before. ",
        "However, I'm more than willing to sell one or two to a friend. ",
        "In fact, I was planning on making one today anyway since the apples are finally ripe. "]];

    this.helper_1 = function(){
        this.display_customer_dialogue(this.i)
    };
    this.helper_2 = function(){
        this.display_owner_dialogue(this.i)
    };
    this.workplace.events.onInputDown.add(this.helper_2, this);
    this.customer.events.onInputDown.add(this.helper_2, this);
};

joshuaState_1.prototype.display_customer_dialogue = function(i){
    if(this.i === this.dialogue_text.length){
        game.state.start("Joshua_2");
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

joshuaState_1.prototype.display_owner_dialogue  = function(i){
    if(this.i === this.dialogue_text.length){
        game.state.start("Joshua_2");
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