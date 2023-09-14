//11-01 질의 함수와 변경함수 분리하기

//Side Effect 생기지 않게
// 함수명과 다른일을 하지 않도록 것이 중요
const setOffAlarms = () => {
  console.warn("악당을 찾았소");
};

const findMiscreant = (people) =>
  people.find((p) => p === "조커" || p === "사루만");

const alertForMiscreant = (people) => {
  if (findMiscreant(people) !== "") {
    setOffAlarms();
  }
};

alertForMiscreant([
  "슈퍼맨",
  "배트맨",
  "아이언맨",
  "사루만",
  "블랙위도우",
  "조커",
  "스파이더맨",
]);
