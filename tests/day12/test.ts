let y:string="chrome"
y="ff"
let israiny=true
let v:number=12345
let fname;
fname="kayathri"
fname=123
console.log(typeof fname)//output -?

function dis_name(fname:string):void
{
    console.log(fname)
}
dis_name("test typescript")
function add(x:number,y:number):number
{
    return x+y;
}
const total=add(5,9)
console.log(total)

//union type annotations
type stringOrNumber= string|number;
let x:stringOrNumber=7
x="hi"

type br="chrome"|"FF"
function browser(brow:br):void
{
    if(brow=="chrome"){
        console.log("execute sanitytest")
    }else{
        console.log("running regression suite")
    }
}
browser("FF")
//union (  | )-OR ,will take any one value from multiple values

//intersection( & )- will combine multiple type into single type
type employe={
    id:number,
    first_name:string
}
type department=
{
    department:string
}

type userdetails=employe & department;
let user:userdetails={
    id:123,
    first_name:"test1",
    department:"QA"
}
console.log(user)



