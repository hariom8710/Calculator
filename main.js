function appendValue(value) {
  document.getElementById('display').value += value;
}

function clearDisplay() {
  document.getElementById('display').value = '';
}

function calculate() {
  let expression = document.getElementById('display').value;
  let result = eval(expression);
  document.getElementById('display').value = result;
}

function clearLastCharacter() {
  display.value = display.value.slice(0, -1);
}