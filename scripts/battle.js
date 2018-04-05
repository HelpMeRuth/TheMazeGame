var round = 0;

function battle() {
  var combathtml = document.getElementsByClassName("battle");
  for (var i = 0; i < combathtml.length; i++) {
    combathtml[i].style.top = (parseInt(combathtml[i].style.top.substring(0, 3)) - 400);
  }
  document.getElementById("usedattack").src = "";
  document.getElementById("enemysprite").src = "./pics/characters/" + monsters[currentmonster].Name + ".png";
  if (monsters[currentmonster].Name == "aldrich") {
    document.getElementById("enemysprite").style.top = "10px";
  }
  document.getElementById("hpenemy").src = "./pics/interface/hpenemy" + monsters[currentmonster].Mhealth + ".png";
  document.getElementById("enemyname").src = "./pics/interface/" + monsters[currentmonster].Name + ".png";

  document.getElementById("music").src = "./music/battle.wav";
  document.getElementById("audio").load();
  document.getElementById("audio").play();
}


function endbattle() {
  var combathtml = document.getElementsByClassName("battle");
  for (var i = 0; i < combathtml.length; i++) {
    combathtml[i].style.top = (parseInt(combathtml[i].style.top.substring(0, 3)) + 400);
  }
  document.getElementById("music").src = "./music/normal.wav";
  document.getElementById("audio").load();
  document.getElementById("audio").play();
}

function checkhp() {
  if (currenthero.health <= 0 || y === 0 && x === 0) {
    level = 0;
    dead = true;
    richting = "west";
    x = 4;
    x = 4;
    items = [];
    for (var f = 0; f < monsters.length; f++) {
      monsters[f].beaten = false;

    }
    endbattle();
    fadetimer();
    updateInventory();
    toon();
    return true;
  }
  if (monsters[currentmonster].Mhealth <= 0) {
    monsters[currentmonster].beaten = true;
    endbattle();
    return true;
  }
  document.getElementById("hpenemy").src = "./pics/interface/hpenemy" + monsters[currentmonster].Mhealth + ".png";
  updatehealth();
  return false;
}

function updatehealth() {
  if (currenthero.health > 90) {
    document.getElementById("healthbar").src = "./pics/interface/100health.png";
  } else if (currenthero.health <= 90 && currenthero.health > 80) {
    document.getElementById("healthbar").src = "./pics/interface/90health.png";
  } else if (currenthero.health <= 80 && currenthero.health > 70) {
    document.getElementById("healthbar").src = "./pics/interface/80health.png";
  } else if (currenthero.health <= 70 && currenthero.health > 60) {
    document.getElementById("healthbar").src = "./pics/interface/70health.png";
  } else if (currenthero.health <= 60 && currenthero.health > 50) {
    document.getElementById("healthbar").src = "./pics/interface/60health.png";
  } else if (currenthero.health <= 50 && currenthero.health > 40) {
    document.getElementById("healthbar").src = "./pics/interface/50health.png";
  } else if (currenthero.health <= 40 && currenthero.health > 30) {
    document.getElementById("healthbar").src = "./pics/interface/40health.png";
  } else if (currenthero.health <= 30 && currenthero.health > 20) {
    document.getElementById("healthbar").src = "./pics/interface/30health.png";
  } else if (currenthero.health <= 20 && currenthero.health > 10) {
    document.getElementById("healthbar").src = "./pics/interface/20health.png";
  } else if (currenthero.health <= 10 && currenthero.health > 0) {
    document.getElementById("healthbar").src = "./pics/interface/10health.png";
  }
}
