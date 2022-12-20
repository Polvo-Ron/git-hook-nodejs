const sum = require('../src/sum')
    // directs to the local directory
it('should return correct sum', () => {
        const result = sum(2, 5)
        expect(result).toBe(7)
    })
    // it is a dependency, second parameter is an error function
    // leave empty