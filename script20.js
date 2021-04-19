const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function () {
        console.log('Это метод объекта options');
    }
};
// delete options.height; //удаление свойства объекта

// Перебор свойств объекта циклом:
for (let key in options) {
    if (typeof (options[key]) === 'object') {
        for (let i in options[key]) {
            console.log(i + ' : ' + options[key][i]);
        }
    } else {
        console.log(key + ' : ' + options[key]);
    }
}

//Методы объекта
console.log(Object.keys(options)); //создаёт массив со всеми ключами объекта
console.log(Object.keys(options).length); //считает длину этого массива

options.makeTest(); //вызов метода объекта

//Деструктуризация объекта
const {
    border,
    bg
} = options.colors;
console.log(border, bg);