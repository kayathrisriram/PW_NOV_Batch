import {expect,test} from "@playwright/test"
import * as staticjson from "../../TestData/apijsonboday.json"
test("POST",async({request})=>{
    const res=await request.post("https://restful-booker.herokuapp.com/booking",
        {
            data:
            {
               
                    "firstname": "PW",
                    "lastname": "LEARNER",
                    "totalprice": 111,
                    "depositpaid": true,
                    "bookingdates": {
                        "checkin": "2018-01-01",
                        "checkout": "2019-01-01"
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
        expect(res.ok()).toBeTruthy()
      
})

test("POST using static json",async({request})=>{
    const res=await request.post("https://restful-booker.herokuapp.com/booking",
        {
            data:staticjson,
            headers:
            {
                "Accept":"application/json"
            }
        })

        console.log(await res.json())
        const respBody=await res.json()
        expect(res.status()).toBe(200)
        expect(res.ok()).toBeTruthy()
        //validate json response
        expect(respBody.booking).toHaveProperty("firstname","static")
        expect(respBody.booking.bookingdates).toHaveProperty("checkin","2013-02-23")
      
})

