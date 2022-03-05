const Employee = require('../lib/Employee.js');

test('creates an employee object', () => {
    const employee = new Employee('Mark');

    expect(employee.name).toBe('Mark');
    expect(employee.id).toBe('1');
    expect(employee.email).toBe('Mark');
    expect(employee.role).toBe('Employee');
})