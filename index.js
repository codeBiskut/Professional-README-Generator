// TODO: Include packages needed for this application
const inquirer = require('inquirer')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'Project title?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Project description?',
        name: 'description'
    },
    {
        type: 'input',
        message: 'Installation instructions?',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'Usage information?',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'Contribution guidelines?',
        name: 'contribution'
    },
    {
        type: 'input',
        message: 'Test instructions?',
        name: 'test'
    },
    {
        type: 'list',
        message: 'License?',
        name: 'license',
        choices: ['Apache 2.0', 'GNU GPLv3', 'GNU GPLv2', 'ISC', 'MIT']
    },
    {
        type: 'input',
        message: 'GitHub username?',
        name: 'github'
    },
    {
        type: 'input',
        message: 'Email address?',
        name: 'email'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    inquirer
        .prompt(questions)
        .then
}

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
