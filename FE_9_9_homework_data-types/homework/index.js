//1
function findType(parameter) {
  typeof parameter;
}

//2
function forEach(array, action) {
  for (let i = 0; i < array.length; i++) {
    action(array[i]);
  }
}

//3
function map(array, action) {
  let transformed = [];
  forEach(array, elem => transformed.push(action(elem)));
  return transformed;
}

//4
function filter(array, action) {
  let transformed = [];
  forEach(array, elem => {
    if (action(elem)) {
      transformed.push(elem);
    }
  });
  return transformed;
}

//5
function getAdultAppleLovers(data) {
  return map(filter(data, elem => elem.age > 18 && elem.favoriteFruit === 'apple'), elem => el.name);
  }
  
//6 
function keys(obj) {
  let arr =[];
  for (let key in obj) {
    arr.push(key)
  }
  return arr;
}

//7
function values(obj) {
  let arr =[];
  for (let key in obj) {
    arr.push(obj[key])
  }
  return arr;
}

//8
function showFormattedDate(date) {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  let day = date.getDate();
  let month = date.getMonth();
  let year = date.getFullYear();

  return `It is ${day} of ${months[month]}, ${year}`
}