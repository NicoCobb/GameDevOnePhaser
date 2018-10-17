let mariaState_1 = function(){

};

mariaState_1.prototype.create = function(){
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

    this.dialogue_text = [["Hello again. If I could, I have a favor to ask you. "],
        ["Hello Maria. It's been a while. By all means, ask away. "],
        ["Well, I've heard from around that you've decided to start making your father's signature pies again. "],
        ["I've been making them for about two years now. Joshua asked me to make one for him the other day. ",
        "Beyond that, I've mostly been making them for myself. "],
        ["I was actually wondering myself if I could have one. Your father's pies were wonderful. ",
        "I've missed them so, but not as much as I miss the man. "],
        ["You were a good friend with both of my parents. Honestly, I'd be honored to make you one of the pies. ",
        "I need to know if they're just as good as my father's. "]];

    this.helper_1 = function(){
        this.display_customer_dialogue(this.i)
    };
    this.helper_2 = function(){
        this.display_owner_dialogue(this.i)
    };
    this.workplace.events.onInputDown.add(this.helper_1, this);
    this.customer.events.onInputDown.add(this.helper_1, this);
};

mariaState_1.prototype.display_customer_dialogue = function(i){
    if(this.i === this.dialogue_text.length){
        game.state.start("Maria_2");
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

mariaState_1.prototype.display_owner_dialogue  = function(i){
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