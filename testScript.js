

    function getCharPoints(char) {
        if (char === char.toUpperCase()) {
            return Number(char.charCodeAt(0)-38)
        } else {
            return Number(char.charCodeAt(0) - 96)
        }
    }

  


    
console.log(getCharPoints("A"));

