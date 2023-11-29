document.addEventListener("DOMContentLoaded", function () {
  var toggleButton = document.getElementById("toggleButton");
  var myDiv = document.getElementById("collapseDiv");
  var logo = document.getElementById("buttonImage");

  toggleButton.addEventListener("click", function () {
    toggleButton.classList.toggle("clickedDiv");

    var isButtonClicked = toggleButton.classList.contains("clickedDiv");

    myDiv.classList.toggle("collapseDiv", !isButtonClicked);

    if (isButtonClicked) {
      logo.src = "../images/greenXlogo.svg";
    } else {
      logo.src = "../images/plusLogo.svg";
    }
  });
});

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function (event) {
  if (!event.target.matches(".dropdownButton")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};
