import { isEmpty } from 'lodash';

export const linearSearch = (arr, x) => {
  if (!isEmpty(x)) {
    let arrCopy = [...arr];
    let results = [];
    let input = x.toLowerCase();
    arrCopy.map(({ title }, i) => {
      if (title.toLowerCase().includes(input)) {
        results.push(arrCopy[i]);
      }
    });
    return results;
  }
  return;
};

export const binarySearch = (arr, x) => {
  if (!isEmpty(x)) {
    let arrCopy = [...arr];
    let l = 0;
    let r = arrCopy.length - 1;
    let mid;
    let results = [];
    let input = x.toLowerCase();

    while (l <= r) {
      mid = Math.floor((r + l) / 2);
      let { title } = arrCopy[mid];
      let res = title.toLowerCase().localeCompare(input);

      if (title.toLowerCase().includes(input)) {
        results.push(arrCopy[mid]);
      }
      res > 0 ? (r = mid - 1) : (l = mid + 1);
    }
    return results;
  }
  return;
};
