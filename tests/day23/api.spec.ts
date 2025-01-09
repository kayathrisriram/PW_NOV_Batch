import {expect,test} from "@playwright/test"

let myid:number

test("GET",async({request})=>{
    const res=await request.get("https://reqres.in/api/users?page=2")
    console.log(await res.json())
    expect(res.status()).toBe(200)
})

test.only("POST",async({request})=>{
    const res=await request.post("https://reqres.in/api/users",
        {
            data:
            {
                "name":"playwright",
                "job":"learning"
            },
            headers:
            {
                "Accept":"application/json"
            }
        })

        console.log(await res.json())
        expect(res.status()).toBe(201)

       let  resid=await res.json()
       myid=resid.id
       console.log(`****** created id is ${myid} *******`)
})

test("PUT",async({request})=>{
    const res=await request.put(`https://reqres.in/api/users/${myid}`,
        {
            data:
            {
                "name":"playwright",
                "job":"learning-cx"
            },
            headers:
            {
                "Accept":"application/json"
            }
        })

        console.log(await res.json())
        expect(res.status()).toBe(200)

})

test("DELETE",async({request})=>{
    const res=await request.delete(`https://reqres.in/api/users/${myid}`)
    expect(res.status()).toBe(204)
    expect(res.statusText()).toContain("No Content")
    })

