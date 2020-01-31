//=============================================== 1
//Write a function called percentOf that takes two parameters,
//The function should find out what percentage the first number represents of the second number, 
//and returns the result as a string.
//percentOf(5, 10)  ==>  "5 is 50% of 10"
//percentOf(2, 10)  ==>  "2 is 20% of 10"
// Note: please write one or two lines here describing your solution.

// comments: the function percentOf will take the number 1, multiply it by 100 and then divide the results by the number 2.
function percentOf(num1, num2) {
    percent = (num1*100)/num2;
    return num1 + ' is ' + percent + '% of ' + num2;
}

//=============================================== 2

//Write a function called pluralize that:
//takes 2 parameters, a noun and a number.
//returns the number with the noun in pluralized form.
//pluralize('cat', 0)  ==>  "0 cats"
//pluralize('cat', 5)  ==>  "5 cats" 
//pluralize('cat', 1)  ==>  "1 cat" 
// Note: please write one or two lines here describing your solution.

// comments: the function will not add 's' after the word only if if the number is 1.
function pluralize(noun, number) {
     if (number === 1){
         return noun;
     } else return noun+'s';
}

//=============================================== 3

// write a function called addOne that takes an array of numbers as an input, 
// and returns a new array with all array elements incremented by one as an output
// Note : solve this question using while loop 
// addOne( [1,2,3,4] ) ==> [2,3,4,5]
// addOne( [3,6,9] ) ==> [4,7,10]
 
// Note: please write one or two lines here describing your solution.

// the function addone will create a new aray and  push in it everytime the value of the array element +1;
function addOne(array) {
    var x=[];
    var i=0;
    while (i<array.length){
        x.push(array[i] +1);
        i= i + 1;
    }
    return x;
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

// we have to declare a variable with blank string. the with the for loop, each time (until 7 times) we console log triangle and add one #.
function drawTriangle() {
    var triangles = '';
        for (var i=1 ; i<7 ; i = i + 1){
            triangles = triangles + '#' 
            console.log(triangles)
        }
        return console.log(triangles+'#');
}

//=============================================== 5

//Using recursion, Write a function that accepts a string and returns the number of vowels in that string.
//Note:Five of the 26 alphabet letters are vowels: A, E, I, O, and U.
//countVowels("four score and seven years") ==> 9;
//countVowels("rbk") ==> 0 

// first we have to use uppercase on the string so all the string will be in capital letter. the we have to check the first letter if it is equal to vowel and each time we slice the first letter.
var count = 0
function countVowels(string){
    var str = string.toUpperCase();
    if (str.length>0) {
         if (((((str[0]==='A') || (str[0]==='E')) || (str[0]==='I')) || (str[0]==='O')) || (str[0]==='U')){
            count = count + 1;
            countVowels(str.slice(1));

         } else countVowels(str.slice(1))
    }
    return count;
}

  //Good Luck :))