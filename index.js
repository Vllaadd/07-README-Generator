const inquirer = require('inquirer')
const fs = require('fs') 
const axios = require('axios')
const generateMarkdown = require('./generateMarkdown.js')

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
                message: 'What is the project description?'
            },{
                type: 'input',
                name: 'projectTech',
                message: 'Which tech framework were used?'
            },{
                type: 'input',
                name: 'projectInstall',
                message: 'What are the installation instructions?'
            },{
                type: 'input',
                name: 'projectUsage',
                message: 'What is the usage description?'
            },{
                type: 'input',
                name: 'projectContribute',
                message: 'Who are the contributors?'
            }
        ];

        inquirer
            .prompt(gitQuestions)
            .them((userInput) => {
                const queryUrl = () => {
                    var queryUrl = 'https://api.github.com/repos/' + userInput.gitUserName + '/' + userInput.gitRepoName;
                    return axios.get(queryUrl)
                }

                const queryUrlUser = () => {
                    var queryUrlUser = 'https://api.github.com/users/' + userInput.gitUserName;
                    return axios.get(queryUrlUser);
                }

                axios.default([queryUrl(), queryUrlUser()])
                .then(axios.spread((queryAnswer, queryUserAnswer) => {

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