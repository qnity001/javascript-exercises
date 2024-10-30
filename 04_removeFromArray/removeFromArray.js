const removeFromArray = function() {
    let arr = arguments[0];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 1; j < arguments.length; j++) {
            let n = arr.indexOf(arguments[j]);
            if (n != -1) {
                arr.splice(n, 1);
            }
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
