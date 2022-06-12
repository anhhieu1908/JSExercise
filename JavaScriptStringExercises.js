process.stdin.resume();
process.stdin.setEncoding('utf8');
// Your code here!


console.log(`Welcome to my 10 Simple JavaScript String Exercise Set.`);
console.log(`Have Fun!`);
console.log(` `);


// ******************************** Exercise 1 ********************************************************************************************************************************
// Complete the function that receives as input a string, and produces outputs according to the following table:

// Input	                Output
// "Jabroni"	            "Patron Tequila"
// "School Counselor"	    "Anything with Alcohol"
// "Programmer"	            "Hipster Craft Beer"
// "Bike Gang Member"	    "Moonshine"
// "Politician"	            "Your tax dollars"
// "Rapper"	                 "Cristal"
// anything else	         "Beer"
// Note: anything else is the default case: if the input to the function is not any of the values in the table, then the return value should be "Beer".

// Make sure you cover the cases where certain words do not show up with correct capitalization. For example, the input "pOLitiCIaN" should still return "Your tax dollars"

function getDrink(param)
{
    let text;
    switch(param)
    {
        case "Jabroni":
        text = "Patron Tequila";
        break;
        case "School Counselor":
        text = "Anything with Alcohol";
        break;
        case "Programmer":
        text = "Hipster Craft Beer";
        break;
        case "Bike Gang Member":
        text = "Moonshine";
        break;
        case "Politician":
        text = "Your tax dollars";
        break;
        case "Rapper":
        text = "Cristal";
        break;
        default:
        text = "Beer";
    }

    return text;
}

// ******************************** Exercise 2 ********************************************************************************************************************************
// Write a function that returns a sequence (index begins with 1) of all the even characters from a string. If the string is smaller than two characters or longer than 100 characters, the function should return "invalid string".

// For example:

// "abcdefghijklm" --> ["b", "d", "f", "h", "j", "l"]
// "a"             --> "invalid string"

function evenChars(str) 
{
    if(str.length<2 || str.length>100)
    {
        return "invalid string";
    }
      
    let output = [];
    for(let i = 1; i<str.length; i+=2)
    {
      output.push(str[i]);
    }

    return output;
  }

// ******************************** Exercise 3 ********************************************************************************************************************************
// The company you work for has just been awarded a contract to build a payment gateway. In order to help move things along, you have volunteered to create a function that will take a float and return (IN STRING FORMAT) the amount formatting in dollars and cents.
// 39.99 becomes $39.99
// The rest of your team will make sure that the argument is sanitized before being passed to your function although you will need to account for adding trailing zeros if they are missing (though you won't have to worry about a dangling period).
// Examples:
// 3 needs to become $3.00

// 3.1 needs to become $3.10
// Good luck! Your team knows they can count on you!

function formatMoney(amount)
{
    if (amount.toString().indexOf('.') < 0)
    {
      amount = amount + '.00';
    } else if (amount.toString().indexOf('.') === amount.toString().length - 2)
    {
      amount = amount + '0';
    }
    return '$' + amount;
  }

// using toFixed convert number to string retain the number of decimal places
function formatMoney(num){
    return '$' + num.toFixed(2);
}

// ******************************** Exercise 4 ********************************************************************************************************************************
// In this Kata, you will be given two strings a and b and your task will be to return the characters that are not common in the two strings.

// For example:

// solve("xyab","xzca") = "ybzc" 
// --The first string has 'yb' which is not in the second string. 
// --The second string has 'zc' which is not in the first string. 
// Notice also that you return the characters from the first string concatenated with those from the second string.

// More examples in the tests cases.

function solve(a, b)
{
    let result = '';
    for (let i = 0; i < a.length; i += 1) 
    {
      if (!(b.includes(a[i]))) 
      {
        result += a[i];
      }
    }
    for (let i = 0; i < b.length; i += 1) 
    {
      if (!(a.includes(b[i]))) 
      {
        result += b[i];
      }
    }
    
    return result;
}


function solve(str_1, str_2):
    large_str = str_1 + str_2
    diff_str = ''
    for small_String in large_str:
        if small_String in str_1 and small_String in str_2:
            continue
        diff_str += small_String
    return diff_str

// ******************************** Exercise 5 ********************************************************************************************************************************
// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'

function reverseString(str) 
{
    let reverseStr = "";

    for (let character of str) 
    {
        reverseStr = character + reverseStr;
    }

    return reverseStr
}

// ******************************** Exercise 6 ********************************************************************************************************************************
// You receive the name of a city as a string, and you need to return a string that shows how many times each letter shows up in the string by using asterisks (*).

// For example:

// "Chicago"  -->  "c:**,h:*,i:*,a:*,g:*,o:*"
// As you can see, the letter c is shown only once, but with 2 asterisks.

// The return string should include only the letters (not the dashes, spaces, apostrophes, etc). There should be no spaces in the output, and the different letters are separated by a comma (,) as seen in the example above.

// Note that the return string must list the letters in order of their first appearance in the original string.

// More examples:

// "Bangkok"    -->  "b:*,a:*,n:*,g:*,k:**,o:*"
// "Las Vegas"  -->  "l:*,a:**,s:**,v:*,e:*,g:*"
// Have fun! ;)

function getStrings(city) {
    city = city.toLowerCase();
    let obj = {};
    let str = '';

    for (let elem of city) 
    {
        if (!(elem in obj)) 
        {
            obj[elem] = '*';
        } else {
            obj[elem] += '*';
        }
    }

    for (let key in obj) 
    {
        if (key !== ' ') 
        {
            str += key + ':' + obj[key] + ',';
        }
    }

    return str.substring(0, str.length - 1);
}

// ******************************** Exercise 7 ********************************************************************************************************************************
// Complete the solution so that it reverses all of the words within the string passed in.

// Example:

// reverseWords("The greatest victory is that which requires no battle")
// should return "battle no requires which that is victory greatest The"

function reverseString(str) 
{
    let reverseStr = "";

    for (let character of str) 
    {
        reverseStr = character + reverseStr;
    }

    return reverseStr
}

// ******************************** Exercise 8 ********************************************************************************************************************************
// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

const vowels = ["a", "e", "i", "o", "u"]

function countVowel(str) 
{
    let count = 0;
    for (let letter of str.toLowerCase()) 
    {
        if (vowels.includes(letter)) 
        {
            count++;
        }
    }
    return count
}

// ******************************** Exercise 9 ********************************************************************************************************************************
// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

// The function takes a name as its only argument, and returns one of the following strings:

// name + " plays banjo" 
// name + " does not play banjo"
// Names given are always valid strings.

function playBanjo(name) 
{
    if(name[0].toLowerCase() === "r")
    {
        return name +" plays banjo";
    }
    return name + " does not play banjo";
}

// ******************************** Exercise 10 ********************************************************************************************************************************
// Given a string, return true if the first instance of "x" in the string is immediately followed by the string "xx".

// tripleX("abraxxxas") → true
// tripleX("xoxotrololololololoxxx") → false
// tripleX("softX kitty, warm kitty, xxxxx") → true
// tripleX("softx kitty, warm kitty, xxxxx") → false
// Note :

// capital X's do not count as an occurrence of "x".
// if there are no "x"'s then return false

function tripleX(str)
{
    let pos = str.includes("x");
    if (pos) 
    {
      let s = str.search("x");
      if (s >= 0) 
      {
        let subStr1 = str.substr(s, 3);
        if (subStr1 == "xxx")
            return true;
        else
            return false;
      } else 
            return false;
    } else
        return false;
}
