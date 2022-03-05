class Employee {
    constructor(name = '') {
        this.name = name;
        this.id = id;
        this.email = email;
    };

getName() {
    return `A new card for ${this.name} has been created!`
};

getId() {
    return `${this.name}'s Id is ${this.id}`
};

getEmail() {
    return `${this.name}'s Email is ${this.email}`
};

getRole() {
    return `${this.name}'s role is an Employee!`
};

};

module.exports = Employee;