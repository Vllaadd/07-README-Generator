const prompt = require('inquirer').createPromptModule() //inquirer should ease the process of providing error feedback, asking questions, parsing input, validating answers, managing hierarchical prompts.
const fs = require('fs') //file system is a mechanism that controls how data is stored, accessed, and managed. Using fs module, we can perform read, write, delete and many more operations.

const api = require('./utils/api.js') //this line is only because we decided to put api in a separate file 
const generateMarkdown = require('./utils/generateMarkdown.js')


const writeToFile = (fileName, data) => {
    fs.writeFile(fileName + '.md', data, error => error ? console.error(error) : console.log(`${fileName + '.md'} generated!`))
}

const init = async _ => { //this is the main function 
    let rmObject = {}
    do {
        const { rmUser, rmRepo } = await prompt([
            {
                type: 'input',
                name: 'rmUser',
                message: 'What is your GitHub user name?'
            },
            {
                type: 'input',
                name: 'rmRepo',
                message: 'What is your repository name?'
            }
        ])
        rmObject = await api.getUser(rmUser, rmRepo)
        if(!rmObject){
            console.error('Repo not found!')
        }else{
            console.log(`${rmObject.fullName} found!`)
        }
    }while (!rmObject)
    Object.assign(rmObject, await prompt([
        {
            type: 'input',
            name: 'inst',
            message: 'What are the installation instructions?'
        },
        {
            type: 'input',
            name: 'use',
            message: 'What is the usage description?'
        },
        {
            type: 'input',
            name: 'con',
            message: 'Who are the contributors?'
        },
        {
            type: 'input',
            name: 'qs',
            message: 'Any questions?'
        }
    ]))
    writeToFile(rmObject.title, await generateMarkdown(rmObject))
}

init()