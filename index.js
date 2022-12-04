#!/usr/bin/env node
import inquirer from "inquirer";
import chalkAnimation from "chalk-animation";
const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 2000);
    });
};
async function welcome() {
    let rainbowTitle = chalkAnimation.rainbow('Ya Allah Madad Farma');
    await sleep();
    rainbowTitle.stop();
    console.log(`
    _____________________
   |  _________________  |
   | | JO           0. | |
   | |_________________| |
   |  ___ ___ ___   ___  |
   | | 7 | 8 | 9 | | + | |
   | |___|___|___| |___| |
   | | 4 | 5 | 6 | | - | |
   | |___|___|___| |___| |
   | | 1 | 2 | 3 | | x | |
   | |___|___|___| |___| |
   | | . | 0 | = | | / | |
   | |___|___|___| |___| |
   |_____________________|`);
}
welcome();
async function askQuestion() {
    inquirer
        .prompt([
        /* Pass your questions in here */
        {
            type: "list",
            name: "operator",
            message: "which operation you want to perform? \n",
            choices: ["Addition", "Subtraction", "Multipication", "Division"]
        },
        {
            type: "number",
            name: "Num1",
            message: "Enter Number 1"
        },
        {
            type: "number",
            name: "Num2",
            message: "Enter Number 2"
        },
    ])
        .then((answers) => {
        // Use user feedback for... whatever!!
        if (answers.operator == "Addition") {
            console.log(`${answers.Num1}  + ${answers.Num2} =${answers.Num1 + answers.Num2}`);
        }
        else if (answers.operator == "Subtraction") {
            console.log(`${answers.Num1}  - ${answers.Num2} =${answers.Num1 - answers.Num2}`);
        }
        else if (answers.operator == "Multipication") {
            console.log(`${answers.Num1}  * ${answers.Num2} =${answers.Num1 * answers.Num2}`);
        }
        else if (answers.operator == "Division") {
            console.log(`${answers.Num1}  / ${answers.Num2} =${answers.Num1 / answers.Num2}`);
        }
    });
}
askQuestion();
