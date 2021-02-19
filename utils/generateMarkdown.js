
function renderLicenseBadge(license) {
  return `![license badge](https://img.shields.io/badge/<License>-${license}-<COLOR>)`

}


function renderLicenseLink(license) {
  return (
    `- [License](#license🔐)`
)
}


function renderLicenseSection(license) {
  return  (
    `## License🔐
    This project is licensed under ${license}.`
)
}




// generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  ${data.description}

  * [Installation](#installation)
  * [Technology](#technology)
  * [Usage](#usage)
  * [Contribution](#contribution)
  * [Test](#test)
  * [License](#license)
  * [Questions](#questions)
  

## Installation
${data.installation}

## Technology
${data.technology}

## Usage
${data.usage}

## Contribution
${data.contribution}

## Test
${data.test}

## License ![license badge](https://img.shields.io/badge/License-${data.license}-<COLOR>)




## Questions
If you have fursther questions, you can reach me at
[Github](https://github.com/${data.github})
or
${data.email}
`;
}

module.exports = generateMarkdown;
