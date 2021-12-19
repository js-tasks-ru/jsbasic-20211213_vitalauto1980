function ucFirst(str) {
  if (str === '' || str === 'symbol') {
    return str;
  }
return str.charAt(0).toUpperCase() + str.slice(1);

}
