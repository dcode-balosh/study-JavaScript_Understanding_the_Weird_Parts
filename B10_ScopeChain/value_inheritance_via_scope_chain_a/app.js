function b() {
    console.log('should be 1, lexical environment is global');
    console.log(myVar);
}

function a() {
    var myVar = 2;
    b();
}

var myVar = 1;
a();