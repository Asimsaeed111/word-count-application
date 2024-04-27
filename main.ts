#! /usr/bin/env node
import inquirer from "inquirer"
const answer = await inquirer.prompt([
    {
        name: "sentance",
        message: "write your sentance for word count:",
        type: "input"
    }
])
const word = answer.sentance.trim().split(" ")
console.log(word)
console.log(`your word count is ${word.length}`)
