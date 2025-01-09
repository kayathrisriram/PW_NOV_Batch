const { clear } = require("console")

/*
function booktable()
{
    console.log("booking the table")
    setTimeout(()=>{console.log('booking done')
    },3000)
   
}

function orderfood()
{
    console.log("ordering food")
    setTimeout(()=>{console.log('ordering done')
    },2000)
   
}
function bill()
{
    console.log('bill pmt done')
}
booktable()
orderfood()
bill()





//callback 
function booktable(callback)
{
    console.log("booking the table")
    setTimeout(()=>{console.log('booking done')
        callback()
    },3000)
   
}
function orderfood(callback)
{
    console.log("ordering food")
    setTimeout(()=>{console.log('ordering done')
        callback()
    },3000)
   
}
function bill()
{
    console.log('bill pmt')
    setTimeout(()=>{console.log('payment completed') 
    },3000)
}
booktable(function (){
    orderfood(function (){
        bill()
    })
})
*/
//callback hell

function booktable(callback)
{
    console.log("book the table")
    setTimeout(()=>{console.log('booking table')
        callback()
    },3000)
   
}
function orderfood(callback)
{
    console.log("order food")
    setTimeout(()=>{console.log('ordering food')
        callback()
    },3000)
   
}
function bill(callback)
{
    console.log('bill pmt')
    setTimeout(()=>{console.log('paying bills') ;
        callback()
    },3000)
}

function tips(callback)
{
    console.log('TIPS')
    setTimeout(()=>{console.log('giving tips') ;
        callback()
    },3000)
}
function exit(callback)
{
    console.log("exiting")
    callback()
}
booktable( ()=>{
     orderfood( ()=>{
        bill(()=>
        {
            tips(()=>
            {
                exit(()=>{
                    console.log("***completed***")
                })
            })
        })
    })
})


