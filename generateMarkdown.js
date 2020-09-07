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

### Step 1

* Option 1:🍴 Fork this repo!

* Option 2: 👯 Clone this repo to your local machine using ${responsesAll.projCloneURL}

### Step 2

* HACK AWAY! 🔨🔨🔨

### Step 3

* 🔃 Create a new pull request using ${responsesAll.projPullURL}



`;
}
module.exports = generateMarkdown;