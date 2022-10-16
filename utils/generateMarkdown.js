//function returns a license badge based on which license is passed in
// if there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'GPL v2':
      return 'https://img.shields.io/badge/License-GPL_v2-blue.svg';
    case 'GPL v3':
      return 'https://img.shields.io/badge/License-GPLv3-blue.svg';
    case 'ISC':
      return 'https://img.shields.io/badge/License-ISC-blue.svg';
    case 'MIT':
      return 'https://img.shields.io/badge/License-MIT-yellow.svg';
    case '':
      return '';
  }

}

// function returns the license link based on which license is passed in
// if there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'GPL v2':
      return 'https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html';
    case 'GPL v3':
      return 'https://www.gnu.org/licenses/gpl-3.0';
    case 'ISC':
      return 'https://opensource.org/licenses/ISC';
    case 'MIT':
      return 'https://opensource.org/licenses/MIT';
    case '':
      return '';
  }
}

// function returns the license section of README file
// if there is no license, return an empty string
function renderLicenseSection(license) {
  // check if there is a license
  if (license === '') {
    // if no, return empty string
    return ''
  }
  else {
    // if yes, get the license link and the license badge
    let link = renderLicenseLink(license)
    let badge = renderLicenseBadge(license)

    // use the link and badge to create the license section of the readme
    return `
  [![License: ${license}](${badge})](${link})`
  }
}

// function generates readme using user inputs and license functions
function generateMarkdown(data) {
  // grab the license (if there is one) and make the section
  var license = renderLicenseSection(data.license);

  // markdown layout with template literal to enter user data
  return `
  # ${data.title}   

  ## Description
  ---

  ${data.description}   

  ## Table of Contents
  ---

  [Installation](#installation)   
  [Usage](#usage)   
  [Credits](#credits)   
  [License](#license)   
  [How to Contribute](#how-to-contribute)   
  [Tests](#tests)   

  ## Installation
  ---

  ${data.installation}   

  ## Usage
  ---

  ${data.usage}   

  ## Credits
  ---

  -Contributor's GitHub: [${data.github}](github.com/${data.github})   
  -Contributor's Email: <${data.email}>   

  ## License
  ---

  ${license}   

  ## How to Contribute
  ---

  ${data.contribution}   

  [Contributor Covenant](https://www.contributor-covenant.org/)   

  ## Tests
  ---

  ${data.test}   

  `;
}

module.exports = generateMarkdown;
