window.onload = function() {
  updateInventory();
  toon();
};

var level = 0;
if (level === 0) {
  var xas = ["0110110100", "0101011000", "0100000110", "0110101110", "0101100100", "0101101010", "0101100010", "0011011100", "0110110010"];
  var yas = ["0001100110", "0010011100", "0110100101", "0101000010", "0111001010", "0010101100", "0101011010", "0110001010", "0110110110"];
  var y = 4;
  var x = 4;
  var richting = "west";
}


function help() {
  window.alert("X:" + " " + x + "\n" + "Y:" + " " + y + "\n" + "Richting:" + " " + richting);
}

function rechtdoor() {
  if ((richting == "noord") && (yas[x][y + 1] == 1)) {
    y++;
  }
  if ((richting == "oost") && (xas[y][x + 1] == 1)) {
    x++;
  }
  if ((richting == "zuid") && (yas[x][y] == 1)) {
    y--;
  }
  if ((richting == "west") && (xas[y][x] == 1)) {
    x--;
  }
  toon();
}

function links() {
  if (richting == "noord") {
    richting = "west";
  } else if (richting == "oost") {
    richting = "noord";
  } else if (richting == "zuid") {
    richting = "oost";
  } else if (richting == "west") {
    richting = "zuid";
  }
  toon();
}

function rechts() {
  if (richting == "noord") {
    richting = "oost";
  } else if (richting == "oost") {
    richting = "zuid";
  } else if (richting == "zuid") {
    richting = "west";
  } else if (richting == "west") {
    richting = "noord";
  }
  toon();
}

