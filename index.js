function timeFunction() {
    console.log("Start Time Out");
    setTimeout(function ads() {
        console.log("Tharindu");
    }, 5000);
    console.log("All End");
}

var myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve([1, 2, 3, 4, 5]);
    }, 5000);
});

myPromise.then(res => {
    console.log(res);
});