 var currenthero;
 var fade;
 var herohealth;
 var joseph;
 var rolaf;
 var sophia;
 var currentattack;
 var atkmodifier = 1;
 var dead = false;
 var hero = function(Health, maxhealth, Attack0, Attack1, Attack2, Attack3, Speed) {
   this.health = Health;
   this.maxhealth = maxhealth;
   this.speed = Speed;
   this.Attack0 = Attack0;
   this.Attack1 = Attack1;
   this.Attack2 = Attack2;
   this.Attack3 = Attack3;

   document.getElementById("Attack0").src = "./pics/characters/" + Attack0.name + ".png";
   document.getElementById("Attack1").src = "./pics/characters/" + Attack1.name + ".png";
   document.getElementById("Attack2").src = "./pics/characters/" + Attack2.name + ".png";
   document.getElementById("Attack3").src = "./pics/characters/" + Attack3.name + ".png";

   this.Attack = function(x) {
     if (x === 0) {
       currentattack = this.Attack0;
     } else if (x == 1) {
       currentattack = this.Attack1;
     } else if (x == 2) {
       currentattack = this.Attack2;
     } else {
       currentattack = this.Attack3;
     }

     if (monsters[currentmonster].speed < currenthero.speed || hasatatacked) {
       currentattack();
       if (!checkhp()) {
         monsters[currentmonster].Attack();
       }
     } else {
       monsters[currentmonster].Attack();
       round++;
     }
   };
   currenthero = [];
   currenthero.push(this);
   currenthero = currenthero[0];
 };

 function selecthero(x) {
   dead = false;
   if (x == 1) {
     document.getElementById("hero").src = "./pics/interface/rolaf.png";
     joseph = new hero(100, 100, swordhit, hammerslam, protect, rage, 5);
   } else if (x == 2) {
     document.getElementById("hero").src = "./pics/interface/joseph.png";
     joseph = new hero(80, 80, throwingknives, daggerpierce, potionofreflex, snakepotion, 10);
   } else {
     document.getElementById("hero").src = "./pics/interface/sophia.png";
     joseph = new hero(60, 60, fireball, lightningspear, spellofcontrol, bloodmagic, 8);
   }
   updatehealth();
   fadetimer();
 }

 function fadetimer() {
   fade = window.setInterval(fadehero, 5);
 }

 var l = 0;

 function fadehero() {
   if (l < 400 && !dead) {
     for (var i = 0; i < document.getElementsByClassName("character").length; i++) {
       document.getElementsByClassName("character")[i].style.top = 4 + l + "px";
       l++;
     }
   } else {
     for (var j = 0; j < document.getElementsByClassName("character").length; j++) {
       document.getElementsByClassName("character")[j].style.top = l - 4 + "px";
       l--;
     }
   }
   if (l < 1 || l == 400) {
     window.clearInterval(fade);
   }
 }

 function swordhit() {
   monsters[currentmonster].Mhealth = monsters[currentmonster].Mhealth - 20;
 }

 function hammerslam() {
   monsters[currentmonster].Mhealth = monsters[currentmonster].Mhealth - 50;
   currenthero.health = currenthero.health - 20;
   checkhp();
 }

 function protect() {
   Matkmodifier = 0.50;
 }

 function rage() {
   atkmodifier = 1.50;
 }

 function throwingknives() {
   monsters[currentmonster].Mhealth = monsters[currentmonster].Mhealth - 30;
 }

 function daggerpierce() {
   monsters[currentmonster].Mhealth = monsters[currentmonster].Mhealth - 40;
 }

 function potionofreflex() {
   Matkmodifier = 0.50;
 }

 function snakepotion() {
   atkmodifier = 1.50;
 }

 function fireball() {
   monsters[currentmonster].Mhealth = monsters[currentmonster].Mhealth - 30;
 }

 function lightningspear() {
   monsters[currentmonster].Mhealth = monsters[currentmonster].Mhealth - 40;

 }

 function spellofcontrol() {
   if (currenthero.health < 60) {
     currenthero.health = currenthero.health + 30;
   }
 }

 function bloodmagic() {
   atkmodifier = 2;
   currenthero.health = currenthero.health / 2;
 }
