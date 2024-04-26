#!/usr/bin/env/node


// simple BMI calculator:


import inquirer from "inquirer";

const answer=await inquirer.prompt([{
message:"enter your weight",
type:"number",
name:"firstName"
},
{
    message:"enter your height",
    type:"number",
    name:"secondName"   
}
])

let bmi=answer.firstName/(answer.secondName * answer.secondName)
console.log(`your BMI is ${bmi}`);


