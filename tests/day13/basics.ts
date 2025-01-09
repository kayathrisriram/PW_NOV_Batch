/*
//syntax

let fruits:string[] =["apple","banana",'mango']
//fruits.push(true)
console.log(fruits)
const names:readonly string[] = ["Dylan"]
//names.pop("Dylan")
//names.push("Jack");

//Tuple- typed array
let ourTuple:[number, boolean, string]=[5,true,"kayathri"]
//ourTuple = [false, 'Coding God was mistaken', 5];
ourTuple.push("pushing element")
ourTuple.push(100)
ourTuple.push(false)
console.log(ourTuple)

//Enum -group of constants
//number enums
enum Direction
{
    East=2,
    South,
    North,
    West
}

console.log(Direction.South)
//string enums
enum Direction1{
    East="EAST",
    South="SOUTH",
    North="NORTH",
    West="WEST"
}

function direct(dir:Direction1){
    console.log(`direction is ${dir}`)
}
direct(Direction1.South)

//class,constructor and objects
class employee
{
 protected emp_name:string
    constructor(fname)
    {
        this.emp_name=fname;
    }
    displayname()
    {
        console.log(`${this.emp_name}`)
    }
}
let emp1=new employee("kayathri")
console.log(emp1.emp_name)
emp1.displayname()

//Inheritance and access modifiers

class Manager extends employee
{
    emp_department:string;
    constructor(name){
        super(name)//calls your parent class constructor
    }
    greet(msg:string):void{
      console.log(`${ msg} from ${this.emp_name}`)
    }
}

let mgr:Manager=new Manager("sri")
mgr.greet("Hi")

//Access modifier-public ,private and public
//public- can be used anywhere
//private- within the class
//protected- within the class and its derived class
//readonly - wont allow to change the assigned value

*/
//Interface
interface Person {
    fname:string,
    age:number
}

interface Company extends Person{
    company_name:string,
    display_name():void;
}
 class PerA implements Company{
    fname="kayathri"
    age=30
    company_name="CTS"
    display_name(){
        console.log(`${this.fname} ,${this.age},${this.company_name}`)
    }
}
let obj1:Company=new PerA()
obj1.display_name()
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


function getArray(arr:any[]):any[]{
    return [arr]
}
let numArray=getArray([1,2,3])
let strArray=getArray(["hi","hello"])

console.log(numArray)
console.log(strArray)
numArray.push("kayu")
console.log(numArray)
strArray.push(9)
console.log(strArray)

//

let getArrays = <T>(arr:T[])=>{

      return [arr]
}
let numArray1=getArrays<number>([1,2,3,4,5])
let strArray1=getArrays<string>(["hi","hello"])
console.log(numArray1)
console.log(strArray1)

// numArray1.push("kayu")
// strArray1.push(9)

//generics with multiple Type
let printvalues=<X,Y>(x:X,y:Y,z:string)=>{
 console.log(`x:${typeof x}, y: ${typeof y} , z : ${typeof z}  `)
}
printvalues(1,true,"kayathri")
printvalues("kayathri",1,"sri")

//Type Assertions or type casting -- as keyword 

let a:unknown="learning"//
//console.log(a.length)
console.log((a as string).length)// a:string

// let b:unknown=5
// console.log((b as number).length)
