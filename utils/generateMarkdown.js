// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if(license === 'GNU GPL v3') {
        return '(https://img.shields.io/badge/License-GPLv3-blue.svg)'
    }
    if(license === 'Mozilla Public License 2.0') {
        return '(https://img.shields.io/badge/License-MPL%202.0-orange.svg)'
    }
    if(license === 'Apache 2.0') {
        return '(https://img.shields.io/badge/License-Apache%202.0-green.svg)'
    }
    if(license === 'MIT') {
        return '(https://img.shields.io/badge/License-MIT-brightgreen.svg)'
    }
    if(license === 'Creative Commons') {
        return '(https://img.shields.io/badge/License-CC0%201.0-lightgrey.svg)'
    } 
    return ""
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if(license === 'GNU GPL v3') {
        return 'https://www.gnu.org/licenses/gpl-3.0'
    }
    if(license === 'Mozilla Public License 2.0') {
        return 'https://opensource.org/licenses/MPL-2.0'
    }
    if(license === 'Apache 2.0') {
        return 'https://opensource.org/licenses/Apache-2.0'
    }
    if(license === 'MIT') {
        return 'https://opensource.org/licenses/MIT'
    }
    if(license === 'Creative Commons') {
        return 'https://creativecommons.org/publicdomain/zero/1.0/'
    } 
    return ""
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (!license) {
        return ""
    }

    return ` ## License
    ${renderLicenseBadge(license)}
    ${renderLicenseLink(license)}`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    const licenseSection = renderLicenseSection(data.license)
  return `
# ${data.title}
## Description
${data.description}
## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Contact](#contact)
## Installation
${data.installation}
## Usage
${data.usage}
${licenseSection}
## Contributing
${data.contributing}
## Tests
${data.tests}
## Contact
GitHub: https://github.com/${data.username} or Email: ${data.email}
    `;
}

module.exports = generateMarkdown;