/*
console.log("Hi ,Welcome to PW Learning");


//Declaring varibles

var a=5.7;
console.log(typeof a);

var s="kayathri";
console.log(typeof s);

var u;
console.log(typeof u);
 var isflag=true
 console.log(typeof isflag)

 var a = "sai"
 console.log(a)

 var a="sathish"
 console.log(a)

 //Y TO USE LET

 let ab="sai";
 console.log(ab);

ab="kayu";
console.log(ab)


//Scope of var and let
let username="sai"//global variable
function userDetails(username)
{
    var userID="123"//functional_variable
    if(username.startsWith('sai'))
    {
        let pwd="xxxx";//blockscoped_variable
        console.log(pwd)
    }else
    {
        console.log("invalid")
    }
   // console.log(pwd)
}
console.log(pwd)
userDetails(username)
*/



//hoisting

//console.log(salary)
//let salary=5000




/*
console.log(salary)
let salary=5000


var str='234';
function test()
{
    console.log(str)
    var str='567';
    console.log(str)
}
test();
function test()
{
    console.log(str)
    var str='567';
    console.log(str)
}



var price=500;
function sampletest()
{
    var price;
    console.log(price);//undefined
    price =200;
    console.log(price);//200
}

console.log(price)//500
sampletest()
*/

let a=5;//number
let b='5';//string
a==b//checks for only value -o/p true
a===b//true
a==b//true
a===b//false