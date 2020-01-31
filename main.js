//=============================================== 1
//Write a function called percentOf that takes two parameters,
//The function should find out what percentage the first number represents of the second number, 
//and returns the result as a string.
//percentOf(5, 10)  ==>  "5 is 50% of 10"
//percentOf(2, 10)  ==>  "2 is 20% of 10"
// Note: please write one or two lines here describing your solution.
//i declared the per variable where to store the percentage 
function percentOf(num1, num2) {
    var per=(num1/num2)*100;
    return num1+' is '+per+'% of '+num2
}

//=============================================== 2

//Write a function called pluralize that:
//takes 2 parameters, a noun and a number.
//returns the number with the noun in pluralized form.
//pluralize('cat', 0)  ==>  "0 cats"
//pluralize('cat', 5)  ==>  "5 cats" 
//pluralize('cat', 1)  ==>  "1 cat" 
// Note: please write one or two lines here describing your solution.
// if the number equals to 1 it won't add the s at the end else it will add s so i just make an if statement and an else statement
function pluralize(noun, number){
    var plu='';
    if (number===1){
        plu=number+' '+noun;
        return plu;
    }
    else {
        plu=number+' '+noun+'s';
    return plu;
    }
}

//=============================================== 3

// write a function called addOne that takes an array of numbers as an input, 
// and returns a new array with all array elements incremented by one as an output
// Note : solve this question using while loop 
// addOne( [1,2,3,4] ) ==> [2,3,4,5]
// addOne( [3,6,9] ) ==> [4,7,10]
 
// Note: please write one or two lines here describing your solution.
// i declared a new array initially empty. then i make an i counter that increments from 0 to arr.length-1 and everytime i take the value of arr[i] increment it and add it to the arr2
function addOne(array) {
    var i=0;
    var array2=[];
    while(i<array.legnth){
        array2[i]=array[i]+1;
        i++;
    }
    return array2;
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
// for 7 line in each line i just add a '#' so i used a for loop to go from line to line and i assigned a new value to my str everytime
function drawTriangle() {
        var str='#'
        for (var i=0;i<7;i++){
            console.log(str);
            str=str+'#';
        }
}

//=============================================== 5

//Using recursion, Write a function that accepts a string and returns the number of vowels in that string.
//Note:Five of the 26 alphabet letters are vowels: A, E, I, O, and U.
//countVowels("four score and seven years") ==> 9;
//countVowels("rbk") ==> 0 
function countVowels(string){

}
  //Good Luck :))