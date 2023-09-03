let text = "hello";
console.log(text);

function toCelcious(f) {
  return (5 / 9) * (f - 32);
}

let result = toCelcious(100);

result = toCelcious("abcd"); // if we give inappropriate parameter to it then result will be "NaN"
console.log("the temprature is " + result);

let car = {
  name: "Carens",
  color: "Black",
  size: "7 Seter",
  owner: "herry jenson ",
};
console.log(
  "Color :" +
    car.color +
    "name :" +
    car.name +
    "size :" +
    car.size +
    " owner :" +
    car.owner
);
