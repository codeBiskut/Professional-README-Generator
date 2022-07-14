// assemble packages needed
const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown.js')

// array of questions to ask the user
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
        choices: ['GPL v3', 'GPL v2', 'ISC', 'MIT']
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

// function writes the data from the markdown generator to a new file in the output folder
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data);
}

// function calls inquirer to prompt user for information, then creates the markdown file and writes the data to a new file
function init() {
    // file name for output
    const fileName = './output/README.md'

    // ask the questions
    inquirer
        .prompt(questions)
        .then((data) => {
            // use data from inquirer to create the markdown layout
            const markdownData = generateMarkdown(data);

            // write markdown layout to a new file
            writeToFile(fileName, markdownData);
        })
}

// init function runs on file load
init();
