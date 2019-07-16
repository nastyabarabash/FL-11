  function getNumbers(s) {
      let array = [];
      for(let i = 0; i < s.length; i++) {
            if(!isNaN(parseInt(s[i]))) {
              array.push(parseInt(s[i]));
          }
      }
      return array;
  }