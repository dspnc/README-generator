// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer')
const generateMarkdown = require('./generateMarkdown.js')

// TODO: Create an array of questions for user input

//Prompt for Title, Description, Installation, Usage, Contributing, and Tests
// +
// License selection from list
// 	add badge at top and notice in License section

// Prompt for GitHub username and email
// 	add to Questions section as links

// Write md file with each section, including Table of Contents with clickable links to each section
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
        message: 'Please describe contribution guidelines for this project: ',
        name: 'license',
        choices: ['MIT', 'GNU GPL v3', 'The Unlicense', 'None']
    },
  ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    fs.writeFile('README.md', , 
    //(err) => err ? console.error(err) : console.log('Success!')
    );
}

// TODO: Create a function to initialize app
function init() {

    inquirer
  .prompt(questions)
  .then((response) =>
    response.confirm === response.password
      ? console.log('Success!')
      : console.log('You forgot your password already?!')
  );
}

// Function call to initialize app
init();
