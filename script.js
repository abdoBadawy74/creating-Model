let modal = document.getElementById("modal");

let modalImg = document.getElementById("img");

let caption = document.getElementById("caption");

let myImg = document.getElementById("myImage");

myImg.onclick = function () {
  modal.style.display = "block";

  modalImg.src = this.src;

  caption.innerHTML = this.alt;
};

let close = document.getElementsByClassName("close")[0];

close.onclick = function () {
  modal.style.display = "none";
};

document.onkeydown = function (ev) {
  if (ev.keyCode == "27") {
    modal.style.display = "none";
  }
};

// keyCode is code which is given to each key in keyboard
