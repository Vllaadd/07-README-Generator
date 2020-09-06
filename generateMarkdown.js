function generateMarkdown(userAnswers, data){
    return `
${userAnswers, gitRepoName}
${userAnswers.projectDescription}.

${userAnswers.projectInstallation}

${userAnswers.use}

`;
}
module.exports = generateMarkdown;