// Thuc hanh every() method 

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

Array.prototype.every2 = function(itemCompare) {
    if (typeof itemCompare === 'function') {
        var statusCompare = false;
        var arrayLength = this.length;
        var count = 0;

        for (var i = 0; i < arrayLength; i++) {
            if (itemCompare(this[i], i)) {
                ++count;
            } else {
                break;
            }
        }

        if (count === arrayLength) {
            return statusCompare = true;
        } else {
            return statusCompare;
        }
    }
};

var printArray = newArray.every2(function(target, index) {
    console.log(target);
    console.log(index);
    return target.age > 0;
});

console.log(printArray);