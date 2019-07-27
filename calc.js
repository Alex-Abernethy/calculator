// entries get added to an array
var entries = [];

//variable to hold calculated total
var total = 0;

// setup a temp variable to store the calculation
var temp = '';

//for displaying current entries
var tempAnswer = [];

// //event listener for click on any button run a function
// Get the parent DIV ('calculator'), add click listener...
document.getElementById('calculator').addEventListener('click', function(e){
  
  // e.target was the clicked element
  if (e.target && e.target.matches('button.button')) {
    console.log('Button element clicked!');
    console.log(e.target.innerHTML);

    //setup a button value variable
    var buttonValue = e.target.innerHTML

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
      document.getElementById('answer').value = '0';

    } else if (buttonValue === 'x') {
      entries.push(temp);
      entries.push('*');
      temp = '';
      tempAnswer.push('x');
      document.getElementById('answer').value = tempAnswer.join('');
    
    } else if (buttonValue === '-') {
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
    
    // ensure divide symbol to works with eval
    } else if (buttonValue === '÷') {
      entries.push(temp);
      entries.push('/');
      temp = '';
      tempAnswer.push('÷');
      document.getElementById('answer').value = tempAnswer.join('');

    // if equals perform calculation
    } else if (buttonValue === '=') {
      entries.push(temp);
      console.log(entries);

      // var entriesString = entries.join(' ');
      // var nt = eval(entriesString);
      
      for (let i = 0; i < entries.length; i++) {
        if (entries[i] === '*') {
          let position = entries.indexOf(entries[i]);
          console.log(position);
          let leftPosition = position - 1;
          let rightPosition = position + 1;
          product = entries[leftPosition] * entries[rightPosition];
          entries.splice(leftPosition, 3, product);
          console.log(product);
        } else if (entries[i] === '/') {
          let position = entries.indexOf(entries[i]);
          let leftPosition = position - 1;
          let rightPosition = position + 1;
          product = entries[leftPosition] / entries[rightPosition];
          entries.splice(leftPosition, 3, product);
          console.log(product)
        } else {
          console.log("number")
        } 
      }
      console.log(entries)
      var entriesString = entries.join(' ');
      var nt = eval(entriesString);

      //  if negative number place '-' in front of number
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
    tempAnswer.push(temp);
    document.getElementById('answer').value = tempAnswer.join('');
  }

  }
});
