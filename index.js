const inquirer = require('inquirer') 

const fs = require('fs')
const { log } = require('console')

const [readFile, writeFile] = require('fs').promises

fs = {
    promises: {
        writeFile: function (){},
        readFile: function (){}
    }

}

let readmeQuestions = [
    {
        type: 'input',
        name: 'projectAnswer',
        message: 'What is the name of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'How would you describe your project? (Will fill out the description section of the readme file)'
    },
    {
        type: 'input',
        name: 'contents',
        message: 'Please fill out your table of contents section with this prompt. (Will fill out the TOC section)'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How would you describe the installation process for this project? (Will fill out the installation section)'
    },
    {
        type: 'input',
        name: 'description',
        message: 'How would you describe how to use this project? (Will fill out the description section)'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please select one of the following license options to receive a license badge. (Will provide a license badge)'
    },
    {
        type: 'input',
        name: 'contributers',
        message: 'Who has contributed to this project? (Will fill out the Contributing section)'
    },
    {
        type: 'input',
        name: 'test',
        message: 'How would you test this project? (Will fill out the test section)'
    },
    {
        type: 'input',
        name: 'contact1',
        message: 'What is your github username? (Will fill out the questions section)'
    },
    {
        type: 'input',
        name: 'contact2',
        message: 'What is your email address? (Will fill out the questions section)'
    },
]
inquirer.prompt(readmeQuestions)
.then(res => {
    console.log(res);
})