// long running function
function waitThreeSeconds() {
    console.log('started function');
    var ms = 3000 + new Date().getTime();
    while (new Date() < ms){}
    console.log('finished function');
}

function clickHandler() {
    console.log('click event!');
    waitThreeSeconds();
}
console.log('############ Notes #############');
console.log('Expect: [started execution, started function, finished function, finished execution] then all the async event based output: [click event!,started function,finished function]');
console.log('This is due to synchronous and single thread running, when event que is handled only when current execution stack is empty');
console.log('############ Start Running #############');

console.log('started execution');

// listen for the click event
document.addEventListener('click', clickHandler);


waitThreeSeconds();
console.log('finished execution');

