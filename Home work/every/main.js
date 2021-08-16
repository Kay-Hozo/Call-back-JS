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

        for (var index in this) {
            if (this.hasOwnProperty(index)) {
                if (!itemCompare(this[index], index)) {
                    return statusCompare;
                }
            };
        }

        return statusCompare = true;
    }
};

var printArray = newArray.every2(function(target, index) {
    console.log(target);
    console.log(index);
    return target.age < 20;
});

console.log(printArray);