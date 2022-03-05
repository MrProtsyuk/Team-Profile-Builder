const Manager = require('../lib/Manager.js');

test('creates an manager object', () => {
    const manager = new Manager('Mark');

    expect(manager.name).toBe('Mark');
    expect(manager.id).toBe('1');
    expect(manager.email).toBe('Mark');
    expect(manager.role).toBe('Manager');
    expect(manager.info).toBe('Office Number');
})