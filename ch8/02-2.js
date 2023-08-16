class Account {
  _number;
  _type;
  constructor(number, type) {
    this._number = number;
    this._type = type;
  }
  get interestRate() {
    return this._type.interestRate;
  }
}
class AccountType {
  _name;
  _interestRate;
  constructor(nameString, _interestRate) {
    this._name = nameString;
    this._interestRate = _interestRate;
  }
  get interestRate() {
    return this._interestRate;
  }
}
const minus = new AccountType("마통");
const acc = new Account(100000, minus, 0.39);
console.log(acc.interestRate);
