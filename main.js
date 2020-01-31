//=============================================== 1
//Write a function called percentOf that takes two parameters,
//The function should find out what percentage the first number represents of the second number, 
//and returns the result as a string.
//percentOf(5, 10)  ==>  "5 is 50% of 10"
//percentOf(2, 10)  ==>  "2 is 20% of 10"
// Note: please write one or two lines here describing your solution.
function percentOf(num1, num2) {
   var per=(num1/num2)*100;
   return num1+' is '+ per+'% of '+num2
}
// we just need to calculate the percentage then we will return a string, and first of allwe add var per to contain the result
// ============================================== 2

//Write a function called pluralize that:
//takes 2 parameters, a noun and a number.
//returns the number with the noun in pluralized form.
//pluralize('cat', 0)  ==>  "0 cats"
//pluralize('cat', 5)  ==>  "5 cats" 
//pluralize('cat', 1)  ==>  "1 cat" 
// Note: please write one or two lines here describing your solution.
function pluralize(noun, number) {
     if (number===1){
     	return number+' '+noun;
     }
     return number+' '+noun+'s';
}
// if the number!==1 we will add 's' in the end of noun
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
    while(i<array.length){
    	arr.push(array[i]+1);
    	i=i+1
    }
    return arr;
}
// we create a new array named arr with no element,and we push every time array[i]+1 
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
 var str='#';
 

}

//=============================================== 

//Using recursion, Write a function that accepts a string and returns the number of vowels in that string.
//Note:Five of the 26 alphabet letters are vowels: A, E, I, O, and U.
//countVowels("four score and seven years") ==> 9;
//countVowels("rbk") ==> 0 
function countVowels(string){
for(var c=0,s=0;c<string.length;c=c+1){
	if((string[c]==='a')||(string[c]==='e')||(string[c]==='i')||(string[c]==='o')||(string[c]==='u')){
		s=s+1;
	}
return s;
}
}

  //Good Luck :))