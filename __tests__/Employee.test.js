const Employee = require('../lib/Employee.js');

test('creates an employee object', () => {
    const fakeName = "Mark";
    const fakeId = '1';
    const fakeEmail = 'Mark@me.com'
    const employee = new Employee('Mark');

    expect(employee.name).toBe(fakeName);
    expect(employee.id).toBe(fakeId);
    expect(employee.email).toBe(fakeEmail);
})

test("gets employees name", () => {
    const test = "Mark";
    const employee = new Employee(test)
    expect(employee.getName()).toBe(test);
});

test('gets employee id', () => {
    const test = "1";
    const employee = new Employee(test)
    expect(employee.getId()).toBe(test);
})

test('gets employee email', () => {
    const test = "Mark@me.com"
    const employee = new Employee(test)
    expect(employee.getEmail()).toBe(test)
})

test('gets employee role', () => {
    const test = "Employee"
    const employee = new Employee(test)
    expect(employee.getEmail()).toBe(test)
})