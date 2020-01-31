//=============================================== 1
//Write a function called percentOf that takes two parameters,
//The function should find out what percentage the first number represents of the second number, 
//and returns the result as a string.
//percentOf(5, 10)  ==>  "5 is 50% of 10"
//percentOf(2, 10)  ==>  "2 is 20% of 10"
// Note: please write one or two lines here describing your solution.
function percentOf(num1, num2) {
    // To compute the percentage of a number x from another number y we just divide x by y and multiply by 100
    return num1 + ' is ' + (num1 / num2) * 100 + '% of ' + num2;
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
    /* I just took the case of nouns that don't end with the letter 's' and took 's' in the plural and I eliminated 
    the wierd cases in english language like woman, women, man, men......
    */
    if (number === 1) {
        return "1 " + noun;
    }
    return number + " " + noun + "s";

}

//=============================================== 3

// write a function called addOne that takes an array of numbers as an input, 
// and returns a new array with all array elements incremented by one as an output
// Note : solve this question using while loop 
// addOne( [1,2,3,4] ) ==> [2,3,4,5]
// addOne( [3,6,9] ) ==> [4,7,10]

// Note: please write one or two lines here describing your solution.
function addOne(array) {
    // 
    var i = 0;
    while (i < array.length) {
        array[i] = array[i] + 1;
        i++
    }
    return array;
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
    // What I understood from the task is the draw the abode triangle not a random one
    var i = 0;//or i=1 and i<=7
    var str = "";

    while (i < 7) {
        str = str + "#"
        console.log(str + "\n")
        i++
    }

}

//=============================================== 5

//Using recursion, Write a function that accepts a string and returns the number of vowels in that string.
//Note:Five of the 26 alphabet letters are vowels: A, E, I, O, and U.
//countVowels("four score and seven years") ==> 9;
//countVowels("rbk") ==> 0 

/*I did this task using the obvious way  but I think there is a better way to do it espacially in the if statement :o */
function countVowels(string) {
    // 
    var x = 0
    var i = 0;
    while (i < string.length) {
        if (string[i] === 'a' || string[i] === 'e' || string[i] === 'i' || string[i] === 'o' || string[i] === 'u' || string[i] === 'A' || string[i] === 'E' || string[i] === 'I' || string[i] === 'O' || string[i] === 'U') {
            x = x + 1;
        }
        else {
            x = x;
        }
        i++
    }
    return x;
}

  //Good Luck :))