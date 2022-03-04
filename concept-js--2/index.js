// write 3 functions that accepts two arguments x and y
// the first summing numbers
function sum(x, y) {
  return x+y
}
// the second multiplying x,y
function multiply(x, y) {
  return x*y
}
// the third divide numbers
function divide(x, y) {
  return x/y
}
// last check the maw between tow  numbers check
function findMax(x, y) {
  if (x>y)
     return x
  else 
     return y
}
// exercise 1

// Given the initial balance as bal and the amount X to be debited, where X must be
// a multiple of 10 and rupees 1.50 is deducted as the debit charge for each 
//successful debit. The task is to find the remaining balance left after the 
//transaction, which can be successful, or unsuccessful. The balances are in 2 
//floating-point precision.

// checkBalance(50,100.50)
// Input: X = 50, bal = 100.50
// Output: 49.00
// Transaction successful

// checkBalance(55,99.00)
// Input: X = 55, bal = 99.00
// Output: 99.00
// Transaction unsuccessful
function checkBalance(x, bal) {
  const fd=1.50
  if (x % 10== 0)
     {
       bal=bal-x-fd
       return (Math.round(bal)+"\n transaction successful")
     }
  else 
  {
    return bal+"\n transaction insuccessful"
  }

}
console.log(checkBalance(50,100.50))

// exercise 2

// In the game of golf, each hole has a par, meaning, the average number of strokes a golfer is expected to make in order to sink the ball in the hole to complete the play. Depending on how far above or below par your strokes are, there is a different nickname.

// Your function will be passed par and strokes arguments. Return the correct string according to this table which lists the strokes in order of priority; top (highest) to bottom

const names = [
  "Hole-in-one!",
  "Eagle",
  "Birdie",
  "Par",
  "Bogey",
  "Double Bogey",
  "Go Home!",
];
// Strokes       Return

// 1	          "Hole-in-one!"
// <= par - 2	  "Eagle"
// par - 1	    "Birdie"
// par	        "Par"
// par + 1	    "Bogey"
// par + 2	    "Double Bogey"
// >= par + 3	  "Go Home!"

// golfScore(1, 1) should return the string Hole-in-one!
// golfScore(4, 1) should return the string Hole-in-one!
// golfScore(4, 2) should return the string Eagle
// golfScore(5, 2) should return the string Eagle
// par and strokes will always be numeric and positive. We have added an array of all the names for your convenience.
function golfScore(par,strokes) {
  if(Number.isInteger(par) == true &&  par>0){
    if(Number.isInteger(strokes) == true &&  strokes>0)
    {
      if (strokes == 1)
         str=names[0]
      else
      {
         if (strokes <= par-2)
            str=names[1]
         if(strokes == par-1)
            str=names[2]
         if(strokes == par)
            str=names[3]
         if(strokes == par+1)
            str=names[4]
         if(strokes == par+2)
            str=names[5]
         if(strokes >= par+3)
            str=names[6]
        }
    }
    else 
      str ="the strokes will always be numeric and positive"
  }
  else
    str ="the par will always be numeric and positive"
return str;
 
}
console.log(golfScore(6,5))
