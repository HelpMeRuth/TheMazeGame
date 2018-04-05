// Copyright 2017 Ruthger Dijt
//

// Maak monsters array.
var monsters = [];
var currentmonster;
var Matkmodifier = 1;
var hasatatacked = false;

function monster(Name, Mhealth, Speed, positionx, positiony, Attack0, Attack0Name, Chance0, Attack1, Attack1Name, Attack2, Attack2Name, Chance2, Img, beaten) {
  // Monster info
  var isnumber0;
  var isnumber1;
  var isnumber2;
  this.Name = Name;
  this.beaten = beaten;
  this.Mhealth = Mhealth;
  this.speed = Speed;
  this.positionx = positionx;
  this.positiony = positiony;
  this.Attack0 = Attack0;
  this.Attack1 = Attack1;
  this.Attack2 = Attack2;
  this.Attack0Name = Attack0Name;
  this.Attack1Name = Attack1Name;
  this.Attack2Name = Attack2Name;
  this.Chance0 = Chance0;
  this.Chance2 = Chance2;
  this.Img = Img;
  // stop de monser in de array
  monsters.push(this);

  // elke attack heeft this.Chance kans om gebruikt te worden.
  //
  this.Attack = function() {
    console.log("check2");
    random = Math.floor(Math.random() * 100);
    // kleiner dan ...
    if (random < this.Chance0) {
      document.getElementById("usedattack").src = "./pics/interface/" + monsters[currentmonster].Attack0Name + ".png";
      if (this.Attack0 <= 100) {
        genericAttack(this.Attack0);
      } else {
        this.Attack0();
      }
      // tussen Chance 0 en 1 in.
    } else if (random < this.Chance2 && random > this.Chance0) {
      document.getElementById("usedattack").src = "./pics/interface/" + monsters[currentmonster].Attack1Name + ".png";
      if (this.Attack1 <= 100) {
        genericAttack(this.Attack1);
      } else {
        this.Attack1();
      }
      // groter dan ...
    } else if (random > this.Chance2) {
      document.getElementById("usedattack").src = "./pics/interface/" + monsters[currentmonster].Attack2Name + ".png";
      if (this.Attack2 <= 100) {
        genericAttack(this.Attack2);
      } else {
        this.Attack2();
      }
    }
    if (checkhp()) {
      hasatatacked = true;
      currentattack();
      round++;
    }
  };
}
// Maak hier alle attacks. hier verminder je de health kan je misschien een animatie aanzetten.
//
function genericAttack(x) {
  currenthero.health = currenthero.health - (Matkmodifier * x);
}

function leechlife() {
  currenthero.health = currenthero.health - (Matkmodifier * 10);
  monsters[currentmonster].Mhealth = monsters[currentmonster].Mhealth + 10;
}

function eternaldarkness() {
  currenthero.health = currenthero.health - (Matkmodifier * 1000);
}

function magicalbarier() {
  monsters[currentmonster].health = monsters[currentmonster.health] + 20;
}

function explosion() {
  monsters[currentmonster].Mhealth = monsters[currentmonster].Mhealth - 100;
  currenthero.health = currenthero.health - 60;
}

function holyblessing() {
  monsters[currentmonster].Mhealth = monsters[currentmonster].Mhealth + 30;
}
// Maak hier alle nieuwe monsters.
var mazedweller0 = new monster("mazedweller", 60, 2, 3, 4, 20, "axesweep", 40, 10, "onewiththedark", 30, "spook", 75, "/pics/characters/mazedweller.png", false);
var mazedweller1 = new monster("mazedweller", 60, 2, 0, 1, 20, "axesweep", 40, 10, "onewiththedark", 30, "spook", 75, "/pics/characters/mazedweller.png", false);
var mazedweller2 = new monster("mazedweller", 60, 2, 4, 9, 20, "axesweep", 40, 10, "onewiththedark", 30, "spook", 75, "/pics/characters/mazedweller.png", false);
var kobold0 = new monster("kobold", 80, 2, 1, 4, 20, "stonesmash", 40, 10, "brutalwhack", 30, "frenzy", 75, "/pics/characters/kobold.png", false);
var kobold1 = new monster("kobold", 80, 2, 2, 9, 20, "stonesmash", 40, 10, "brutalwhack", 30, "frenzy", 75, "/pics/characters/kobold.png", false);
var kobold2 = new monster("kobold", 80, 2, 6, 3, 20, "stonesmash", 40, 10, "brutalwhack", 30, "frenzy", 75, "/pics/characters/kobold.png", false);
var reaper0 = new monster("reaper", 80, 2, 3, 7, 20, "scyteslash", 50, leechlife, "leechlife", eternaldarkness, "eternaldarkness", 90, "/pics/characters/reaper.png", false);
var reaper1 = new monster("reaper", 80, 2, 5, 1, 20, "scyteslash", 50, leechlife, "leechlife", eternaldarkness, "eternaldarkness", 90, "/pics/characters/reaper.png", false);
var mask0 = new monster("mask", 80, 2, 9, 9, 20, "headslam", 50, magicalbarier, "magicalbarier", explosion, "explosion", 75, "/pics/characters/mask.png", false);
var mask1 = new monster("mask", 80, 2, 5, 5, 20, "headslam", 50, magicalbarier, "magicalbarier", explosion, "explosion", 75, "/pics/characters/mask.png", false);
var aldrich0 = new monster("aldrich", 100, 2, 1, 0, 20, "magicalsword", 40, 40, "blueflames", holyblessing, "holyblessing", 85, "/pics/characters/aldrich.png", false);
