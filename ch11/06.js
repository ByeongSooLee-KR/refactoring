// 11.06 질의 함수를 매개변수로 바꾸기

targetTemperature(aPlan, thermostat.currentTemperature);

// 다른모듈에 있는 함수라고 가정
function targetTemperature(aPlan, currentTemperature) {
  currentTemperature = currentTemperature;
  // thermostat 객체에 의존하고 있는데 외부의 모듈, 속성에 의존하는 것은 심각한 coupling 발생
  // -> 매개변수로 받는 것이 적절
  //...
}
