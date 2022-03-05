const Intern = require('../lib/Intern.js');

test('creates an intern object', () => {
    const intern = new Intern('Mark');

    expect(intern.name).toBe('Mark');
    expect(intern.role).toBe('Intern');
    expect(intern.id).toBe('1');
    expect(intern.email).toBe('Mark');
    expect(intern.info).toBe('School');
})