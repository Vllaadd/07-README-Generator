const inquirer = require('inquirer');
const fs = require('fs'); 
const axios = require('axios');
const generateMarkdown = require('./generateMarkdown.js');

const userAnswers = {};

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
            .then((userInput) => {

                console.log('Done');
                console.log('Github user: ', userInput.gitUserName);

                const queryURL = () => {
                    var queryURL = 'https://api.github.com/repos/' + userInput.gitUserName + '/' + userInput.gitRepoName;
                    return axios.get(queryURL);
                };

                const queryURLUser = () => {
                    var queryURLUser = 'https://api.github.com/users/' + userInput.gitUserName;
                    return axios.get(queryURLUser);
                }

                axios.all([queryURL(), queryURLUser()])
                .then(axios.spread((queryAnswer, queryUserAnswer) => {

                    userAnswers.gitUserName = userInput.gitUserName;
                    userAnswers.gitRepoName = userInput.gitRepoName;
                    userAnswers.projectDescript = userInput.projectDescript;
                    userAnswers.projectTech = userInput.projectTech;
                    userAnswers.projectInstall = userInput.projectInstall;
                    userAnswers.projectUsage = userInput.projectUsage;
                    userAnswers.projectContribute = userInput.projectContribute;
                    

                    userAnswers.projCloneURL = 'https://github.com/' + userInput.gitUserName + '/' + userInput.data.name + '.git';

                    userAnswers.projPullURL = 'https://github.com/' + userInput.gitUserName + '/' + userInput.data.name + '/compare';

                    console.log('userAnswers.gitUserName: ', userAnswers.gitUserName);
                    console.log('userAnswers.gitRepoName: ', userAnswers.gitRepoName);
                    console.log('userAnswers.projCloneURL: ', userAnswers.projCloneURL);
                    console.log('userAnswers.projPullURL: ', userAnswers.projPullURL);


                    const writeToFile = (userAnswers, data) => {
                        
                        fs.writeFile('README_template.md', generateMarkdown(userAnswers, data))

                    };

                    writeToFile(userAnswers);
                }));
    
            });
            