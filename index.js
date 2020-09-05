const inquirer = require('inquirer')
const fs = require('fs') 
const axios = require('axios')
const generateMarkdown = require('./utils/generateMarkdown.js')
const api = require('./utils/api.js') 

const gitInput = {}

        const gitQuestions = [
            {
                type: 'input',
                name: 'gitUserName',
                message: 'What is your GitHub user name?'
            },{
                type: 'input',
                name: 'gitRepoName',
                message: 'What is your repository name?'
            },{
                type: 'input',
                name: 'projectDescript',
                message: 'What ist the project description?'
            },{
                type: 'input',
                name: 'instructions',
                message: 'What are the installation instructions?'
            },{
                type: 'input',
                name: 'use',
                message: 'What is the usage description?'
            },{
                type: 'input',
                name: 'contributors',
                message: 'Who are the contributors?'
            },{
                type: 'input',
                name: 'questions',
                message: 'Do you have any questions?'
            }
        ];

        inquirer
            .prompt(gitQuestions)
            .them((userInput) => {
                const queryUrl = () => {
                    var queryUrl = 
                }
            })