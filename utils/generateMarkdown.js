//function returns a license badge based on which license is passed in
// If there is no license, return an empty string
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

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
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

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === '') {
    return ''
  }
  else {
    let link = renderLicenseLink(license)
    let badge = renderLicenseBadge(license)
    console.log(license, link, badge)
    return `
  [![License: ${license}](${badge})](${link})`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  var license = renderLicenseSection(data.license);

  return `
  # ${data.title}

  ## Description
  ---

  ${data.description}   

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
