//=============================================== 1
//Write a function called percentOf that takes two parameters,
//The function should find out what percentage the first number represents of the second number, 
//and returns the result as a string.
//percentOf(5, 10)  ==>  "5 is 50% of 10"
//percentOf(2, 10)  ==>  "2 is 20% of 10"
// Note: please write one or two lines here describing your solution.

// The function below calculate the percentage that representes a number to another. 
//The input is two numbers, and the output is a string (result of contcatination between numbers and characters )
function percentOf(num1, num2) {
    return num1+" is "+ (num1/num2)*100 + "% of "+num2;
}

//=============================================== 2

//Write a function called pluralize that:
//takes 2 parameters, a noun and a number.
//returns the number with the noun in pluralized form.
//pluralize('cat', 0)  ==>  "0 cats"
//pluralize('cat', 5)  ==>  "5 cats" 
//pluralize('cat', 1)  ==>  "1 cat" 
// Note: please write one or two lines here describing your solution.

//The function below is using an if condition to verify if the number is different from 1 or not.
// When it's different we add the character "s" to the noun otherwise we don't add the "s". The output is a String 
function pluralize(noun, number) {
     if (number !== 1){
         return number+" "+noun+"s";
     }
     else {
         return number+ " "+noun;
     }
}

//=============================================== 3

// write a function called addOne that takes an array of numbers as an input, 
// and returns a new array with all array elements incremented by one as an output
// Note : solve this question using while loop 
// addOne( [1,2,3,4] ) ==> [2,3,4,5]
// addOne( [3,6,9] ) ==> [4,7,10]
 
// Note: please write one or two lines here describing your solution.

//
function addOne(array) {
    var array2=[];
    var i=0;
    while (i<array.length){
        array2[i]=array[i]+1;
        i++;
    }
    return array2
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
    var i=0;
    var triangle='#';
        while (i<=7){
          triangle=console.log(triangle+"# \n");
           
           i++;
        }
        return triangle;
}

//=============================================== 5

//Using recursion, Write a function that accepts a string and returns the number of vowels in that string.
//Note:Five of the 26 alphabet letters are vowels: A, E, I, O, and U.
//countVowels("four score and seven years") ==> 9;
//countVowels("rbk") ==> 0 
function countVowels(string){
    var arrayOfChar=string.split('');
    var arrayOfVowels= ['a','e','i','o','u'];
    var counter=0;
    
    for (var i=0; i<arrayOfChar.length;i++){
        for(var j=0; j<arrayOfVowels.length; j++){
            if (arrayOfVowels[j]===arrayOfChar[i]){
                counter++;
            }
        }
    }
    return counter++;
}

  //Good Luck :))