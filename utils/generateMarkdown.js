const generateMarkdown = data => {
    return `<a href="${data.link}" style="float:rigth"><img src="${data.avatar}" alt="${data.name}" title="${data.name}" width="120" height="120"></a>
    # ${data.title.toUpperCase()}
    ![License: ${(data.lic) ? data.lic : 'None'}](https://img.shields.io/badge/License-${(data.lic) ? data.lic : 'None'}-brightgreen)
    
    _Repo by ${data.name}_
    _${data.desc}_
    ___
    __Installation:___
    ${data.inst}
    
    ___Usage:___
    ${data.use}
    
    ___Contributors:___
    ${data.con}
    
    ___Tests:___
    ${data.test}
    
    ___Questions:___
    ${data.qs}
    `
}
module.exports = generateMarkdown