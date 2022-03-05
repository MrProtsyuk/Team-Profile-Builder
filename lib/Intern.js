const Employee = require('./Employee');

class Intern extends Employee{
    constructor(name, id, email, school) {
        super(name, id, email);
        this.info = school;
    }

    getSchool() {
        return `${this.name}'s School is ${this.info}`
    };

    getRole() {
        return `${this.name}'s role is Intern`
    }
};

module.exports = Intern;