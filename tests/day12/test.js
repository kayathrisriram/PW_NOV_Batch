var y = "chrome";
y = "ff";
var israiny = true;
var v = 12345;
var fname;
fname = "kayathri";
fname = 123;
console.log(typeof fname); //output -?
function dis_name(fname) {
    console.log(fname);
}
dis_name("test typescript");
function add(x, y) {
    return x + y;
}
var total = add(5, 9);
console.log(total);
var x = 7;
x = "hi";
function browser(brow) {
    if (brow == "chrome") {
        console.log("execute sanitytest");
    }
    else {
        console.log("running regression suite");
    }
}
browser("FF");
var user = {
    id: 123,
    first_name: "test1",
    department: "QA"
};
console.log(user);
