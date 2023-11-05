const inquirer = require('inquirer') 

const fs = require('fs')
const {readFile, writeFile} = require('fs').promises

const { generateMarkdown } = require('../utils/generateMarkdown')


fs = {
    promises: {
        writeFile: function (){},
        readFile: function (){}
    }
    
}

// const { log } = require('console')




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

// TODO: Create a function to initialize app
// function init() {}
function init() {
    inquirer.prompt(readmeQuestions)
    .then(res => {
        // console.log(res)
        const template = generateMarkdown(res)
    })
    .then(data => {
        readmeQuestions = data
        return readFile('', 'utf-8')
    })

    // TODO: Create a function to write README file
    // function writeToFile(fileName, data) {}

.then(db =>{
const parsedData = JSON.parse(db);
parsedData.push(readmeQuestions)
return writeFile ('../utils/README', template, 'utf-8', (error) => {
    if(error) {
        console.log(error);
    }

})
})
.then(() => console.log('Nicely Done'))
.catch(err => console.log(err))
}

// Function call to initialize app
// init();

init()




