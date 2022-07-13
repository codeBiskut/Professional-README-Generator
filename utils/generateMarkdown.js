// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {


  return `
  # ${data.title}

  ## Description

  ${data.description}

  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [Badges](#badges)
  - [How to Contribute](#contribute)
  - [Tests](#tests)

  ## Installation {#installation}

  ${data.installation}

  ## Usage {#usage}

  ${data.usage}

  ## Credits {#credits}

  ${data.github}  
  ${data.email}

  ## License {#license}

  ${data.license}

  ## Badges {#badges}

  ## How to Contribute {#contribute}

  ${data.contribution}

  [Contributor Covenant](https://www.contributor-covenant.org/)

  ## Tests {#tests}

  ${data.test}

  `;
}

module.exports = generateMarkdown;
