// Thuc hanh find() method 

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

Array.prototype.find2 = function(arrayTarget) {
    if (typeof arrayTarget === 'function') {
        var arrayLength = this.length;
        var result;
        var count = 0;

        for (var i = 0; i < arrayLength; i++) {

            if (arrayTarget(this[i], i)) {
                count++;
                result = this[i];
                break;
            } else {
                continue;
            }
        }

        if (count > 0) {
            return result;
        } else {
            return undefined;
        }
    }
};

var printArray = newArray.find2(function(arrayItem, index) {
    return arrayItem.age > 50;
});

console.log(printArray);