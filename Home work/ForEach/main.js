// THuc hanh ForEach
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

Array.prototype.forEach2 = function(functionReturn) {
    if (typeof functionReturn === 'function') {
        var arrayLength = this.length;

        for (var i = 0; i < arrayLength; i++) {
            functionReturn(this[i], i);
        }
    }
};

newArray.forEach2(function(eachItem, index) {
    console.log(eachItem);
    console.log(index);
});