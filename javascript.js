console.log("This needs to be printed in the console");

function multipleByTwo (number) { return number*2;
}

var num = 5;
var numberMultipled = multipleByTwo(num);
console.log(num + " Multiple by two " + numberMultipled);

//Building functions within code execution rather than at program load time
var difference = function diffOfNumbers (number1, number2) { return number1 - number2;
};

console.log("Difference of two number 6 and 5 is " + difference(6,5));

//Anonymous Fuction
var diff = function (number1, number2) { return number1 - number2;
};

console.log("Difference of two number 8 and 6 is " + diff(8,6));