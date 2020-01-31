//=============================================== 1
//Write a function called percentOf that takes two parameters,
//The function should find out what percentage the first number represents of the second number,
//and returns the result as a string.
//percentOf(5, 10)  ==>  "5 is 50% of 10"
//percentOf(2, 10)  ==>  "2 is 20% of 10"
// Note: please write one or two lines here describing your solution.
function percentOf(num1, num2) {
  // TODO: your code here
}

//=============================================== 2

//Write a function called pluralize that:
//takes 2 parameters, a noun and a number.
//returns the number with the noun in pluralized form.
//pluralize('cat', 0)  ==>  "0 cats"
//pluralize('cat', 5)  ==>  "5 cats"
//pluralize('cat', 1)  ==>  "1 cat"
// Note: please write one or two lines here describing your solution.
function pluralize(noun, number) {
  // TODO: your code here
}

//=============================================== 3

// write a function called addOne that takes an array of numbers as an input,
// and returns a new array with all array elements incremented by one as an output
// Note : solve this question using while loop
// addOne( [1,2,3,4] ) ==> [2,3,4,5]
// addOne( [3,6,9] ) ==> [4,7,10]

// Note: please write one or two lines here describing your solution.
function addOne(array) {
  // TODO: your code here
}

//=============================================== 4

/*
Write a function that uses console.log to give the following triangle:
#
## 
###
####
#####
######
#######
*/
// Note: please write one or two lines here describing your solution.
function drawTriangle() {
  // TODO: your code here
}

//=============================================== 5

//Using recursion, Write a function that accepts a string and returns the number of vowels in that string.
//Note:Five of the 26 alphabet letters are vowels: A, E, I, O, and U.
//countVowels("four score and seven years") ==> 9;
//countVowels("rbk") ==> 0
function countVowels(string) {
  // TODO: your code here
}
//Good Luck :))

// Wala abdaoui , date:31/01/2020 , asses1
//=============================================== 1
function percentOf(x, y) {
  return x + " is " + (x / y) * 100 + "%" + " of " + y;
}
// the function calculate the percentage equation and return the result
//=============================================== 2
function pluralize(str, a) {
  return a + " " + str;
}
// the function returs a string with the number and the noun
//=============================================== 3
function addOne(arr) {
  var i = 0;
  while (i < arr.length) {
    arr[i] = arr[i] + 1;
    i = i + 1;
    console.log(i);
  }
  return arr;
}
// the while loop contain the stop condition of the function , and we added a counter 'i' to increase by'1' each time until i=length-1
//=============================================== 4
function drawTriangle() {
  console.log("#");
  console.log("##");
  console.log("###");
  console.log("####");
  console.log("#####");
  console.log("######");
  console.log("#######");
}
// consol.log is used to print whatever you have inside the paretheses
//=============================================== 5
function countVowels(string) {
  var i = 0;
  if (
    ((string[i] = "a") ||
      (string[i] = "e") ||
      (string[i] = "i") ||
      (string[i] = "o") ||
      (string[i] = "u")) &&
    string.length > 0
  ) {
    var vowels = 0;
    vowels = vowels + 1;
    i++;
    console.log(i);
    return countVowels(string.slice(1));
  }
  return vowels;
}
/* i is the string index , and then we compare the letter of index'i' with vowels , the var vowel presents the vowels number , should take 
1 each time we find vowels and then we slice that letter until the legth is 0 */