function toon() {
  // frontview
  var frontview;
  var sideviewR;
  var sideviewL;
  if (richting == "noord") {
    frontview = 0;
    if (yas[x][y + 1] == 1) {
      for (var i = 1; i < yas[0].length; i++) {
        if (yas[x][y + i] == 1) {
          frontview++;
        } else {
          break;
        }
      }
      document.getElementById("frontview").src = "./pics/frontview/frontview" + frontview + ".png";
    } else {
      document.getElementById("frontview").src = "./pics/frontview/frontview0.png";
    }
    stop = 0;
    sideviewR = 0;
    for (var z = 0; z < 4 && stop !== 1; z++) {
      if (xas[y + z][x + z + 1] == 1) {
        sideviewR++;
      } else {
        stop = 1;
      }
      if (stop !== 1 && yas[x + z + 1][y + z + 1] == 1) {
        sideviewR++;
      } else {
        stop = 1;
      }
    }
    sideviewL = 0;
    stop = 0;
    for (var a = 0; a < 4 && stop !== 1; a++) {
      if (xas[y - a][x - a] == 1) {
        sideviewL++;
      } else {
        stop = 1;
      }
      if (stop !== 1 && yas[x - a - 1][y - a + 1] == 1) {
        sideviewL++;
      } else {
        stop = 1;
      }
    }
    document.getElementById("sideviewL").src = "./pics/sideviewL/sideview" + sideviewL + ".png";
    document.getElementById("sideviewR").src = "./pics/sideviewR/sideview" + sideviewR + ".png";
  } else if (richting == "zuid") {
    frontview = 0;
    if (yas[x][y] == 1) {
      for (var j = 1; j < yas[0].length; j++) {
        if (yas[x][y + 1 - j] == 1) {
          frontview++;
        } else {
          break;
        }
      }
      document.getElementById("frontview").src = "./pics/frontview/frontview" + frontview + ".png";
    } else {
      document.getElementById("frontview").src = "./pics/frontview/frontview0.png";
    }
    stop = 0;
    sideviewR = 0;
    sideviewL = 0;
    for (u = 0; u < 3 && stop !== 1; u++) {
      if (xas[y - u][x - u] == 1) {
        sideviewR++;
      } else {
        stop = 1;
      }
      if (stop !== 1 && yas[x - u - 1][y - u] == 1) {
        sideviewR++;
      } else {
        stop = 1;
      }
    }
    stop = 0;
    for (u = 0; u < 3 && stop !== 1; u++) {
      if (xas[y - u][x + u + 1] == 1) {
        sideviewL++;
      } else {
        stop = 1;
      }
      if (stop !== 1 && yas[x + u + 1][y - u] == 1) {
        sideviewL++;
      } else {
        stop = 1;
      }
    }
    document.getElementById("sideviewL").src = "./pics/sideviewL/sideview" + sideviewL + ".png";
    document.getElementById("sideviewR").src = "./pics/sideviewR/sideview" + sideviewR + ".png";
  } else if (richting == "oost") {
    frontview = 0;
    if (xas[y][x + 1] == 1) {
      for (var k = 1; k < xas[0].length; k++) {
        if (xas[y][x + k] == 1) {
          frontview++;
        } else {
          break;
        }
      }
      document.getElementById("frontview").src = "./pics/frontview/frontview" + frontview + ".png";
    } else {
      document.getElementById("frontview").src = "./pics/frontview/frontview0.png";
    }
    stop = 0;
    sideviewR = 0;
    for (m = 0; m < 4 && stop !== 1; m++) {
      if (yas[x + m][y - m] == 1) {
        sideviewR++;
      } else {
        stop = 1;
      }
      if (stop !== 1 && xas[y - m - 1][x + m + 1] == 1) {
        sideviewR++;
      } else {
        stop = 1;
      }
    }
    sideviewL = 0;
    stop = 0;
    for (o = 0; o < 4 && stop !== 1; o++) {
      if (yas[x + o][y + o + 1] == 1) {
        sideviewL++;
      } else {
        stop = 1;
      }
      if (stop !== 1 && xas[y + o + 1][x + o + 1] == 1) {
        sideviewL++;
      } else {
        stop = 1;
      }
    }
    document.getElementById("sideviewL").src = "./pics/sideviewL/sideview" + sideviewL + ".png";
    document.getElementById("sideviewR").src = "./pics/sideviewR/sideview" + sideviewR + ".png";

  } else if (richting == "west") {
    frontview = 0;
    if (xas[y][x] == 1) {
      for (var h = 1; h < xas[0].length; h++) {
        if (xas[y][x + 1 - h] == 1) {
          frontview++;
        } else {
          break;
        }
      }
      document.getElementById("frontview").src = "./pics/frontview/frontview" + frontview + ".png";
    } else {
      document.getElementById("frontview").src = "./pics/frontview/frontview0.png";
    }
    stop = 0;
    sideviewR = 0;
    for (m = 0; m < 4 && stop !== 1; m++) {
      if (yas[x - m][y + m + 1] == 1) {
        sideviewR++;
      } else {
        stop = 1;
      }
      if (stop !== 1 && xas[y + m + 1][x + m] == 1) {
        sideviewR++;
      } else {
        stop = 1;
      }
    }
    sideviewL = 0;
    stop = 0;
    for (m = 0; m < 4 && stop !== 1; m++) {
      if (yas[x + m][y + m] == 1) {
        sideviewL++;
      } else {
        stop = 1;
      }
      if (stop !== 1 && xas[y + m - 1][x + m] == 1) {
        sideviewL++;
      } else {
        stop = 1;
      }
    }
    document.getElementById("sideviewL").src = "./pics/sideviewL/sideview" + sideviewL + ".png";
    document.getElementById("sideviewR").src = "./pics/sideviewR/sideview" + sideviewR + ".png";
  }
  for (var f = 0; f < monsters.length; f++) {
    if (monsters[f].positionx == x && monsters[f].positiony == y && !monsters[f].beaten && monsters[f].Mhealth > 1) {
      currentmonster = f;
      battle();
    }
  }
  if(x == 0 && y == 0){
	  window.alert("Je hebt gewonnen!");
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
  }
  for (var v = 0; v < items.length; v++) {
    if (items[v].xpos == x && items[v].ypos == y) {
      items[v].add(1);
    }
  }
}
