
var buttons = document.querySelectorAll('.button');
var input = document.getElementById('input');

Array.from(buttons).forEach((button) => {
  button.addEventListener('click', (e) => {
    if (e.target.innerHTML == "C") {
      input.innerHTML = "";
    }
    else if (e.target.innerHTML == "=") {
      var inputString = input.innerHTML;
      var numbers = inputString.split(/\+|\-|\*|\//g);
      var operators = inputString.replace(/[0-9]|\./g, "").split("");

      var divide = operators.indexOf("/");
      while (divide != -1) {
        numbers.splice(divide, 2, numbers[divide] / numbers[divide + 1]);
        operators.splice(divide, 1);
        divide = operators.indexOf("/");
      }

      var multiply = operators.indexOf("*");
      while (multiply != -1) {
        numbers.splice(multiply, 2, numbers[multiply] * numbers[multiply + 1]);
        operators.splice(multiply, 1);
        multiply = operators.indexOf("*");
      }

      var subtract = operators.indexOf("-");
      while (subtract != -1) {
        numbers.splice(subtract, 2, numbers[subtract] - numbers[subtract + 1]);
        operators.splice(subtract, 1);
        subtract = operators.indexOf("-");
      }

      var add = operators.indexOf("+");
      while (add != -1) {
        numbers.splice(add, 2, parseFloat(numbers[add]) + parseFloat(numbers[add + 1]));
        operators.splice(add, 1);
        add = operators.indexOf("+");
      }

      input.innerHTML = numbers[0];
    }
    else {
      input.innerHTML += e.target.innerHTML;
    }
  })
})
