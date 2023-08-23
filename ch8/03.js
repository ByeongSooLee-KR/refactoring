const renderPhoto = (aPhoto) => {
  return `<img src="${aPhoto.url}" />`;
};
const emitPhotoData = (aPhoto) => {
  const result = [];
  result.push(`<p>title: ${aPhoto.title}</p>`);
  result.push(`<p>위치: ${aPhoto.location}</p>`);
  result.push(`<p>날짜: ${aPhoto.date.toDateString()}</p>`);
  return result.join("\n");
};

const renderPerson = (person) => {
  const result = [];
  result.push(`<p>${person.name}</p>`);
  result.push(renderPhoto(person.photo));
  result.push(emitPhotoData(person.photo));
  return result.join("\n");
};

const photoDiv = (photo) =>
  ["<div>", emitPhotoData(photo), "</div>"].join("\n");

const photo = {
  title: "로이사진",
  location: "양재천",
  date: new Date(),
  url: "http://abc.com",
};
console.log("** renderPerson **\n", renderPerson({ name: "로이", photo }));
console.log("\n** photoDiv **\n", photoDiv(photo));
