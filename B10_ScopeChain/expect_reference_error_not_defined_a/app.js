function b() {
    console.log('should be Reference Error myVar is not defined, lexical environment is global, myVar is not declared at b or global context');
    console.log(myVar);
}

function a() {
    var myVar = 2;
    b();
}
a();