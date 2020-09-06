const inquirer = require('inquirer')
const fs = require('fs') 
const axios = require('axios')
const generateMarkdown = require('./utils/generateMarkdown.js')
const api = require('./utils/api.js') 

const userAnswers = {}

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
                    var queryUrl = '';
                    return axios.get(queryUrl)
                }

                const queryUrl = () => {
                    var queryUrl = 'https://api.github.com/repos/' + userInput.gitUserName + '/' + userInput.gitRepoName;
                    return axios.get(queryUrl);
                }

                const queryUrlUser = () => {
                    var queryUrlUser = 'https://api.github.com/users/' + userInput.gitUserName;
                    return axios.get(queryUrlUser);
                }

                axios.default([queryUrl(), queryUrlUser()])
                .then(axios.spread(function (queryAnswer, queryUserAnswer){

                    userAnswers.gitUserName = userInput.gitUserName;
                    userAnswers.gitRepoName = userInput.gitRepoName;
                    userAnswers.projectDescription = userInput.projectDescription;
                    userAnswers.instructions = userInput.instructions;
                    userAnswers.use = userInput.use;
                    userAnswers.contributors = userInput.contributors;
                    

                    userAnswers.projCloneUrl = 'https://github.com/' + userInput.gitUserName + '/' + userInput.data.name + '.git';

                    userAnswers.projPullUrl = 'https://github.com/' + userInput.gitUserName + '/' + userInput.data.name + '/compare';

                    const writeToFile = (userAnswers, data) => {
                        
                        fs.writeFile('README_template.md', generateMarkdown(userAnswers, data))

                    };

                    writeToFile(userAnswers);
                }));

            });