// TODO: Include packages needed for this application
const inquirer = require("inquirer")
const generateMarkdown = require("./utils/generateMarkdown.js")
const fs = require("fs")

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'Enter your project title (Required)',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Please enter your project title!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Enter your project description (Required)',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('Please enter your project description!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What are the steps to install your project? Provide an explanation',
            
        },
        {
            type: 'input',
            name: 'usage',
            message: 'What are the instructions for using your project? Provide an explanation',
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'What are the guidelines for contributing to your project?',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'List tests for your application and how to run the tests',
        },
        {
            type: 'list',
            name: 'license',
            message: 'Choose your project license',
            choices: ['GNU GPL v3', 'Mozilla Public License 2.0', 'Apache 2.0', 'MIT', 'Creative Commons', 'None']
        },
        {
            type: 'input',
            name: 'username',
            message: 'Enter your Github username (Required)',
            validate: usernameInput => {
                if (usernameInput) {
                    return true;
                } else {
                    console.log('Please enter your Github username!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email address (Required)',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter your email address!');
                    return false;
                }
            }
        }
    ])
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(fileName, data, err => {
            if (err) {
                reject(err)
                return
            }
            resolve({
                ok: true,
                message: "File created!"
            })
        })
    })
}

// TODO: Create a function to initialize app
function init() {
    questions()
    .then(answers => {
        writeToFile("./README.md", generateMarkdown(answers))
    })
}

// Function call to initialize app
init();