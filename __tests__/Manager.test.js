const Manager = require('../lib/Manager.js');

test('can set office number object', () => {
    const test = "5";
    const manager = new Manager("mark", 1, "mark@mark", test);
    expect(manager.officeNumber).toBe(test)
})

test('can get office number object', () => {
    const test = "5";
    const manager = new Manager("mark", 1, "mark@mark", test);
    expect(manager.getOfficeNumber()).toBe(test)
})

test('can get manager role', () => {
    const test = "Manager";
    const manager = new Manager("Mark", 1, "mark@mark", "5");
    expect(manager.getRole()).toBe(test);
})