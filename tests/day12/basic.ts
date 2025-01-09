let first_name:string="kayathri"
console.log(first_name)



let number=123;
let isboolean=true
let val;
val="hi";
val=123;
console.log(typeof val)

function dis_name():void{
    console.log(first_name)
}
dis_name()

let fruits:string[]=["apple","mango","papaya"]
//Annotations -Union
type stringOrNumber=string|number;
let value:stringOrNumber="typescript"
value=456
type supportedBrowser="chrome"|"FF"
function invokebrowser(brname:supportedBrowser){
    if(brname==="chrome"){
        console.log("execute login test")
    }else{
        console.log("execute sanity test")
    }
}
invokebrowser("chrome")
invokebrowser("FF")
//intersection
type Employee={
    id:number,
    name:string
}
type department={
    department:string
}
type Team=Employee & department

let team:Team={
id:123,
name:"kayathri",
department:"QA"
}
console.log(team)