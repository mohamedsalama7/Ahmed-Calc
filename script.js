
let inputs = document.querySelectorAll(".input button");
let output = document.querySelector(".screen");

let result = "";
var audio = new Audio('final.mp3');
let equal = document.getElementById("equal");

output.addEventListener("keydown", (e) => {
  e.preventDefault();
})

output.focus();
if (result = "") {
  equal.disabled = true;
}

inputs.forEach(element => {
  element.addEventListener("click", (ele) => {

    output.focus();
    audio.play();
    if (element.getAttribute("value") == "c") {
      output.value = "";
      result = "";

    } else if (element.getAttribute("value") == "^") {
      output.value = output.value.substring(0, output.value.length - 1);
      result = result.substring(0, result.length - 2);

    } else if (element.getAttribute("value") == "=") {
      if (result !== "") {
        output.value = eval(result);
        output.blur();
      }
      else {
        output.value = eval("0");
      }

    }
    else {
      output.value += element.innerText;
      result += element.value;
    }
    console.log(`result => ` + result);
    console.log(`output is => ` + output.value);
  })
})






