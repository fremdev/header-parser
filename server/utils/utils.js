const getLanguage = (data) => {
  return data.split(',')[0];
};

const getOsInfo = (data) => {
  const re = /\((.*?)\)/;
  const matchResult = data.match(re);
  return matchResult[1];
}

module.exports = {getLanguage, getOsInfo};
