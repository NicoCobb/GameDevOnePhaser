let b_manState = function(){

};

b_manState.prototype.create = function(){
    this.i = 0;
    this.j = 0;

    game.add.sprite(0, 0, "main_background");
    this.workplace = game.add.sprite(0, 0, "workplace");
    this.workplace.inputEnabled = true;
    game.add.sprite(0, 0, "sidebar");
    game.add.sprite(650, 760, "stove");
    game.add.sprite(300, game.world.centerY+160, "recipebook");
    this.customer = game.add.sprite(game.world.centerX-72, game.world.centerY+48, "business_man");
    this.customer.anchor.set(0, 1);
    this.customer.inputEnabled = true;

    this.dialogue_text = [["Excuse me, would you happen to be selling apple pies? "],
        ["Indeed I am. I've never seen your face around before. ",
        "That and the clean suit. You must be from outta town. "],
        ["Indeed I am, but I've been traveling around for a while, ",
        "now when you showed up on my radar. "],
        ["Oh? Have I done something wrong? I'm not in trouble am I. "],
        ["What? Oh. No, no, no, no. ",
        "I'm here specifically because of the type of apple you use for your pies. "],
        ["Really? Why? "],
        ["Well you see my friend, for a while now, transportation has gotten much better for food, ",
        "and people are more interested in the quality of ingredients these days. "],
        ["Okaaay. "],
        ["And when I heard that there was still a man in California that had access to Gravenstein apples, ",
        "well I simply had to find him. Now, I would like to make a business proposition. ",
        "Gravenstein apples are amazing as a cooking ingredient and in general taste. ",
        "I would like to work with you to set up a farm for them. "],
        ["I mean, I don't see why not. I have a few trees, ",
        "but I'm more than happy to sell you seeds and offer up planting instructions. "],
        ["That would be phenomenal. ",
        "You of course will be paid very greatly for your help in this endeavor. ",
        "You are one of the few people left that still has these apples. ",
        "One of the others was just an older woman who happened to have a Gravenstein tree in her backyard. ",
        "You on the other hand have a small orchard! It's a truly wondrous find. "],
        ["Why thank you. If your that keen, I could show you the trees in the back. "],
        ["Could I? I would love to. "],
        ["Well then, follow me. "]];

    this.helper_1 = function(){
        this.display_customer_dialogue(this.i)
    };
    this.helper_2 = function(){
        this.display_owner_dialogue(this.i)
    };
    this.workplace.events.onInputDown.add(this.helper_1, this);
    this.customer.events.onInputDown.add(this.helper_1, this);
};

b_manState.prototype.display_customer_dialogue = function(i){
    if(this.i === this.dialogue_text.length){
        game.state.start("Game");
    }
    if(this.j !== 0){
        this.dialoguebox_customer.destroy();
        this.customer_name.destroy();
        this.customer_text.destroy();
    }
    this.dialoguebox_customer = game.add.sprite(400, 118, "dialoguebox_customer");
    this.customer_name = game.add.sprite(380, 100, "name_businessman");

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

b_manState.prototype.display_owner_dialogue  = function(i){
    if(this.i === this.dialogue_text.length){
        game.state.start("Game");
    }
    if(this.j !== 0) {
        this.dialoguebox_owner.destroy();
        this.customer_name.destroy();
        this.owner_text.destroy();
    }
    this.dialoguebox_owner = game.add.sprite(game.world.centerX+500, 110, "dialoguebox_owner");
    this.customer_name = game.add.sprite(game.world.centerX+480, 100, "name_patrick");

    let text = this.dialogue_text[i][this.j];
    this.owner_text = game.add.text(game.world.centerX+600, 200, text, {
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