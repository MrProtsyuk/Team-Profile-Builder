const Employee = require('../lib/Employee.js');

test('creates employee object', () => {
    const employee = new Employee();
    expect(typeof(employee)).toBe("object");
})

test('can set an employee name object', () => {
    const name = "Mark"
    const employee = new Employee(name);

    expect(employee.name).toBe(name);
})

test('can set an employee id object', () => {
    const test = "1"
    const employee = new Employee("Mark", test);
    expect(employee.id).toBe(test);
})

test('can set an employee email object', () => {
    const test = "mark@mark.com"
    const employee = new Employee("mark", 1, test)
    expect(employee.email).toBe(test);
})

test("gets employees name", () => {
    const test = "Mark";
    const employee = new Employee(test)
    expect(employee.getName()).toBe(test);
});

test('gets employee id', () => {
    const test = "1";
    const employee = new Employee("mark", test)
    expect(employee.getId()).toBe(test);
})

test('gets employee email', () => {
    const test = "mark@mark"
    const employee = new Employee("mark", 1, test)
    expect(employee.getEmail()).toBe(test)
})

test('gets employee role', () => {
    const test = "Employee"
    const employee = new Employee("mark", 1, "mark@mark")
    expect(employee.getRole()).toBe(test)
})