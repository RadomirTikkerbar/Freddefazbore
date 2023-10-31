function countCode(letter) {
  return data.reduce((acc, code) => {
      if (code.startsWith(letter)) {
        return acc + 1;
      }
      return acc;
    }, 0);  
}
