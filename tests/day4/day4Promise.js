
function booktable()
{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        const isbooked=true;
        if(isbooked)
        {
            resolve("bookedtable")
        }else
        {
        reject("no table available")
        }
    },2000)
})   
}
function orderfood()
{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        const isordered=true;
        if(!isordered)
        {
            resolve("ordered food")
        }else
        {
        reject("no food")
        }
    },2000)
})
}
/*
booktable().then((table)=>{
    console.log(table)
    return orderfood()
}).then((ordered)=>
{
    console.log(ordered)
}).catch((error)=>{
    console.log(error)
}
).finally(()=>{
    console.log("*****completed*****")
}
)

*/
//Async and Await 
async function hotelplan(){
    try{
    const booked= await booktable()
    console.log(booked)
    const ordered=await orderfood()
    console.log(ordered)
    }
    catch(error){
        console.log(error)
    }
    finally{
        console.log("completed")
    }
}
hotelplan()
