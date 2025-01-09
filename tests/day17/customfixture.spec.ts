//types of fixture
//1. test fixture-requested by test and gets rerun per test

import {test} from '../../Fixtures/customfixture'

test("test1",async({fixture1})=>{
    console.log(`use statement execution : ${fixture1}`)

})
test("test2",async({fixture1})=>{
    console.log(`use statement execution : ${fixture1}`)

})


//2.worker fixture-runs only once per worker

test("test1",async({fixture1,workerfixture})=>{
    console.log(`use statement execution : ${fixture1}`)
    console.log(`use statement execution : ${workerfixture}`)

})
test("test2",async({fixture1})=>{
       console.log(`use statement execution : ${fixture1}`)
    
     })


//can be used with POM and over before/after hooks



