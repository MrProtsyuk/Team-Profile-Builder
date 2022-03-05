const Employee = require('./Employee');

class Engineer extends Employee{
    constructor(name, id, email, gitHub) {
        super(id, name, email);
        this.gitHub = gitHub;
    }

getGithub() {
    return `${this.name}'s GitHub Id is ${this.info}`
};

getRole() {
    return `${this.name}'s Role is Engineer`
}

};

module.exports = Engineer;