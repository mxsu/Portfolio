// Top nav active bar highlight
// https://www.w3schools.com/howto/howto_js_active_element.asp

var btnContainer = document.getElementById("topnav");
var btns = btnContainer.getElementsByClassName("nav-btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
// END OF TOP NAV
