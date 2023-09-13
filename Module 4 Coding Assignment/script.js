var names = new Array();
names[0] = "Imran";
names[1] = "Ali";
names[2] = "John";
names[3] = "Lisa";
names[4] = "Micheal";
names[5] = "Joe";
names[6] = "Mona";
names[7] = "Kristen";
names[8] = "Julie";
names[9] = "Adam";

for(var i =0; i < names.length; i++){
    if(names[i].charAt(0)=="J" || names[i].charAt(0)=="j"){
    console.log("GoodBye "+names[i]);
    }
    else 
    console.log("Hello "+names[i]);
}
