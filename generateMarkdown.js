// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch(license) {
    case 'MIT':
        return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
    case 'GNU GPL v3':
        return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
    case 'Unlicense':
        return `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`
    default: 
        return '';
  }
}

function renderLicenseLink(license){
  if (license == 'None') {
    return ''
  } else return `6. [License](#license)`
}

function renderLicenseSection(license){
  if (license == 'None') {
    return ''
  } else return `## License
  Created under the ${license} license`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description ${renderLicenseBadge(data.license)}
  ${data.description}

  ## Table of Contents
1. [Installation](#installation)
2. [Usage](#usage)
3. [Contributing](#contributing)
4. [Testing](#tests)
5. [Questions](#questions)
${renderLicenseLink(data.license)}


## Installation
${data.installation}


## Usage
${data.usage}


## Contributing
${data.contributing}


## Testing
${data.tests}


## Questions
View my GitHub profile [here](https://github.com/${data.username})  

To reach out directly, please email me at ${data.email}

${renderLicenseSection(data.license)}

`;
}

module.exports = {generateMarkdown, renderLicenseBadge }
