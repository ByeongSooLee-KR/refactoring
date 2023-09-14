// 11.06 질의 함수를 매개변수로 바꾸기

targetTemperature(aPlan);

// 다른모듈에 있는 함수라고 가정
function targetTemperature(aPlan) {
  currentTemperature = thermostat.currentTemperature;
  //...
}
