
// Example 1

example1();
function example1() {
    console.log("Ran the example");
}

// You should see "Ran the example!" when you run this code.
// Example 2

example2();
var example2 = function() {
    console.log("Ran the example");
}

// You should see an undefined error when this code gets run.

// In both examples, the interpreter modifies the code. 
// This is effectively how this code is interpreted.
// Example 1 Interpreted

var example1;
example1 = function() {
    console.log("Ran the example");
}
example1();

// Example 2 Interpreted

var example2;
example2();
example2 = function() {
    console.log("Ran the example");
}

// In both examples, the declarations get moved to the top of the scope. But notice how the definition comes along too in the first example, which allows us to use example1() right away.
