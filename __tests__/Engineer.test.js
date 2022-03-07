const Engineer = require('../lib/Engineer.js');

test('can set github object', () => {
    const test = "github";
    const engineer = new Engineer("Mark", 1, "mark@mark", test);
    expect(engineer.gitHub).toBe(test);
})

test('get github username', () => {
    const test = "github";
    const enginner = new Engineer("mark", 1, "mark@mark", test);
    expect(enginner.getGithub()).toBe(test);
})

test('gets enginner role', () => {
    const test = "Engineer";
    const engineer = new Engineer("mark", 1, "mark@mark", "github");
    expect(engineer.getRole()).toBe(test);
})