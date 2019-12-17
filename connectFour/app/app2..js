function play() {
   let element = document.getElementById("board");
   element.classList.add("gameSpace");
}

function playHover() {
   let element = document.getElementById("projectile");
   let element2 = document.getElementById("projectile2");
   let element3 = document.getElementById("projectile3");
   let element4 = document.getElementById("projectile4");
   element.classList.add("projectile");
   element2.classList.add("projectile");
   element3.classList.add("projectile");
   element4.classList.add("projectile");
}

function removeHover() {
   let element = document.getElementById("projectile");
   let element2 = document.getElementById("projectile2");
   let element3 = document.getElementById("projectile3");
   let element4 = document.getElementById("projectile4");
   element.classList.remove("projectile");
   element2.classList.remove("projectile");
   element3.classList.remove("projectile");
   element4.classList.remove("projectile");
}

function beforeReload() {
   let element = document.getElementById("title");
   let element2 = document.getElementById("app");
   element.classList.add("titleExit");
   element2.classList.add("gameOverExit");
}

function reload() {
   window.location.reload();
}
