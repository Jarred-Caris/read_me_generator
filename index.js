// Created Dependencies
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown");
const writeFileAsync = util.promisify(fs.writeFile);
const fileName = "README.md";

// Question Array
const questions =  [
  {
    type: "input",
    name: "title",
    message: "What would you like to call this Project? ",
  },
  {
    type: "input",
    name: "description",
    message: "Please provide a summary for what you wanted to acheive!",
  },
  {
    type: "input",
    name: "installation",
    message: "Please provide technologies used project!",
  },
  {
    type: "input",
    name: "technology",
    message: "Please provide instructions need to install the project!",
  },
  {
    type: "input",
    name: "usage",
    message: "Please provide any usage related information!",
  },
  {
    type: "input",
    name: "contribution",
    message:
      "Provide any information regarding contributors and you part in the projects creation!",
  },
  {
    type: "input",
    name: "test",
    message: "Provide any testing information!",
  },
  {
    type: "list",
    name: "license",
    message: "Which license do you use?",
    choices: [
      "Apache",
      "BSD3",
      "BSD2",
      "GPL",
      "MIT",
      "Mozilla",
      "Common",
      "Eclipse",
      "None",
    ],
  },
  {
    type: "input",
    name: "github",
    message: "What is your github username?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
  },
];


// Function to create Read me
function generateReadMe(fileName, data) {
    fs.writeFile(fileName, data, function(err) {
        if (err){
            return console.log(err)
        }
        else {
            console.log("Input succesful")
        }
    }
    )};

// Function to initialise app
function init() {
  inquirer.prompt(questions)
    .then((data) => generateReadMe(`${fileName}.md`, generateMarkdown(data)))
    .then(() => console.log(" README.mde created successfully"))
    .catch((err) => console.error(err));
}

// Function call to initialize app
init();
