//note bug in sample code. if you type ".1" it dispalys a "1."
//also half of this is jquery


// entries get added to an array
var entries = [];

//variable to hold calculated total
var total = 0;

// setup a temp variable to store the calculation
var temp = '';

//event listener for click on any button run a function
$("button").on('click', function() {
  //set variable val (value) to val.text()
 	var val = $(this).text();

  //giant if else statement for all the key inputs 0-9, +, -< etc
   // Got a number, add to temp
  if (!isNaN(val) || val === '.') {
    temp += val;
    $("#answer").val(temp.substring(0,10));
    
  // Got some symbol other than equals, add temp to our entries
  // then add our current symbol and clear temp
  } else if (val === 'AC') {
    entries = [];
    temp = '';
    total = 0;
    $("#answer").val('')

  // Clear last entry
  } else if (val === 'CE') {
    temp = '';
    $("#answer").val('')
    
  // Change multiply symbol to work with eval
  } else if (val === 'x') {
    entries.push(temp);
    entries.push('*');
    temp = '';
    
  // Change divide symbol to work with eval
  } else if (val === '÷') {
    entries.push(temp);
    entries.push('/');
    temp = '';

  // Got the equals sign, perform calculation
  } else if (val === '=') {
  	entries.push(temp);

    var nt = Number(entries[0]);
    for (var i = 1; i < entries.length; i++) {
      var nextNum = Number(entries[i+1])
      var symbol = entries[i];
      
      if (symbol === '+') { nt += nextNum; } 
      else if (symbol === '-') { nt -= nextNum; } 
      else if (symbol === '*') { nt *= nextNum; } 
      else if (symbol === '/') { nt /= nextNum; }
      
      i++;
    }
    
    // Swap the '-' symbol so text input handles it correctly
    if (nt < 0) {
      nt = Math.abs(nt) + '-';
    }
    
    $("#answer").val(nt);
		entries = [];
    temp = '';
  
  //final else in giant if statement. Push number to temp
  // Push number
  } else {
    entries.push(temp);
    entries.push(val);
    temp = '';
  }
});