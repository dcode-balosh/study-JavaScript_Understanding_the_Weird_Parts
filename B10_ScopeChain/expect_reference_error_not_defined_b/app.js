function a() {
    function b() {
        console.log(myVar);
    }

    var myVar = 2;
    b();
}

console.log('should be Reference Error b is not defined, lexical environment is global, b is not declared at b or global context');
b();