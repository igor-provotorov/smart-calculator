class SmartCalculator {
  constructor(initialValue) {
    this.arr = [];
    this.arr.push(initialValue);
  }

  add(number) {
    this.arr.push("+");
    this.arr.push(number);
    return this;
  }

  subtract(number) {
    this.arr.push("-");
    this.arr.push(number);
    return this;
  }

  multiply(number) {
    this.arr.push("*");
    this.arr.push(number);
    return this;
  }

  devide(number) {
    this.arr.push("/");
    this.arr.push(number);
    return this;
  }

  pow(number) {
    this.arr.push("^");
    this.arr.push(number);
    return this;
  }

  valueOf() {
    const resultMass = this.arr;
    let length = this.arr.length;

    for (let i = length; i > 0; i--) {
      if (resultMass[i] === "^") {
        let val = Math.pow(resultMass[i - 1], resultMass[i + 1]);
        resultMass.splice(i - 1, 3, val);
        length = resultMass.length;
        i = length;
     }
    }

    for (let i = 0; i < length; i++) {
      if (resultMass[i] === "*") {
        let val = resultMass[i - 1] * resultMass[i + 1];
        resultMass.splice(i - 1, 3, val);
         i = 0;
        length = resultMass.length;
      } else if (resultMass[i] === "/") {
        let val = resultMass[i - 1] / resultMass[i + 1];
        resultMass.splice(i - 1, 3, val);
         i = 0;
        length = resultMass.length;
      }
    }

    for (let i = 0; i < length; i++) {
      if (resultMass[i] === "+") {
        let val = (+resultMass[i - 1]) + (+resultMass[i + 1]);
        resultMass.splice(i - 1, 3, val);
         i = 0;
        length = resultMass.length;
      } else if (resultMass[i] === "-") {
        let val = resultMass[i - 1] - resultMass[i + 1];
        resultMass.splice(i - 1, 3, val);
         i = 0;
        length = resultMass.length;
      } 
    }

    return resultMass[0];
  }
}

module.exports = SmartCalculator;
