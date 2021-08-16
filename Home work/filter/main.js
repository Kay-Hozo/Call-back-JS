// Thuc hanh filter() method 

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
    }, {
        id: 6,
        name: 'Bleach',
        age: 19
    }
];

Array.prototype.filter2 = function(itemFilter) {
    if (typeof itemFilter === 'function') {
        var filterArray = [];
        var statusItem;

        for (var index in this) {
            if (this.hasOwnProperty(index)) {
                statusItem = itemFilter(this[index], index, this);
                if (statusItem) {
                    filterArray.push(this[index]);
                };
            }
        }

        return filterArray;
    }
};

var printArray = newArray.filter2(function(target, index, originArray) {
    return target.age > 0;
});

console.log(printArray);