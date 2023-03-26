function countSevensInNumber(num) {
  return num.toString().split('').includes('7')
}

function g(N) {
  let count = 0;
  for (let i = 1; i <= N; i++) {
    if(countSevensInNumber(i)){
      count++
    }
  }
  return count;
}


module.exports = g