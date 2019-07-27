// replace eval with code that respects order of operations and rounding small numbers

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
// Get the parent DIV ("calculator"), add click listener...
document.getElementById("calculator").addEventListener("click", function(e){
  
  // e.target was the clicked element
  if (e.target && e.target.matches("button.button")) {

    //setup a button value variable
    var buttonValue = e.target.innerHTML
    
// each of these needs to set display to current value

    // switch (buttonValue) {
    //   case '.':
    //       onNumber(buttonValue);
    //       break;
    //   case 'CE':
    //       onClear();
    //       break;
    //   case 'AC':
    //       onAllClear();
    //       break;
    //   default:
    //     if (!isNaN(buttonValue)) {
    //       onNumber(buttonValue);
    //     }
    //     break;
    // }

    if (!isNaN(buttonValue) || buttonValue === '.') {
      temp += buttonValue;
      tempAnswer.push(buttonValue);
      document.getElementById('answer').value = tempAnswer.join('')

    } else if (buttonValue === 'CE') {
      temp = '';
      tempAnswer.pop();
      document.getElementById('answer').value = tempAnswer.join('')

    } else if (buttonValue === 'AC') {
      entries = [];
      temp = '';
      total = 0;
      tempAnswer = [];
      document.getElementById('answer').value = '0'

    }  else if (buttonValue === '-') {
      entries.push(temp);
      entries.push('-');
      temp = '';
      tempAnswer.push('-');
      document.getElementById('answer').value = tempAnswer.join('');
    
    } else if (buttonValue === '+') {
      entries.push(temp);
      entries.push('+');
      temp = '';
      tempAnswer.push('+');
      document.getElementById('answer').value = tempAnswer.join('');
    
    }else if (buttonValue === 'x') {
      entries.push(temp);
      entries.push('*');
      temp = '';
      tempAnswer.push('x')
      document.getElementById('answer').value = tempAnswer.join('')
            
    // Change divide symbol to work with eval
    } else if (buttonValue === '÷') {
      entries.push(temp);
      entries.push('/');
      temp = '';
      tempAnswer.push('÷')
      document.getElementById('answer').value = tempAnswer.join('')

    // Got the equals sign, perform calculation
    } else if (buttonValue === '=') {
      entries.push(temp);

      // loops through array and does multiplication and division
      for (let i = 0; i < entries.length; i++) {
        evalMultiplyAndDivide(entries[i])
      }

      var nt = Number(entries[0]);
      
      for (let i = 1; i < entries.length; i++) {
        var nextNum = Number(entries[i+1])
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

   // Push number
  } else {
    entries.push(temp);
    entries.push(buttonValue);
    temp = '';
    document.getElementById('answer').value = tempAnswer.join('')
  }

  }
});
