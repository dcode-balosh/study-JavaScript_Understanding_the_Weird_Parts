console.log('############ Notes #############');
console.log('Expect: 12 true false');
console.log('This is due to Coercion');
// http://webreflection.blogspot.co.il/2010/10/javascript-coercion-demystified.html

var a = 2;
var b = '1';

console.log(b+a);
console.log(typeof(b+a) == "string");
console.log(typeof(b+a) == "number");

