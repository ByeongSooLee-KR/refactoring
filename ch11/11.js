// 11.11 수정된 값 반환하기
const calculateAscent = () => {
  for (let i = 1; i < points.length; i++) {
    const verticalChange = points[i].elevation - points[i - 1].elevation;
    totalAscent += verticalChange > 0 ? verticalChange : 0;
    // 외부에 있는 변수를 업데이트 하고 있음
  }
};
const calculateTime = () => {};
const calculateDistance = () => {};

let points = [];
let totalAscent = 0;
let totalTime = 0;
let totalDistance = 0;
calculateAscent();
calculateTime();
calculateDistance();
const pace = totalTime / 60 / totalDistance;
