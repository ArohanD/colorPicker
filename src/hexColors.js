const hexVals = ['0', '4', '8',  'A', 'E',];

const generateColors = () => {
  let colorArray = hexVals.slice().map(num => '#' + num);
  for(let i = 0; i < 5; i++){
    colorArray = appendElements(colorArray, hexVals)
  }
  return colorArray;
}

const appendElements = (array1, array2) => {
  let newArr = [];
  for(let i = 0; i < array1.length; i++) {
    for(let j = 0; j < array2.length; j++) {
      newArr.push(array1[i] + array2[j]);
    }
  }
  return newArr;
}

//console.log(appendElements([1,2,3,4], ['a', 'b', 'c', 'd']))
//console.log(generateColors())

export default generateColors;