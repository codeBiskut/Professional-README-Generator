// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'Project title:',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Provide a short description explaining the what, why, and how of your project:',
        name: 'description'
    },
    {
        type: 'input',
        message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running:',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'Provide instructions for use:',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'Contribution guidelines (other than default Contributor Covenant):',
        name: 'contribution'
    },
    {
        type: 'input',
        message: 'Provide instructions on how to run tests for application:',
        name: 'test'
    },
    {
        type: 'list',
        message: 'Choose a license:',
        name: 'license',
        choices: ['Apache 2.0', 'GNU GPLv3', 'GNU GPLv2', 'ISC', 'MIT']
    },
    {
        type: 'input',
        message: 'Enter your GitHub username for credits:',
        name: 'github'
    },
    {
        type: 'input',
        message: 'Enter your email address for credits:',
        name: 'email'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data);
}

// TODO: Create a function to initialize app
function init() { 
    const fileName = './output/README.md'

    inquirer
        .prompt(questions)
        .then((data) => {
            const markdownData = generateMarkdown(data);
            writeToFile(fileName, markdownData);
        })
    }
// Function call to initialize app
init();
