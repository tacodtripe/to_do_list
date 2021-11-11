function cleanDisplay(arr) {
  while (arr.firstChild) {
    arr.removeChild(arr.firstChild);
  }
  return arr;
}

export default cleanDisplay;