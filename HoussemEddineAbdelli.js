//=============================================== 1
//Write a function called percentOf that takes two parameters,
//The function should find out what percentage the first number represents of the second number, 
//and returns the result as a string.
//percentOf(5, 10)  ==>  "5 is 50% of 10"
//percentOf(2, 10)  ==>  "2 is 20% of 10"
// Note: please write one or two lines here describing your solution.
function percentOf(num1, num2) {
	var result = 0;
	if (num2 !== 0) {
		result = (num1 / num2) * 100
		return num1 + " is " + result + " % of " + num2
	}
	return "tne second number must be different than 0"
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
	var display = ""
	display = number + " " + noun
	return display
}











//=============================================== 3

// write a function called addOne that takes an array of numbers as an input, 
// and returns a new array with all array elements incremented by one as an output
// Note : solve this question using while loop 
// addOne( [1,2,3,4] ) ==> [2,3,4,5]
// addOne( [3,6,9] ) ==> [4,7,10]

// Note: please write one or two lines here describing your solution.
function addOne(array) {
	var myAdd = []
	var i = 0
	while (i < array.length) {
		myAdd[i] = array[i] + 1
		i = i + 1
	}
	return myAdd
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

}











//=============================================== 5






//Using recursion, Write a function that accepts a string and returns the number of vowels in that string.
//Note:Five of the 26 alphabet letters are vowels: A, E, I, O, and U.
//countVowels("four score and seven years") ==> 9;
//countVowels("rbk") ==> 0 
function countVowels(string) {
	var myCount = 0
	for (var i = 0; i < string.length; i = i + 1) {
		if (string[i] === "a" || string[i] === "e" || string[i] === "i" || string[i] === "o" || string[i] === "u") {
			myCount = myCount + 1
		}
		return "no vowels"
	}
	return myCount
}
  //Good Luck :))