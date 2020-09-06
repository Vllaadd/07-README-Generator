function generateMarkdown(userAnswers, data){

    return `

${userAnswers.gitRepoName}

${userAnswers.projectDescript}

---------
## Tech/Framework Used

Project is created with:

${userAnswers.projectTech}

## Installation

${userAnswers.projectInstall}

## Usage

Describe the applications functionality
${userAnswers.projectUsage}

## Contribution

${userAnswers.projectContribute}



`;
}
module.exports = generateMarkdown;