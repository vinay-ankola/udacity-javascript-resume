var sampleArray = [0,0,7];

var incrementLastArrayElement = function(_array) {
    var newArray = [];
    newArray = _array.slice(0);
    var lastNumber = newArray.pop();
    lastNumber = lastNumber + 1;
    newArray.push(lastNumber);
    return newArray;
};

console.log(incrementLastArrayElement(sampleArray));


////////


function nameChanger(oldName) {
    var finalName = oldName;
    var names = oldName.split(" ");
    names[1] = names[1].toUpperCase();
    names[0] = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();
    finalName = names.join(" ");
    return finalName;
}

////////

var name = "AlbERt EINstEiN";

function nameChanger(oldName) {
    var finalName = oldName;
    
    var names = finalName.split(" ");
    names[0] = names[0].charAt(0).toUpperCase() + names[0].slice(1).toLowerCase();
    
    names[1] = names[1].toUpperCase();
    finalName = names.join(' ');
    
    return finalName;
};

// Did your code work? The line below will tell you!
console.log(nameChanger(name));