//=============================================== 1
//Write a function called percentOf that takes two parameters,
//The function should find out what percentage the first number represents of the second number, 
//and returns the result as a string.
//percentOf(5, 10)  ==>  "5 is 50% of 10"
//percentOf(2, 10)  ==>  "2 is 20% of 10"
// Note: please write one or two lines here describing your solution.
function percentOf(num1, num2) {
    var per=0;
    var resultat="";
    per=(num1*100)/num2);
    resultat=num1+' is '+'per' +'%'+' of '+num2;
    return resultat;}

    // i calculate the percentage of num1 of num2 and put it in a variable called per the n show it in resultat.


//=============================================== 2

//Write a function called pluralize that:
//takes 2 parameters, a noun and a number.
//returns the number with the noun in pluralized form.
//pluralize('cat', 0)  ==>  "0 cats"
//pluralize('cat', 5)  ==>  "5 cats" 
//pluralize('cat', 1)  ==>  "1 cat" 
// Note: please write one or two lines here describing your solution.
function pluralize(noun, number) {
    if number===0{
        return (number +' '+ noun +'s');}
        else if number===1{
            return (number +' '+noun);}
            else return (number +' '+ noun +'s');
        }
    
     // 


//=============================================== 3

// write a function called addOne that takes an array of numbers as an input, 
// and returns a new array with all array elements incremented by one as an output
// Note : solve this question using while loop 
// addOne( [1,2,3,4] ) ==> [2,3,4,5]
// addOne( [3,6,9] ) ==> [4,7,10]
 
// Note: please write one or two lines here describing your solution.
function addOne(array) {
    var arr=[];
    var i=0;
    while(i<=array.length){
        arr[i]===array[i]+1;
        i===i+1;
    }
    return arr;
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
    var i='*';
    var j=0;
    var plus='';
    while (j<7){
        plus===plus+i;
        console.log(plus);
        i===i+1;
    }
     console.log(plus+i);   // TODO: your code here
}

//=============================================== 5

//Using recursion, Write a function that accepts a string and returns the number of vowels in that string.
//Note:Five of the 26 alphabet letters are vowels: A, E, I, O, and U.
//countVowels("four score and seven years") ==> 9;
//countVowels("rbk") ==> 0 
function countVowels(string){
         // TODO: your code here
}

  //Good Luck :))