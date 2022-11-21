// Print 0 To Multi Number Sesh Male
for (var i = 0; i <= 50; i++) {
  console.log(i);
}

// Print Even Number Modulo To Sesh Male
for (var i = 0; i <= 50; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

// Print Odd Number Modulo To Sesh Male
for (var i = 0; i <= 50; i++) {
  if (i % 2 == 1) {
    console.log(i);
  }
}

// Print Any Single Number
for (var i = 0; i <= 50; i++) {
  if (i % 7 == 0) {
    console.log(i);
  }
}

// Print Any Number Of Designed
var n = "";
for (var i = 1; i <= 10; i++) {
  console.log(7 + " x ", i, " = " + 7 * i);
}

// Print Reverse Number
for (var i = 100; i >= 1; i--) {
  console.log(i);
}

// A loop which will skip the step where i = 3.
var n = "";
for (var i = 1; i <= 50; i++) {
  if (i === 30) {
    continue;
  }
  n += i + "<br>";
}
console.log(n);

// A loop with a break statement.
var n = "";
for (var i = 1; i <= 50; i++) {
  if (i === 30) {
    break;
  }
  n += i + "<br>";
}
console.log(n);
