const getLanguage = (data) => {
  return data.split(',')[0];
};

module.exports = {getLanguage};
