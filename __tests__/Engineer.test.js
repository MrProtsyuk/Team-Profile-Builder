const Engineer = require('../lib/Engineer.js');

test('creates an employee object', () => {
    const engineer = new Engineer('Mark');

    expect(engineer.name).toBe('Mark');
    expect(engineer.id).toBe('1');
    expect(engineer.email).toBe('Mark');
    expect(engineer.role).toBe('engineer');
    expect(engineer.info).toBe('GitHub')
})