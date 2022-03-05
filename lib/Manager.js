const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.info = officeNumber;
    }

    getRole() {
        return`${this.name}'s role is Manager`
    }
}

module.exports = Manager;