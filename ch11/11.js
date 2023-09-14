// 11.11 수정된 값 반환하기
const calculateAscent = () => {
  for (let i = 1; i < points.length; i++) {
    let result = 0;
    const verticalChange = points[i].elevation - points[i - 1].elevation;
    result += verticalChange > 0 ? verticalChange : 0;
  }
  return result;
};
const calculateTime = () => {};
const calculateDistance = () => {};

let points = [];
let totalAscent = calculateAscent();
let totalTime = 0;
let totalDistance = 0;
calculateTime();
calculateDistance();
const pace = totalTime / 60 / totalDistance;

// 함수 내부에서 외부 변수를 업데이트 하거나 전달 받은 객체를 업데이트할 때는 조심해야함
