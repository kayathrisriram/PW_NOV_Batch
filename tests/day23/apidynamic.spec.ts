import {expect,test} from "@playwright/test"

import {faker} from "@faker-js/faker"

 let myid:number
 let tokenno:number

 const fname:string=faker.person.firstName()
    const lname:string=faker.person.lastName()
    const price:number=faker.number.int(5000)
    const todaydate=new Date()
    const future=new Date(todaydate)
    future.setDate(todaydate.getDate()+7)
 
test("POST",async({request})=>{
    
    console.log(fname,lname,price,todaydate,future)

    const res=await request.post("https://restful-booker.herokuapp.com/booking",
        {
            data:
            {
                    "firstname": fname,
                    "lastname": lname,
                    "totalprice":price,
                    "depositpaid": true,
                    "bookingdates": {
                        "checkin": todaydate,
                        "checkout": future
                    },
                    "additionalneeds": "Breakfast"
                },
            headers:
            {
                "Accept":"application/json"
            }
        })

        console.log(await res.json())
        expect(res.status()).toBe(200)
        const resBody=await res.json()
        expect(resBody.booking).toHaveProperty("firstname",fname)
        //expect(resBody.booking.bookingdates).toHaveProperty("checkin",todaydate)
        
       myid=resBody.bookingid
       console.log(`****** created id is ${myid} *******`)

})

// to generate token
test("POST-token",async({request})=>{
    
const res=await request.post("https://restful-booker.herokuapp.com/auth",
        {
            data:
            {
                    "username":"admin",
                    "password":"password123"
                    
                },

            headers:
            {
                "Accept":"application/json"
            }
})
const tokenres=await res.json()
tokenno=tokenres.token
console.log(`token:${tokenno}`)
console.log(tokenres)
})

//put 
test("put",async({request})=>{
    const res=await request.put(`https://restful-booker.herokuapp.com/booking/${myid}`,
        {
                headers:
            {
                "Content-Type":"application/json",
                "Accept":"application/json",
                "Cookie": `token=${tokenno}`
            },
            data:{
                
                    "firstname": fname,
                    "lastname": lname,
                    "totalprice":price,
                    "depositpaid": true,
                    "bookingdates": {
                        "checkin": todaydate,
                        "checkout": future
                    },
                    "additionalneeds": "lunch and dinner"
                
            }
})
const msg=await res.json()
console.log(msg)
})