const hasValue = (obj) => {
  for (let key in obj) {
    if (obj[key]) {
      return true;
    }
  }
  return false;
};

export default hasValue;
