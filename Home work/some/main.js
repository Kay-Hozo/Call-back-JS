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
        for (var index in this) {
            if (this.hasOwnProperty(index)) {
                if (itemCompare(this[index], index, this)) {
                    return true;
                }
            }
        }

        return false;
    }
};

var printArray = newArray.some2(function(target, index, originArray) {
    console.log(target);
    console.log(index);
    return target.age > 10;
});

console.log(printArray);