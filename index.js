// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer')
const md = require('./generateMarkdown.js')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of the project? ',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Please provide a description of the project: ',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Please provide installation instructions: ',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Please provide usage information for the project: ',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Please describe contribution guidelines for this project: ',
        name: 'contributing',
    },
    {
        type: 'input',
        message: 'Please provide instructions for testing: ',
        name: 'tests',
    },
    {
        type: 'list',
        message: 'Please choose a license for the project: ',
        name: 'license',
        choices: ['MIT', 'GNU GPL v3', 'Unlicense', 'None']
    },
    {
        type: 'input',
        message: 'Please provide your Github username: ',
        name: 'username',
    },
    {
        type: 'input',
        message: 'Please provide your email address: ',
        name: 'email',
    },
  ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, md.generateMarkdown(data), 
    (err) => err ? console.error(err) : console.log('Success!')
    );
}

// TODO: Create a function to initialize app
function init() {

    inquirer
    .prompt(questions)
    .then((response) =>
        writeToFile('README-result.md', response)
    )
}

// Function call to initialize app
init();
