const inquirer = require('inquirer');
const { writeFile, copyFile } = require('../utils/generate-site');
const Employee = require('./Employee');
const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');

function Questions() {
    this.employee;
    this.manager;
    this.intern;
    this.engineer;
}

Questions.prototype.initializePrompt = function() {
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
        name: 'officeNumber',
        message: 'What is your office number?'
    }
])
    .then(({ name }) => {
        //destructure name from the propmt
        this.manager = new Manager(name, id, officeNumber);
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
                name: 'github',
                message: 'Please Enter their GitHub username'
             },
            ])
            .then(({ name }) => {
                //destructure name from the propmt
                this.manager = new Manager(name);
            })
        } 
    })
}

module.exports = Questions;