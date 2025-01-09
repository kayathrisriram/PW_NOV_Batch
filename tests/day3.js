
// function declaration
/*
function add(x,y)
{
    let sum=x+y;
   return sum;
}
console.log("total: " + add(2,3))


//function expression - named

let total=function add(x,y)
{
    let sum=x+y;
   return sum;
}
console.log(total(3,4))

//anonymous function expression -unnamed

let totals=function (x,y)
{
    let sum=x+y;
   return sum;
}
console.log(totals(3,4))

//nested functions
function outer()
{
    let outervariable="outervariable";
    function inner()
    {
        let innervariable ="innervariable";
        console.log(outervariable)//
        console.log(innervariable)
    }
    inner()
    console.log(outervariable)
    //console.log(innervariable)
}
outer()



//Arrow functions
let sum= ()=> {console.log("anonymous function") }
sum()

//Arrow function with arguments
let addition = (x,y)=> x+y;
let result=addition(10,90)
console.log("Result:" + result)


//Arrays
let fruits=['apple','banana','custard apple','dragon fruit','mango']//literal method of declaring array
// array declarion using constructor
 //let fruits= new Array('apple','banana','custard apple','dragon fruit','mango')
console.log(Array.isArray(fruits))
console.log(typeof fruits)
console.log(fruits.length)
console.log(fruits[2])//custard apple
console.log(fruits[fruits.length-1])
fruits.push('kiwi')//to insert element at the end of the array
console.log(fruits)
fruits.unshift('APPLE')// to insert element at the start
console.log(fruits)
fruits.pop()//to delete element at the end
console.log(fruits)
fruits.shift()//to remove the element at the start
console.log(fruits)
console.log(fruits.sort())//to sort in alphabetical order
console.log(fruits.reverse())

const isAvailable=fruits.includes("kiwi")//boolean
console.log(isAvailable)//false
 let numbers=[10,20,30,40]
 //let newArray=fruits.concat(numbers)
let newArray=[...fruits,...numbers]//concat using spread syntax
 console.log(newArray)
 console.log(typeof newArray)
 
 const join =numbers.join(' -- ')
 console.log(join)
 console.log(typeof join)

*/
/*
 //string
 let welcome="hello learners"
 console.log(typeof welcome)//string
 const message=new String('welcome to pw learning')
 console.log( typeof message)//object
 const upper=welcome.toUpperCase();//wont change the value of the original string
 console.log(upper)
 const val=message.split(" ")
 console.log(val)
 console.log(val.length)
 const ispresent= welcome.endsWith("hello")//same with startWith,includes
 console.log(ispresent)//boolean //true //false

 //trim -removes extra space
 let msg=" hi hello welcome   "
 console.log(msg)
 console.log(msg.trim())
 console.log(msg)
 
 //difference between slice and subString
    //    012345678910
 let str=" hi hello goodmorning"
 //       12345678910
 let slicestring=str.slice(5,9)
 console.log(slicestring)//ello
 let substring=str.substring(5,9)
 console.log(substring)

 
  let slicestrings=str.slice(-2) // counts from the last 
 console.log(slicestring)
 let substrings=str.substring(-2)//treats as 0 ,from the start
 console.log(substring)
 

*/

 //Array spcific functions
// splice in array splice(index,deletecount,item to be added/replaced)
/*
let veg=["carrot","beans","beetroot","chilli"]
veg.splice(3,0,"onion")// it modifies the original array to add-0
console.log(veg)
veg.splice(1,1)//delete element at the given index 
veg.splice(1)//delete all the item in the array form the given index
console.log(veg)


//For each
const arr=[10,20,30]
arr.forEach((a)=>{ return a*a })
console.log(arr)
*/
//Objects
//using constructor
const obj=new Object();
//using literals-recommended
const obj1={
    name:"kayathri",
    lname:"sriram",
    age:29,
    job:"tester",
    working : true,
  fullname()
    {
     console.log(this.name + this.lname)
    }
}

//to access objectprop
obj1.fullname()
console.log(obj1.name)//dot
console.log(obj1["age"])//brace\klet

//add property to object
obj1.city="chennai";
console.log(obj1)
//modifying
obj1.age=26;
//deleting prop
delete obj1.city
console.log(obj1)
// prop exist in the object
console.log('city' in obj1)//boolean
//merge using spread operator
const obj2={
    address:"chennai",
    state :"TN"
}
console.log({...obj1,...obj2})//spread syntax








