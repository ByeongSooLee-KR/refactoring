class TelephoneNumber {
  #areaCode;
  #number;
  get areaCode() {
    return this.#areaCode;
  }
  get number() {
    return this.#number;
  }
}

class Person {
  #telephoneNumber;
  constructor() {
    this.#telephoneNumber = new TelephoneNumber();
  }
  get officeAreaCode() {
    return this.#telephoneNumber.areaCode;
  }
  set officeAreaCode(arg) {
    this.#telephoneNumber = new TelephoneNumber(arg, this.officeNumber);
  }
  get officeNumber() {
    return this.#telephoneNumber.number;
  }
  set officeNumber(value) {
    this.#telephoneNumber.number = new TelephoneNumber(
      this.officeAreaCode,
      value
    );
  }
}

p.officeAreaCode = "312";
p.officeNumber = "555-0142";
console.log(p.officeAreaCode, p.officeNumber);
