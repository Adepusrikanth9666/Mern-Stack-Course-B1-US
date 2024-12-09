var a = 5;
var b = 10;

console.log("The value is displaying here!!!", a + b, "Hwy Hello!!");

var headValue = document.getElementById("head_title_id");

headValue.innerHTML = " I will Learn JavaScript Tommarow";

// var headValue = document.getElementsByClassName("head_title_class");

// headValue[0].innerHTML = " I will Learn JavaScript day after tommarow";

// console.log(document);

function turnOnBulb() {
  //   console.log("Light turn on");
  headValue.innerHTML = " you Clicked on Light turn on";
  var imag_turn_on = window.document.getElementById("bulb_image");
  imag_turn_on.src =
    "https://w7.pngwing.com/pngs/287/152/png-transparent-incandescent-light-bulb-drawing-coloring-book-christmas-lights-light-color-lamp-cartoon-thumbnail.png";
}

function turnOffBulb() {
  //   console.log("Light turn Off");
  headValue.innerHTML = " you Click on Light turn OFF";
  var bulb_turn_off = document.getElementById("bulb_image");
  bulb_turn_off.src =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCuCD5MVWv_zUuSDnuB5DTGZcH9I9WpPdoJg&s";
}
