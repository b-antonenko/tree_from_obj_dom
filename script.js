'use strict';
let data = {
    "Рыбы": {
        "Форель": {},
        "Щука": {}
    },

    "Деревья": {
        "Хвойные": {
            "Лиственница": {},
            "Ель": {}
        },
        "Цветковые": {
            "Берёза": {},
            "Тополь": {}
        }
    }
};
let createTree = function(list, obj) {
    list.innerHTML = textLine(obj);
};

let textLine = function(obj) {
    let li = '';
    for (let key in obj) {
        li += '<li>' + key + textLine(obj[key]) + '</li>' // I would recommend use createElement instead Template strings
    }
    if (li !== undefined) { // In this case your create empty `ul`
        var ul = '<ul>' + li + '</ul>' // use let or const and method createElement
    }
    return ul;
}

let list = document.getElementById('list'); // better to use `querySelector`
createTree(list, data);
