export const bubbleSort = (arr) => {
  const arrCopy = [...arr];
  arrCopy.map((ary) => {
    let swapped = true;
    arrCopy.map((e, i) => {
      if (arrCopy[i + 1] !== undefined) {
        if (arrCopy[i].vote_average < arrCopy[i + 1].vote_average) {
          [arrCopy[i + 1], arrCopy[i]] = [arrCopy[i], arrCopy[i + 1]];
          swapped = false;
        }
      }
    });
    if (swapped) {
      return arrCopy;
    }
  });
  return arrCopy;
};

export const insertionSort = (arr) => {
  const arrCopy = [...arr];
  arrCopy.map((ary, i, j) => {
    (ary = arrCopy[i]), (j = i - 1);
    while (j > -1 && ary.vote_average > arrCopy[j].vote_average) {
      (arrCopy[j + 1] = arrCopy[j]), j--;
    }
    arrCopy[j + 1] = ary;
  });
  return arrCopy;
};

export const selectionSort = (arr) => {
  const arrCopy = [...arr];
  arrCopy.map((ary, i, min) => {
    min = i;
    arrCopy.map((e, j = i + 1) => {
      if (arrCopy[j].vote_average < arrCopy[min].vote_average) {
        min = j;
      }
      if (min != i) {
        let temp = arrCopy[i];
        arrCopy[i] = arrCopy[min];
        arrCopy[min] = temp;
      }
    });
  });
  return arrCopy;
};

const merge = (left, right) => {
  let sortedArr = []; // the sorted elements will go here

  while (left.length && right.length) {
    if (left[0].vote_average > right[0].vote_average) {
      sortedArr.push(left.shift());
    } else {
      sortedArr.push(right.shift());
    }
  }
  return [...sortedArr, ...left, ...right];
};

export const mergeSort = (arr) => {
  const arrCopy = [...arr];
  const half = arrCopy.length / 2;

  if (arrCopy.length <= 1) {
    return arrCopy;
  }

  const left = arrCopy.splice(0, half);
  const right = arrCopy;
  return merge(mergeSort(left), mergeSort(right));
};

export const quickSort = (arr) => {
  const arrCopy = [...arr];
  const partition = (array = [], start, end) => {
    let i = start;
    const pivotValue = array[end].vote_average;
    let pivotIndex = start;

    while (i < end) {
      if (array[i].vote_average > pivotValue) {
        [array[i], array[pivotIndex]] = [array[pivotIndex], array[i]];
        pivotIndex++;
      }
      i++;
    }

    [array[pivotIndex], array[end]] = [array[end], array[pivotIndex]];
    return pivotIndex;
  };
  let stack = [];
  stack.push(0);
  stack.push(arrCopy.length - 1);
  while (stack[stack.length - 1] >= 0) {
    let end = stack.pop();
    let start = stack.pop();
    let pivotIndex = partition(arrCopy, start, end);

    if (pivotIndex - 1 > start) {
      stack.push(start);
      stack.push(pivotIndex - 1);
    }

    if (pivotIndex + 1 < end) {
      stack.push(pivotIndex + 1);
      stack.push(end);
    }
  }
  return arrCopy;
};
