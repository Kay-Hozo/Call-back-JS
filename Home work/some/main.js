// Thuc hanh some() method 

var newArray = [{
        id: 1,
        name: 'Doraemon',
        age: 18
    },
    {
        id: 2,
        name: 'Conan',
        age: 6
    },
    {
        id: 3,
        name: 'Naruto',
        age: 32
    },
    {
        id: 4,
        name: 'Luffy',
        age: 20
    },
    {
        id: 5,
        name: 'Songoku',
        age: 55
    }
];

Array.prototype.some2 = function(itemCompare) {
    if (typeof itemCompare === 'function') {
        var arrayLength = this.length;
        var statusItem;
        var count = 0;

        for (var i = 0; i < arrayLength; i++) {
            statusItem = itemCompare(this[i], i);
            if (statusItem) {
                count++;
                break;
            }
        }

        if (count > 0) {
            return true;
        } else {
            return false;
        }
    }
};

var printArray = newArray.some2(function(target, index) {
    console.log(target);
    console.log(index);
    return target.age > 0;
});

console.log(printArray);