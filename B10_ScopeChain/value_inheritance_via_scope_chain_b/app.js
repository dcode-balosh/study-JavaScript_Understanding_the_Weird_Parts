function a() {
    function b() {
        console.log(('should be 2, lexical environment is a'));
        console.log(myVar);
    }

    var myVar = 2;
    b();
}

var myVar = 1;
a();