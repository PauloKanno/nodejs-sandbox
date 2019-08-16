module.exports.addition = (val1, val2) => {
    return val1 + val2;
}

module.exports.subtraction = (val1, val2) => {
    return val1 - val2;
}

module.exports.multiply = (val1, val2) => {
    return val1 * val2;
}

module.exports.division = (val1, val2) => {
    if(val2 == 0) throw new TypeError('Illegal operation. Division by zero');
    else return val1 / val2;
}