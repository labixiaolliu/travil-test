function getMixNum(a, b) {
  return (b - a) * 3
}

module.exports = {
  add: (...args) => {
    return args.reduce((prev, next) => {
      return prev + next
    })
  },

  mul: (...args) => {
    return args.reduce((prev, next) => {
      return prev * next
    })
  },

  compare: (a, b) => {
    if (a > b) {
      return a - b;
    } else if (a == b) {
      return a + b;
    } else {
      return getMixNum(a, b);
    }
  }
}