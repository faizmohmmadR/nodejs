function addition(a,b){
    return a + b;
}
function subtraction(a,b){
    return a - b;
}
function multiplication(a,b){
    return a * b;
}
function division(a,b){
    return a / b;
}


module.exports.addition = addition;


module.exports = {
    add: addition,
    sub: subtraction,
    multi: multiplication,
    devide: division
}

