// Copyright 2017 Ruthger Dijt
//

// Main inventory functie.
//
function updateInventory() {
  // Reset de Inventory.
  for (j = 0; j < 8; j++) {
    document.getElementById(j).setAttribute("src", "pics/items/empty.png");
  }
  // Zet de plaatjes van de items.
  for (i = 0; i < items.length; i++) {
    // Check of de amount boven de 0 is.
    if (items[i].Amount >= 1) {
      if (items[i].selected) {
        document.getElementById(i).setAttribute("src", items[i].ImgSelected);
      } else {
        document.getElementById(i).setAttribute("src", items[i].Img);
      }
    } else {
      // Anders haal de item uit de array en doe alles opnieuw
      items.splice(i, 1);
      updateInventory();
    }
  }
}
// kleine functie om geselecteerde items de gebruiken.
function useItem() {
  for (i = 0; i < items.length; i++) {
    if (items[i].selected) {
      items[i].use();
      console.log("datt");
    }
  }
  
}