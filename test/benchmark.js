const Benchmark = require('benchmark');
var suite = new Benchmark.Suite;
const {fn1, fn2} = require('../src/fn')

suite.add('Num Function', function () {
  fn1('1234321');
}).add('parseInt Func', function() {
  fn2('1234321')
})
.on('cycle', function(event) {
  console.log(String(event.target))
})
.on('complete', function() {
  console.log('Fastest is ' + this.filter('fastest').map('name'));
})
.run({'async': true})

// // add tests
// suite.add('RegExp#test', function() {
//   /o/.test('Hello World!');
// })
// .add('String#indexOf', function() {
//   'Hello World!'.indexOf('o') > -1;
// })
// // add listeners
// .on('cycle', function(event) {
//   console.log(String(event.target));
// })
// .on('complete', function() {
//   console.log('Fastest is ' + this.filter('fastest').map('name'));
// })
// // run async
// .run({ 'async': true });