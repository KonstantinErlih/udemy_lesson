let arr = [1, 5, 8, 10, 12];
arr.pop(); //удаляет последний элемент
arr.push(24); //добавляет элемент в конец массива
console.log(arr); // [ 1, 5, 8, 10, 24 ]

//Перебор массива циклом - можно остановить (breack, continue)
for (let value of arr) {
    console.log(value);
}
// Перебор массива forEach - всегда перебирает весь массив
arr.forEach(function (item, i, arr) {
    console.log(`${i}: ${item}`);
});

// Модификация массива
let str = 'alfa, beta, omega';
console.log(str);
let products = str.split(', '); // в массив из строки с разделителем ', '
console.log(products);
const productsStr = products.join(' + '); // в строку из массива с разделителем ' + '
console.log(productsStr);

// Сортировка строчного массива по алфавиту
products = ['omefa', 'beta', 'alfa'];
console.log(products.sort());

// Сортировка числового массива по возрастанию
const array = [35, 23, 56, 67, 94, 12, 6, 3];

function compareNum(a, b) {
    return a - b; // Если по убыванию: b - a
}
array.sort(compareNum);
console.log(array);





// Свойство length — последний индекс +1
// arr[99] = 34;
// console.log(arr.length); // 100
// console.log(arr); //  [1, 5, 8, 10, 24, <94 empty items>, 34 ]
// arr.pop();
// console.log(arr); // [ 1, 5, 8, 10, 24, <94 empty items> ]