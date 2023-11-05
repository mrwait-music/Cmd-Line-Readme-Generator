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
        name: 'description',
        message: 'How would you describe how to use this project?'
    },
    {
        type: 'list',
        name: 'license',
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




