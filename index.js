const Calculate = {
    factorial(input) {
      if(input === 1 || input === 0) {
        return 1;
      } else {
        return input * Calculate.factorial(input - 1);
      }
    }
  }
  
  module.exports = Calculate;
  
  
  