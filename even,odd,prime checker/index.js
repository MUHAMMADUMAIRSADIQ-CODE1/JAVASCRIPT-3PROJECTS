    function Prime(n) {
      if (n <= 1) return false;
      if (n === 2) return true;
      if (n % 2 === 0) return false;
      for (let i = 3; i <= Math.sqrt(n); i += 2) {
        if (n % i === 0) return false;
      }
      return true;
    }

    function checkNumber() {
      const num = parseInt(document.getElementById("num").value);
      let result = "";

      if (isNaN(num)) {
        result = "⚠️ Please enter a valid number.";
      } else {
        if (num % 2 === 0) {
          result = num + " is Even.";
        } else {
          result = num + " is Odd.";
        }

        if (Prime(num)) {
          result += " It is also Prime.";
        }
      }

      document.getElementById("result").textContent = result;
    }