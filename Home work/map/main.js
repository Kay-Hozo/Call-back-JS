// Thuc hanh map() method 

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

Array.prototype.map2 = function(arrayMap) {
    if (typeof arrayMap === 'function') {
        var arrayLength = this.length;
        var arrayMapMethod = [];

        for (var i = 0; i < arrayLength; i++) {
            arrayMapMethod.push(arrayMap(this[i], i, this));
        }

        return arrayMapMethod;
    }
};

var printArray = newArray.map2(function(target, index, defultArray) {
    return target;
});

console.table(printArray);