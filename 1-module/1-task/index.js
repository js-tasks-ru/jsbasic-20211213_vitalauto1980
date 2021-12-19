function factorial(n) {
  if (n === 0) {
    return 1
  }
  let result = n;
  for (i=1; i<n; i++) {
    result= result * i;
  }
  return result;
  // ваш код...
}
