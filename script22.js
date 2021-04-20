// Работа с объектами
// Примитивы передаются по значению. Объекты - по ссылке
// Первый способ - перебрать параметры объекта и эти примитивы
// в цикле присвоить параметрам нового объекта
// Поверхностная (а не глубокая) копия - параметры только примитивы

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};
const add = {
    d: 17,
    e: 20
};
// Объединение двух объектов
const numbersAdd = Object.assign(numbers, add);
console.log(numbersAdd); // { a: 2, b: 5, c: { x: 7, y: 4 }, d: 17, e: 20 }

// Клонирование объекта
const clone = Object.assign({}, add); //Поверхностная копия
clone.d = 377;
console.log(add); //Остался неизменным
console.log(clone);

// Клонирование массива
const oldArray = [54, 22, 36, 8];
const newArray = oldArray.slice();
newArray[2] = 'vstavka';
console.log(oldArray); // Остался неизменным
console.log(newArray);

//Spread - разложение на элементы
const video = ['youtube', 'vimeo', 'rutube'],
    blogs = ['youtube', 'vimeo', 'rutube'];
// в массив internet записать ЭЛЕМЕНТЫ двух массивов:
const internet = [...video, ...blogs];
//console.log(internet);
// Спред можно сразу передать аргументом в какую-то функцию:
function spread(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}
const num = [2, 5, 7];
spread(...num); //2 5 7

//В новой версии ES9 - клонирование объекта
const q = {
    one: 12,
    two: 'name'
};
const newObj = {
    ...q
};
newObj.two = 'nonono';
console.log(q);
console.log(newObj);