window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

//countdown//
var countDownDate = new Date("September 19, 2023 00:00:00").getTime();
var x = setInterval(function () {
  var now = new Date().getTime();
  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("days").innerHTML = "00";
    document.getElementById("hours").innerHTML = "00";
    document.getElementById("minutes").innerHTML = "00";
    document.getElementById("seconds").innerHTML = "00";
  }
}, 1000);

//top trending//
let arrowBtn = document.getElementsByClassName("arrow-game");
let arrowBtn2 = document.getElementsByClassName("arrow-game-right");
let trending = document.getElementsByClassName("games__game");
let modus2 = "one-two-three";

for (let i = 0; i < arrowBtn.length && i < arrowBtn2.length; i++) {
  arrowBtn[i].onclick = function () {
    if (modus2 == "one-two-three") {
      trending[1].style.display = "none";
      trending[0].style.display = "none";
      trending[2].style.display = "none";
      trending[3].style.display = "block";
      trending[4].style.display = "block";
      trending[5].style.display = "block";
      modus2 = "four-five-six";
    } else {
      trending[0].style.display = "block";
      trending[1].style.display = "block";
      trending[2].style.display = "block";
      trending[3].style.display = "none";
      trending[4].style.display = "none";
      trending[5].style.display = "none";
      modus2 = "one-two-three";
    }
  };

  arrowBtn2[i].onclick = function () {
    if (modus2 == "one-two-three") {
      trending[1].style.display = "none";
      trending[0].style.display = "none";
      trending[2].style.display = "none";
      trending[3].style.display = "block";
      trending[4].style.display = "block";
      trending[5].style.display = "block";
      modus2 = "four-five-six";
    } else {
      trending[0].style.display = "block";
      trending[1].style.display = "block";
      trending[2].style.display = "block";
      trending[3].style.display = "none";
      trending[4].style.display = "none";
      trending[5].style.display = "none";
      modus2 = "one-two-three";
    }
  };
}

//reviews//

let arrowButtons = document.getElementsByClassName("arrow");
let reviews = document.getElementsByClassName("review");
let modus = "one-two-three";

for (let i = 0; i < arrowButtons.length; i++) {
  arrowButtons[i].onclick = function () {
    if (modus == "one-two-three") {
      reviews[0].style.display = "none";
      reviews[1].style.display = "none";
      reviews[2].style.display = "none";
      reviews[3].style.display = "block";
      reviews[4].style.display = "block";
      reviews[5].style.display = "block";
      modus = "four-five-six";
    } else {
      reviews[0].style.display = "block";
      reviews[1].style.display = "block";
      reviews[2].style.display = "block";
      reviews[3].style.display = "none";
      reviews[4].style.display = "none";
      reviews[5].style.display = "none";
      modus = "one-two-three";
    }
  };
}


//product image//
  function changeProductImage() {
    var editionSelect = document.getElementById("editionSelect");
    var productImage = document.getElementById("productImage");
    var deluxeDiv = document.querySelector(".deluxe");
    var ultimatediv = document.querySelector(".ultimate");
    var priceElement = document.querySelector(".small-container h4");

    if (editionSelect.value === "Deluxe Edition - €57.49") {
      productImage.src = "img/street-fighter-6-deluxe-edition-deluxe-edition-pc-spel-steam-cover.webp";
      deluxeDiv.style.display = "block";
      ultimatediv.style.display = "none";
      priceElement.innerText = "€57.49";
    } else {
      productImage.src = "img/street-fighter-6-pc-spel-steam-cover.webp";
      deluxeDiv.style.display = "none";
      ultimatediv.style.display = "none";
      priceElement.innerText = "€40.99";
    }
    if(editionSelect.value === "Ultimate - €71.49") {
      productImage.src = "img/street-fighter-6-ultimate-edition-ultimate-edition-pc-spel-steam-cover.webp";
      ultimatediv.style.display = "block";
      deluxeDiv.style.display = "none";
      priceElement.innerText = "€71.49";
    }
    
  }

//img/street-fighter-6-ultimate-edition-ultimate-edition-pc-spel-steam-cover.webp//