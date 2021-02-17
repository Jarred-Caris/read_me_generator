// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `![license badge](https://img.shields.io/badge/<License>-${license}-<COLOR>)`

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return (
    `- [License](#license🔐)`
)
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return  (
    `## License🔐
    This project is licensed under ${license}.`
)
}




// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description

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
${data.license}



## Questions
${data.github}
${data.email}
`;
}

module.exports = generateMarkdown;
