import { FullConfig, FullResult, Reporter, Suite, TestCase, TestResult, TestStep } from "playwright/types/testReporter";
import * as fs from 'fs'

class MyReporter implements Reporter
{
   onStepBegin(test: TestCase, result: TestResult, step: TestStep): void {
       //logic here
   }
    onBegin(config: FullConfig, suite: Suite): void {
        console.log(`Execution of ${suite.allTests().length} testcase`)
    }
  
    onTestBegin(test: TestCase, result: TestResult): void {
        console.log( `executing ${test.title}`)
    }
    onTestEnd(test: TestCase, result: TestResult): void {
        const timetaken=result.duration;
        const data={
            test:test.title,
            executiontime:timetaken,
            status:result.status,
            errors:result.errors,
        }
        const datatostr=JSON.stringify(data,null,2)
        console.log(datatostr)
        fs.writeFileSync("customreport.json",datatostr)
    }
    onEnd(result: FullResult): Promise<{ status?: FullResult["status"]; } | undefined | void> | void {
        console.log(`execution status ${result.status}`)
    }
}
export default MyReporter