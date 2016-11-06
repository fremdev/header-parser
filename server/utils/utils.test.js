const expect = require('expect');
const {getLanguage, getOsInfo} = require('./utils');

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

describe('getOsInfo', () => {
  it('should return OS info from user-agent string', () => {
    const useragentString = 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/54.0.2840.87 Safari/537.36';
    const osInfo = getOsInfo(useragentString);

    expect(osInfo).toBe('Windows NT 6.1; Win64; x64');
  });
});
