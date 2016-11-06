const expect = require('expect');
const {getLanguage} = require('./language');

describe('getLanguage', () => {

  it('should return first language from a string', () => {
    const data = 'uk-UA,uk;q=0.8,ru;q=0.6,en-US;q=0.4,en;q=0.2';
    const data2 = 'en-US';
    const language = getLanguage(data);
    const language2 = getLanguage(data2);

    expect(language).toBe('uk-UA');
    expect(language2).toBe('en-US');
  });
  
});
