// entries get added to an array
var entries = [];

//variable to hold calculated total
var total = 0;

// setup a temp variable to store the calculation
var temp = '';

//for displaying current entries
var tempAnswer = [];

function onNumber(buttonValue) {
  temp += buttonValue;
  tempAnswer.push(buttonValue);
  document.getElementById('answer').value = tempAnswer.join('')
}

function onClear() {
  temp = '';
  tempAnswer.pop();
  document.getElementById('answer').value = tempAnswer.join('')
}

function onAllClear() {
  entries = [];
  temp = '';
  total = 0;
  tempAnswer = [];
  document.getElementById('answer').value = '0'
}

function onMinus() {
  entries.push(temp);
  entries.push('-');
  temp = '';
  tempAnswer.push('-');
  document.getElementById('answer').value = tempAnswer.join('');
}

function onPlus() {
  entries.push(temp);
  entries.push('+');
  temp = '';
  tempAnswer.push('+');
  document.getElementById('answer').value = tempAnswer.join('');
}

// changes symbol to work with multiplication later
function onTimes() {
  entries.push(temp);
  entries.push('*');
  temp = '';
  tempAnswer.push('x')
  document.getElementById('answer').value = tempAnswer.join('')
}

// changes symbol to work with running the division later
function onDivide() {
  entries.push(temp);
  entries.push('/');
  temp = '';
  tempAnswer.push('÷')
  document.getElementById('answer').value = tempAnswer.join('')
}

// runs the calculation
function onEquals() {
  entries.push(temp);

  // loops through array and does multiplication and division
  for (let i = 0; i < entries.length; i++) {
    evalMultiplyAndDivide(entries[i])
  }

  var nt = Number(entries[0]);

  for (let i = 1; i < entries.length; i++) {
    var nextNum = Number(entries[i + 1])
    var symbol = entries[i];

    if (symbol === '+') { nt += nextNum; }
    else if (symbol === '-') { nt -= nextNum; }

    i++;
  }

  //  Swap the '-' symbol so text input handles it correctly
  if (nt < 0) {
    nt = '-' + Math.abs(nt);
  }

  document.getElementById('answer').value = nt
  entries = [];
  temp = '';
  tempAnswer = [];
}

// evaluates any instances of multiplication and division
function evalMultiplyAndDivide(symbol) {
  if (symbol !== '*' && symbol !== '/') {
    return
  }

  let position = entries.indexOf(symbol);
  let leftPosition = position - 1;
  let rightPosition = position + 1;

  if (symbol = '*') {
    product = entries[leftPosition] * entries[rightPosition];
  } else if (symbol = '/') {
    product = entries[leftPosition] / entries[rightPosition];
  }

  entries.splice(leftPosition, 3, product);
}

//event listener for click on any button run a function
document.getElementById("calculator").addEventListener("click", function (e) {

  // e.target was the clicked element
  if (e.target && e.target.matches("button.button")) {

    //setup a button value variable
    var buttonValue = e.target.innerHTML

    if (!isNaN(buttonValue) || buttonValue === '.') {
      onNumber(buttonValue)

    } else if (buttonValue === 'CE') {
      onClear()

    } else if (buttonValue === 'AC') {
      onAllClear()

    } else if (buttonValue === '-') {
      onMinus()

    } else if (buttonValue === '+') {
      onPlus()

    } else if (buttonValue === 'x') {
      onTimes()

    } else if (buttonValue === '÷') {
      onDivide()

    } else if (buttonValue === '=') {
      onEquals()
    }

  }
});
