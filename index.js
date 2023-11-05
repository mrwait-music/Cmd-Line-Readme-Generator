const inquirer = require('inquirer') 

const fs = require('fs')

const [readFile, writeFile] = require('fs').promises

fs = {
    promises: {
        writeFile: function (){},
        readFile: function (){}
    }

}

let readmeQuestions = 
    inquirer.prompt([
    {
        type: 'input',
        name: 'projectAnswer',
        message: 'What is the name of your project?'
    },
    {
        type:,
        name:,
        message: 'How would you describe your project? (Will fill out the description section of the readme file)'
    },
    {
        type:,
        name:,
        message: 'Please fill out your table of contents section with this prompt. (Will fill out the TOC section)'
    },
    {
        type:,
        name:,
        message: 'How would you describe the installation process for this project? (Will fill out the installation section)'
    },
    {
        type:,
        name:,
        message: 'How would you describe how to use this project? (Will fill out the description section)'
    },
    {
        type:,
        name:,
        message: 'Please select one of the following license options to receive a license badge. (Will provide a license badge)'
    },
    {
        type:,
        name:,
        message: 'Who has contributed to this project? (Will fill out the Contributing section)'
    },
    {
        type:,
        name:,
        message: 'How would you test this project? (Will fill out the test section)'
    },
    {
        type:,
        name:,
        message: 'What is your github username? (Will fill out the questions section)'
    },
    {
        type:,
        name:,
        message: 'What is your email address? (Will fill out the questions section)'
    },

])
