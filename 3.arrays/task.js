function compareArrays(arr1, arr2) {
  let result;

  // Ваш код
  
  /* Переменная result принимает true только если:
  1. Массивы имеют одинаковую длину
  2. Каждый элемент первого массива равен элементу другого массива на той же позиции (index) */

  result = (arr1.length == arr2.length) && arr1.every((item,index) => {
  	return item === arr2[index];
  });

  return result; // boolean
}

function advancedFilter(arr) {
  let resultArr;
  // Ваш код

  resultArr = arr.filter((item) => {
  	if ((item > 0) && !(item % 3)) {
  		return item;
  	}
  }).map((item) => {
  	return item * 10;
  });

  return resultArr; // array
}

advancedFilter(arr);