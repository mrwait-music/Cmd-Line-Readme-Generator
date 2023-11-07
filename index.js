const inquirer = require('inquirer') 

const fs = require('fs')
const {readFile, writeFile} = require('fs').promises

const { generateMarkdown } = require('../utils/generateMarkdown')


// TODO: Create an array of questions for user input
// const questions = [];

let readmeQuestions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'How would you describe your project?'
    },
    {
        type: 'input',
        name: 'contents',
        message: 'Please fill out your table of contents section with this prompt.'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How would you describe the installation process for this project?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How would you use this project?'
    },
    {
        type: 'list',
        name: 'license',
        choices: ['MIT', 'APACHE-2.0', 'GPL-3.0', 'BSD-3', 'None'],
        message: 'Please select one of the following license options to receive a license badge.'
    },
    {
        type: 'input',
        name: 'contributers',
        message: 'Who has contributed to this project?'
    },
    {
        type: 'input',
        name: 'test',
        message: 'How would you test this project?'
    },
    {
        type: 'input',
        name: 'contact1',
        message: 'What is your github username?'
    },
    {
        type: 'input',
        name: 'contact2',
        message: 'What is your email address?'
    },
]

// TODO: Create a function to initialize app
// function init() {}
function init() {
    inquirer.prompt(readmeQuestions)
    .then(res => {
        // console.log(res)
        const template = generateMarkdown(res)
        writeToFile('../utils/README.md', template)
    })
}

    function writeToFile(fileName, data) {
        console.log(fileName, data);
        return writeFile (fileName, data, 'utf-8', (error) => {
            if(error) {
                console.log(error);
            }
    })
}
// Function call to initialize app
// init();

init()



