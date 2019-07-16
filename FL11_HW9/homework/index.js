  function getNumbers(s) {
      let array = [];
      for(let i = 0; i < s.length; i++) {
            if(!isNaN(parseInt(s[i]))) {
              array.push(parseInt(s[i]));
          }
      }
      return array;
  }

  function findTypes() {
      let obj = {};
      for(let i = 0; i < arguments.length; i++) {
          let a = typeof arguments[i];
          if(obj[a] === undefined) {
              obj[a] = 1;
          } else {
              obj[a] += 1;
          }
      }
      return obj;
  }