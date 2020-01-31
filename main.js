//=============================================== 1
//Write a function called percentOf that takes two parameters,
//The function should find out what percentage the first number represents of the second number, 
//and returns the result as a string.
//percentOf(5, 10)  ==>  "5 is 50% of 10"
//percentOf(2, 10)  ==>  "2 is 20% of 10"
// Note: please write one or two lines here describing your solution.
function percentOf(num1, num2) {
    // TODO: your code here
    if (num1<=num2){return console.log(num1+' '+'is'+' '+((num1/num2)*100) +'%'+' '+'of'+' '+ num2)}
    return console.log('num2 should be num2>=num1' )
}

//=============================================== 2
//

//Write a function called pluralize that:
//takes 2 parameters, a noun and a number.
//returns the number with the noun in pluralized form.
//pluralize('cat', 0)  ==>  "0 cats"
//pluralize('cat', 5)  ==>  "5 cats" 
//pluralize('cat', 1)  ==>  "1 cat" 
// Note: please write one or two lines here describing your solution.
function pluralize(noun, number) {
     // TODO: your code here
        while (number>=0){
             if(number!==1){return console.log(number+' '+noun+'s')}
            return console.log(number+' '+noun)}
            return(console.log('the number should be greater or equal to 0'))
}

//=============================================== 3

// write a function called addOne that takes an array of numbers as an input, 
// and returns a new array with all array elements incremented by one as an output
// Note : solve this question using while loop 
// addOne( [1,2,3,4] ) ==> [2,3,4,5]
// addOne( [3,6,9] ) ==> [4,7,10]
 
// Note: please write one or two lines here describing your solution.
function addOne(array) { 
    for(i=0;i<array.length;i++){
array[i]=array[i]+1;
    }return array
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
function drawTriangle(x,y) {
   for (var i=0;i=<y;i++){
       return x*(i+1);
   }    
         // TODO: your code here
}

//=============================================== 5

//Using recursion, Write a function that accepts a string and returns the number of vowels in that string.
//Note:Five of the 26 alphabet letters are vowels: A, E, I, O, and U.
//countVowels("four score and seven years") ==> 9;
//countVowels("rbk") ==> 0 
function countVowels(string){
    var vowels=['A','E','I','O','U','a','e','i','o','u'];
    var count=0;
    var i=0;
     var j=0;
    for(i=0;i<string.length;i++){
        if (vowels[i]=string[j]){
        count=count+1;
        j=j+1;}
        i=i+1;
    
    }return count
         // TODO: your code here
}

  //Good Luck :))