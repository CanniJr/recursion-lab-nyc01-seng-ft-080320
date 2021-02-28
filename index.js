// Code your solution here!

function printString(str){
    console.log(str[0]);
    if (str.length > 1){
        let subStr = str.substring(1, str.length);
        printString(subStr)
    }else{
        return true
    }
}
// printString('Macbook Air')

function reverseString(str){
    // let reversedStr = str.split('').reverse().join('')
    if(str === ""){
        return ""
    }else{
        return reverseString(str.substring(1)) + str.charAt(0) 

        // str.substring(1) returns the string starting from str[1] => 'ello'
        // and str.charAt(0) returns the first character of the string => 'h'
        // the conditional sets the loop, and adds the character starting from the last loop to an empty string created in the conditional. => "o" -> "ol" -> "oll" -> "olle" -> "olleh"
    }
}
// reverseString('hello')

function isPalindrome(str){
    let allStr = /[\W_]g/  //=> this removes non-alphanumeric characters
    let lowCaseAll = str.toLowerCase().replace(allStr, '') 
    //=> .replace(allstr, '') replaces unwanted characters into ''.
    let reverseStr = lowCaseAll.split('').reverse().join('')

    return str === reverseStr // checks if str and reverseStr are the same words after being reversed

}
isPalindrome('race car')