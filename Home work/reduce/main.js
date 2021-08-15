// Thuc hanh reduce() method 

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

Array.prototype.reduce2 = function(reduceArray, accumulater) {
    if (typeof reduceArray === 'function') {
        var arrayLength = this.length;
        var result = accumulater;
        var i = 0;

        if (arguments.length < 2) {
            i = 1;
            result = this[0];
        }

        for (; i < arrayLength; i++) {
            result = reduceArray(result, this[i], i, this);
        }

        return result;
    };
};

var printArray = newArray.reduce(function(result, item, index, defultArray) {
    return result + item.age;
}, 0);

console.log(printArray);