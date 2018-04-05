console.log("items.ks");

// Copyright 2017 Ruthger Dijt
//

// Maak items array. Als je een item aanroept doe het via de array en niet direct! Anders kan de inventory niet dynamisch zijn
var items = [];
// Health constructor.
//
var healthPack = function(Name, Healthback, Amount, Img, ImgSelected, xpos, ypos) {
  this.Name = Name;
  this.Healthback = Math.abs(Healthback);
  this.Amount = Amount;
  this.Img = Img;
  this.ImgSelected = ImgSelected;
  this.selected = false;
  // Zet alle nieuwe items in de array, als de amount niet 0 is.
  if (this.Amount >= 1) {
    items.push(this);
  }
  // (naam van de item).use(); Om health terug te geven.
  this.use = function() {
    if (this.Amount !== 0) {
      // Health cap bij 100.
      if (currenthero.health !== currenthero.maxhealth) {
        if (currenthero.health + this.Healthback > currenthero.maxhealth) {
          currenthero.health = currenthero.maxhealth;
        } else {
          currenthero.health = currenthero.health + this.Healthback;
        }
        this.Amount--;
      }
      this.selected = false;
      document.getElementById("itemName").innerHTML = " ";
    }
    updateInventory();
  };
  // (naam van de item).add(Aantal om toetevoegen); Om meer items toetevoegen.
  this.add = function(i) {
    // als er geen i word mee gegeven word this.amount NaN waardoor het geen cijfer meer is. dit kan een game breaking bug zijn
    if (!isNaN(i)) {
      if (this.Amount < 1) {
        // Stop de item weer terug in de item array, omdat hij weer gebruikt kan worden.
        items.push(this);
      }
      this.Amount = this.Amount + i;
      updateInventory();
    }
  };
  // select functie
  this.select = function() {
    // maak eerst alles niet geselecteerd
    for (i = 0; i < items.length; i++) {
      items[i].selected = false;
    }
    // maak de item geselecteerd en update de inventory.
    this.selected = true;
    document.getElementById("itemName").innerHTML = this.Name;
    updateInventory();
  };
};
//
// Maak hier nieuwe items   (Naam, HP, Aantal, img path, geselecteerde img path).
var Apple = new healthPack("Apple", 10, 1, "pics/items/apple.png", "pics/items/appleselected.png", 4, 4);
var Mushroom = new healthPack("Mushroom", 20, 1, "pics/items/mushroom.png", "pics/items/mushroomselected.png", 3, 3);
var Bread = new healthPack("Bread", 30, 1, "pics/items/bread.png", "pics/items/breadselected.png", 0, 1);
//var Key = new healthPack("Key", 10, 1, "pics/items/key.png", "pics/items/keyselected.png");
var Potion = new healthPack("Potion", 50, 1, "pics/items/potion.png", "pics/items/potionselected.png", 2, 2);
//var Hpring = new healthPack("Hpring", 30, 1, "pics/items/hpring.png", "pics/items/hpringselected.png");
//var Atkring = new healthPack("Atkring", 10, 1, "pics/items/atkring.png", "pics/items/atkringselected.png");
var Waterzak = new healthPack("Atkring", 10, 1, "pics/items/waterzak.png", "pics/items/waterzakselected.png", 8, 4);
