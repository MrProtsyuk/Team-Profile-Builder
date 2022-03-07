const inquirer = require('inquirer');
const { writeFile, copyFile } = require('../utils/generate-site');
const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');
const generatePage = require('../src/page-template');

function Questions() {
    this.manager;
    this.intern;
    this.engineer;
}

Questions.prototype.initializeQuestions = function() {
    inquirer
    .prompt([{
        type: 'text',
        name: 'name',
        message: 'What is the name of your manager? (Required)',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please Enter a Valid Response')
                return false;
            }
        }
    },
    {
        type: 'text',
        name: 'id',
        message: 'What is your Id?',
    },
    {
        type: 'text',
        name: 'email',
        message: 'What is your email?',
    },
    {
        type: 'text',
        name: 'officeNumber',
        message: 'What is your office number?'
    }
])
    .then(({ name, id, email, officeNumber }) => {
        //destructure name from the propmt
        this.manager = new Manager(name, id, email, officeNumber);
        // call to start employee prompt
        this.startEmployeePrompt();
    });
};

Questions.prototype.startEmployeePrompt = function() {
    inquirer
    .prompt({
        type: 'list',
        message: 'What role would you like to fill out next?',
        name: 'action',
        choices: ['Engineer', 'Intern', 'Finish Building my team']
    })
    .then(({ action }) => {
        if (action === 'Engineer') {
            inquirer
            .prompt([
                {
                type: 'text',
                name: 'name',
                message: 'What is your Engineers name?',  
             },
             {
                type: 'text',
                name: 'id',
                message: 'What is the id of your engineer?',
             },
             {
                 type: 'text',
                 name: 'email',
                 message: 'What is your engineers email?',
             },
             {
                type: 'text',
                name: 'github',
                message: 'Please Enter their GitHub username'
             },
            ])
            .then(({ name, id, email, gitHub }) => {
                //destructure name from the propmt
                this.engineer = new Engineer(name, id, email, gitHub);
                this.startEmployeePrompt();
            })
        } if (action === 'Intern') {
            inquirer
            .prompt([
                {
                type: 'text',
                name: 'name',
                message: 'What is your Interns name?',  
             },
             {
                type: 'text',
                name: 'id',
                message: 'What is the id of your Intern?',
             },
             {
                 type: 'text',
                 name: 'email',
                 message: 'What is your interns email?',
             },
             {
                type: 'text',
                name: 'github',
                message: 'Please Enter their place of education'
             },
            ])
            .then(({ name, id, email, school }) => {
                //destructure name from the propmt
                this.intern = new Intern(name, id, email, school);
                this.startEmployeePrompt();
        })
    } 
    })
}

Questions()
.then(employeeData => {
    return generatePage(employeeData);
})
.then(employeePage => {
    return writeFile(employeePage);
})
.then(writeFileResponse => {
    console.log(writeFileResponse);
    return copyFile();
})
.then(copyFileResponse => {
    console.log(copyFileResponse);
  })
  .catch(err => {
    console.log(err);
  });

module.exports = Questions;