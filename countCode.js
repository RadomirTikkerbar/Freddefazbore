async function countCode(letter) {
  try {
    
    const response = await fetch('https://raw.githubusercontent.com/timotr/progre-helper/main/data.js');
    
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }

    const data = await response.json();
    
  
    const count = data.reduce((acc, code) => {
      if (code.startsWith(letter)) {
        return acc + 1;
      }
      return acc;
    }, 0);

    return count;
  } catch (error) {
    console.error('An error occurred:', error);
    return 0;
  }
}


countCode('i')
  .then(count => {
    console.log(`Number of codes starting with 'i': ${count}`);
  });
