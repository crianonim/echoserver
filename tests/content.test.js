const {paragraphs,countries,getCountry,getAllCountries} = require('../routes/content');

describe("Countries content",()=>{
    it("Should return an object",()=>{
        expect(typeof getCountry('Poland')).toBe('object')
    })
    it("Should return an Array",()=>{
        expect(Array.isArray( getAllCountries() )) .toBe(true)
    })
})