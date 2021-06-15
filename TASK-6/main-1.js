// --1) WAP in js to check given year is leap year.

function CheckLeapYear(YR) {
  if ((YR % 4 == 0 || YR % 400 == 0) && YR % 100 != 0) console.log("Leap Year");
  else console.log("Not a Leap Year");
}

// let year = prompt("Enter Year Here :");
CheckLeapYear(year);
document.write("Question -1) WAP in js to check given year is leap year.");

