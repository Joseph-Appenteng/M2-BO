var s, t; s = document.createElement("script"); s.type = "text/javascript";
s.src = "//cdn.dayspedia.com/js/dwidget.min.v8ec261ff.js";
t = document.getElementsByTagName('script')[0]; t.parentNode.insertBefore(s, t);
s.onload = function() {
    window.dwidget = new window.DigitClock();
    window.dwidget.init("dayspedia_widget_5a1b3c9415f7a558");
};

const home = document.getElementById("home--js");
const weer = document.getElementById("weer--js");
const licht = document.getElementById("licht--js");
const temperatuur = document.getElementById("temperatuur--js");

const main = document.getElementById("main--js");
const weerScreen = document.getElementById("weerScreen--js");
const lichtScreen = document.getElementById("lichtScreen--js");
const temperatuurScreen = document.getElementById("temperatuurScreen--js");

weer.onclick = function( ) {
    main.style.display = "none";
    temperatuurScreen.style.display = "none";
    lichtScreen.style.display = "none";
    weerScreen.style.display = "flex";
    weer.style.background = "#FFFFFF";
    home.style.background = "#57F2D7";
    temperatuur.style.background = "#E66666";
    licht.style.background = "#ECD76D";
}

home.onclick = function( ) {
    main.style.display = "flex";
    weerScreen.style.display = "none";
    lichtScreen.style.display = "none";
    temperatuurScreen.style.display = "none";
    weer.style.background = "#4FDFF0";
    home.style.background = "#FFFFFF";
    temperatuur.style.background = "#E66666";
    licht.style.background = "#ECD76D";
}

licht.onclick = function( ) {
    lichtScreen.style.display = "flex";
    weerScreen.style.display = "none";
    main.style.display = "none";
    temperatuurScreen.style.display = "none";
    weer.style.background = "#4FDFF0";
    home.style.background = "#57F2D7";
    temperatuur.style.background = "#E66666";
    licht.style.background = "#FFFFFF";
}

temperatuur.onclick = function( ) {
    temperatuurScreen.style.display = "flex";
    weerScreen.style.display = "none";
    lichtScreen.style.display = "none";
    main.style.display = "none";
    weer.style.background = "#4FDFF0";
    home.style.background = "#57F2D7";
    temperatuur.style.background = "#FFFFFF";
    licht.style.background = "#ECD76D";
}

/* hier begint de slider */
var slider = document.getElementById("myRange");
var output = document.getElementById("value")

output.innerHTML = slider.value;

slider.oninput = function() {
    output.innerHTML = this.value;
}

slider.addEventListener("mousemove", function(){
    var x =slider.value;
    var color = 'linear-gradient(90deg, rgb(255,255,102)' + x +'%, rgb(214,214,214)' + x + '%)';
    slider.style.background = color;
})

/* hier begint de slider1 */
var slider1 = document.getElementById("myRange1");
var output1 = document.getElementById("value1")

output1.innerHTML = slider1.value;

slider1.oninput = function() {
    output1.innerHTML = this.value;
}

slider1.addEventListener("mousemove", function(){
    var x =slider1.value;
    var color1 = 'linear-gradient(90deg, rgb(255,255,102)' + x +'%, rgb(214,214,214)' + x + '%)';
    slider1.style.background = color1;
})

/* hier begint de slider2 */
var slider2 = document.getElementById("myRange2");
var output2 = document.getElementById("value2")

output2.innerHTML = slider2.value;

slider2.oninput = function() {
    output2.innerHTML = this.value;
}

slider2.addEventListener("mousemove", function(){
    var x =slider2.value;
    var color2 = 'linear-gradient(90deg, rgb(255,255,102)' + x +'%, rgb(214,214,214)' + x + '%)';
    slider2.style.background = color2;
})

/* hier begint de slider3 */
var slider3 = document.getElementById("myRange3");
var output3 = document.getElementById("value3")

output3.innerHTML = slider3.value;

slider3.oninput = function() {
    output3.innerHTML = this.value;
}

slider3.addEventListener("mousemove", function(){
    var x =slider3.value;
    var color3 = 'linear-gradient(90deg, rgb(255,255,102)' + x +'%, rgb(214,214,214)' + x + '%)';
    slider3.style.background = color3;
})

const data2 = {
    labels: labels,
    datasets: [
      {
        label: "Most played games in hours",
        data: [70000, 50000, 60000, 10000, 20000],
        backgroundColors: ["#FF6B6B", "#FFD93D", "#6BCB77", "#4D96FF", "#F473B9"],
      },
    ],
  };
  
  const config = {
    type: "doughnut",
    data: data2,
  };
  
  
  new Chart(document.getElementById("js--chart--1"), config);