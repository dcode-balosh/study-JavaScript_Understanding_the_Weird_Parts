function b() {
    console.log('should be global.undefined, lexical environment is global, Hoisting');
    console.log(myVar);
}

function a() {
    var myVar = 2;
    b();
}

a();
var myVar = 1;
