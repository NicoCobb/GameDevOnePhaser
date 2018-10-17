let mariaState = function(){

};

mariaState.prototype.create = function(){
    this.i = 0;
    this.j = 0;

    game.add.sprite(0, 0, "main_background");
    this.workplace = game.add.sprite(0, 0, "workplace");
    this.workplace.inputEnabled = true;
    game.add.sprite(0, 0, "sidebar");
    game.add.sprite(650, 760, "stove");
    this.maria = game.add.sprite(game.world.centerX-50, game.world.centerY+50, "maria");
    this.maria.anchor.set(0, 1);
    this.maria.inputEnabled = true;

    this.dialogue_text = [["Hello again. If I could, I have a favor to ask you. "],
        ["Hello Maria. It's been a while. By all means, ask away. "],
        ["Well, I've heard from around that you've decided ", "to start making your father's signature pies again. "],
        ["I've been making them for about two years now. ",
        "Joshua asked me to make one for him the other day.",
        "Beyond that, I've mostly been making them for myself. "],
        ["I was actually wondering myself if I could have one. ",
        "Your father's pies were wonderful. ",
        "I've missed them so, but not as much as I miss the man. "],
        ["You were a good friend with both of my parents. ",
        "Honestly, I'd be honored to make you one of the pies. ",
        "I need to know if they're just as good as my father's. "]]

    this.helper_1 = function(){
        this.display_customer_dialogue(this.i)
    };
    this.helper_2 = function(){
        this.display_owner_dialogue(this.i)
    };
    this.workplace.events.onInputDown.add(this.helper_1, this);
    this.maria.events.onInputDown.add(this.helper_1, this);
};

mariaState.prototype.display_customer_dialogue = function(i){
    if(this.i === this.dialogue_text.length){
        game.state.start("Game");
    }
    if(this.j !== 0){
        this.dialoguebox_customer.destroy();
        this.customer_text.destroy();
    }
    this.dialoguebox_customer = game.add.sprite(450, 100, "dialoguebox_customer");

    let text = this.dialogue_text[i][this.j];
    this.customer_text = game.add.text(580, 240, text, {
        font: "45px Courier", fill: "#000000", fontWeight: "bold", wordWrap: true, wordWrapWidth: 450,
    });
    this.customer_text.lineSpacing = 10;
    this.j++;
    if (this.j > this.dialogue_text[i].length){
        this.dialoguebox_customer.destroy();
        this.customer_text.destroy();
        this.workplace.events.onInputDown.removeAll();
        this.maria.events.onInputDown.removeAll();
        this.i++;
        this.j = 0;
        this.workplace.events.onInputDown.add(this.helper_2, this);
        this.maria.events.onInputDown.add(this.helper_2, this);
    }
};

mariaState.prototype.display_owner_dialogue  = function(i){
    if(this.i === this.dialogue_text.length){
        game.state.start("Game");
    }
    if(this.j !== 0) {
        this.dialoguebox_owner.destroy();
        this.owner_text.destroy();
    }
    this.dialoguebox_owner = game.add.sprite(game.world.centerX+400, 85, "dialoguebox_owner");

    let text = this.dialogue_text[i][this.j];
    this.owner_text = game.add.text(game.world.centerX+550, 230, text, {
        font: "45px Courier", fill: "#000000", fontWeight: "bold", wordWrap: true, wordWrapWidth: 450,
    });
    this.owner_text.lineSpacing = 10;
    this.j++;
    if(this.j > this.dialogue_text[i].length) {
        this.dialoguebox_owner.destroy();
        this.owner_text.destroy();
        this.workplace.events.onInputDown.removeAll();
        this.maria.events.onInputDown.removeAll();
        this.i++;
        this.j = 0;
        this.workplace.events.onInputDown.add(this.helper_1, this);
        this.maria.events.onInputDown.add(this.helper_1, this);
    }
};

mariaState.prototype.start_game = function(){
    game.state.start("Game");
};