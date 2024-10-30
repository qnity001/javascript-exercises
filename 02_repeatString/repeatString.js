const repeatString = function(str, n) {
    if (n < 0) return "ERROR";
    let ch = "";
    for (let i = 0; i < n; i++) {
        ch += str;
    }
    return ch;
};

// Do not edit below this line
module.exports = repeatString;
