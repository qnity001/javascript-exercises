const reverseString = function(str) {
    let rev = "";
    for (let i = str.length - 1; i >= 0; i-- ) {
        let c = str.charAt(i);
        rev += c;
    }
    return rev;
};

// Do not edit below this line
module.exports = reverseString;
