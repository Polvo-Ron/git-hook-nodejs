const mult = require('../src/mult')
    // directs to the local directory
it('should return correct mult', () => {
    const result = mult(2, 5)
    expect(result).toBe(10)
})