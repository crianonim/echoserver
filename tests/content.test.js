const {paragraphs,countries,getCountry} = require('../routes/content');

describe("Countries content",()=>{
    it("Should return an object",()=>{
        expect(typeof getCountry('Poland')).toBe('object')
    })
})