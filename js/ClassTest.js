//ClassTest Class

function CLassTest(name,){
    this.name = name;
}

CLassTest.prototype.printName = function(){
    text = game.add.text(250,16,this.name,{fill: "#ffffff"});
}
