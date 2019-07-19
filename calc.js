// multiplying 0.3 * 0.3 = 0.899999999 prob JS limitation

//not displaying numbers as entered only when '=' pressed.

//order of operations not folllowed
// when 3+3*6= is entered
// calculates (3+3)*6 = 54
// should calc 3+(3*6) = 21

// entries get added to an array
var entries = [];

//variable to hold calculated total
var total = 0;

// setup a temp variable to store the calculation
var temp = '';

// document.getElementById("calculator").addEventListener("click", myFunction);

// function myFunction() {
//   alert("Hello World");
// }

// //event listener for click on any button run a function
// Get the parent DIV ("calculator"), add click listener...
document.getElementById("calculator").addEventListener("click", function(e){
  
  // e.target was the clicked element
  if (e.target && e.target.matches("button.button")) {
    console.log("Button element clicked!");
    console.log(e.target.innerHTML);

    //setup a button value variable
    var buttonValue = e.target.innerHTML

// each of these needs to set display to current value

    if (!isNaN(buttonValue) || buttonValue === '.') {
      temp += buttonValue;

    } else if (buttonValue === 'CE') {
      temp = '';

    } else if (buttonValue === 'AC') {
      entries = [];
      temp = '';
      total = 0;

    } else if (buttonValue === 'x') {
      entries.push(temp);
      entries.push('*');
      temp = '';
            
    // Change divide symbol to work with eval
    } else if (buttonValue === '÷') {
      entries.push(temp);
      entries.push('/');
      temp = '';

    // Got the equals sign, perform calculation
    } else if (buttonValue === '=') {
      entries.push(temp);
      
      var entriesString = entries.join(" ")
      var nt = eval(entriesString)
      // var nt = Number(entries[0]);
      
      // for (let i = 1; i < entries.length; i++) {
      //   var nextNum = Number(entries[i+1])
      //   var symbol = entries[i];
        
      //   if (symbol === '+') { nt += nextNum; } 
      //   else if (symbol === '-') { nt -= nextNum; } 
      //   else if (symbol === '*') { nt *= nextNum; } 
      //   else if (symbol === '/') { nt /= nextNum; }
        
      //   i++;
      // }

      //  Swap the '-' symbol so text input handles it correctly
      if (nt < 0) {
        nt = '-' + Math.abs(nt);
      }
      
    // need the js version of this 
    // $("#answer").val(nt);
    console.log(nt)
  
    document.getElementById('answer').value = nt
    entries = [];
    temp = '';

   // Push number
  } else {
    entries.push(temp);
    entries.push(buttonValue);
    temp = '';
  }

  }
});
