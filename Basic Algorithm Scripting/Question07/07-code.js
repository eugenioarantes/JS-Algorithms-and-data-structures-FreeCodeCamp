function repeatStringNumTimes(str, num) {
  if (num <= 0 ) return '';

  let newString = '';

  while(num > 0) {
    newString+= str;
    num-= 1;
  }
  return newString;
}

repeatStringNumTimes("abc", 3);