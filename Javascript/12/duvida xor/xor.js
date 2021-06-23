// Write a function xor that takes two Boolean values. 
//If both values are different, the result should be true.
// If both values are the same, the result should be false.

// I.e.: The calls xor(true, false) and xor(false, true) should return true. 
//The calls xor(true, true) and xor(false, false) should return false.

function xor (n1, n2) {
    let and = n1 && n2;
    let or = n1 || n2;

    if( or == true && and == false ) {
        return true;

    }

    
    return false;
    
}


/*
tabela de verdade  do xor

n1   | n2   | n1 xor n2 |
true |false |  true
false|true  |  true
true |true  |  false
false|false | false

*/

console.log(xor(true,false));
console.log(xor(false,true));
console.log(xor(true,true));
console.log(xor(false,false));