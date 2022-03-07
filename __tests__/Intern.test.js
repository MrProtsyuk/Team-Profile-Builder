const Intern = require('../lib/Intern.js');

test('can set school object', () => {
    const test = "school";
    const intern = new Intern("mark", 1, "mark@mark", test)
    expect(intern.school).toBe(test)
})

test('can get school', () => {
    const test = "school";
    const intern = new Intern("mark", 1, "mark@mark", test)
    expect(intern.getSchool()).toBe(test)
})

test('can get Intern role', () => {
    const test = "Intern";
    const intern = new Intern("mark", 1, "mark@mark", "school")
    expect(intern.getRole()).toBe(test)
})