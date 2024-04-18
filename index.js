#! /usr/bin/env node 
import inquirer from "inquirer";
const answers = await inquirer.prompt({
    name: "sentence",
    type: "input",
    message: "Enter any Sentence to count word",
});
const wordCount = answers.sentence.trim().split(" ");
console.log(`Your Sentence Total Words are ${wordCount.length}`);
