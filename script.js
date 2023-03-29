const pantalla = document.querySelector("#pantalla");
const buttons = document.querySelectorAll("button");

buttons.forEach((item) => {
  item.onclick = () => {
    if (item.id == "clear") {
      pantalla.innerText = "";
    } else if (item.id == "backspace") {
      let string = pantalla.innerText.toString();
      pantalla.innerText = string.substr(0, string.length - 1);
    } else if (pantalla.innerText != "" && item.id == "equal") {
      pantalla.innerText = eval(pantalla.innerText);
    } else if (pantalla.innerText == "" && item.id == "equal") {
      pantalla.innerText = "Empty!";
      setTimeout(() => (pantalla.innerText = ""), 2000);
    } else {
      pantalla.innerText += item.id;
    }
  };
});
const calculator = document.querySelector(".calculator");


