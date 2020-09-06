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
            .them((userAnswers) => {
                const queryUrl = () => {
                    var queryUrl = '';
                    return axios.get(queryUrl)
                }

                const queryURLUser = () => {
                    var queryURLUser = ''
                    return axios.get(queryURLUser);
                }

                axios.default([queryUrl(), queryURLUser()])
                .then(axios.spread(function (queryResponse, queryResponseUser){

                    userAnswers.gitUserName = questionResponse.gitUserName;

                    userAnswers.gitRepoName = questionResponse.gitRepoName;
                    userAnswers.projectDescription = questionResponse.projectDescription;
                    userAnswers.instructions = questionResponse.instructions;
                    userAnswers.use = questionResponse.use;
                    userAnswers.contributors = questionResponse.contributors;
                    

                    userAnswers.projCloneUrl = ''

                    userAnswers.projPullUrl = '';

                    const writeToFile = (userAnswers, data) => {
                        
                        fs.writeFile('README_template.md', generateMarkdown(userAnswers, data))

                    };

                    writeToFile(userAnswers);
                }));

            });