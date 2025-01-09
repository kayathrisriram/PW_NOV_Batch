var PerA = /** @class */ (function () {
    function PerA() {
        this.fname = "kayathri";
        this.age = 30;
        this.company_name = "CTS";
    }
    PerA.prototype.display_name = function () {
        console.log("".concat(this.fname, " ,").concat(this.age, ",").concat(this.company_name));
    };
    return PerA;
}());
var obj1 = new PerA();
obj1.display_name();
/*
//  interface em extends PerA
//  {
    
// }

//diff between type and interface
1. syntax type var_name = string |number

interface var_name {
}
2. add property is applicable only to interface thru extends keyword//extensibility
3. class
4.union and intersection (type ),not supported by interface

*/
//Generics - code reusability - logic works for any type , type safety
function getArray(arr) {
    return [arr];
}
var numArray = getArray([1, 2, 3]);
var strArray = getArray(["hi", "hello"]);
console.log(numArray);
console.log(strArray);
numArray.push("kayu");
console.log(numArray);
strArray.push(9);
console.log(strArray);
//
var getArrays = function (arr) {
    return [arr];
};
var numArray1 = getArrays([1, 2, 3, 4, 5]);
var strArray1 = getArrays(["hi", "hello"]);
console.log(numArray1);
console.log(strArray1);
// numArray1.push("kayu")
// strArray1.push(9)
//generics with multiple Type
var printvalues = function (x, y, z) {
    console.log("x:".concat(typeof x, ", y: ").concat(typeof y, " , z : ").concat(typeof z, "  "));
};
printvalues(1, true, "kayathri");
printvalues("kayathri", 1, "sri");
//Type Assertions or type casting -- as keyword 
var a = "learning"; //
//console.log(a.length)
console.log(a.length); // a:string
var b = 5;
//console.log((b as number).length)
