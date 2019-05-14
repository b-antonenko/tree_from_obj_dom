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
        li += '<li>' + key + textLine(obj[key]) + '</li>'
    }
    if (li !== undefined) {
        var ul = '<ul>' + li + '</ul>'
    }
    return ul;
}

let list = document.getElementById('list');
createTree(list, data);