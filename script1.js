const fruit = 'Some fruit';
console.log(fruit.indexOf('u')); // 7 - позиция символа в строке
console.log(fruit.indexOf('j')); // -1 - этого символа нет

console.log(fruit.slice(5, 10)); // 'fruit' - с 5 по 10 позиция, не включая 10
console.log(fruit.slice(5)); // 'fruit' - с 5 до конца
console.log(fruit.slice(-4)); // 'fruit' - в обратную сторону - с конца строки, 4 симв

console.log(fruit.substring(5, 10)); // аналогично sclice, нельзя отрицательные

console.log(fruit.substr(5, 3)); // 'fru' - начиная с 5 символа, всего 3 символа

const num = 12.2;
console.log(Math.round(num)); //12 - округление до ближайшего целого
const test = '12.768px';
console.log(parseInt(test)); // 12 - целое число
console.log(parseFloat(test)); // 12.768 - дробное число