//'use strict';

const box = document.getElementById('box'),
    btns = document.getElementsByTagName('button'),
    circles = document.getElementsByClassName('circle'),
    wrapper = document.querySelector('.wrapper'),
    hearts = wrapper.querySelectorAll('.heart'),
    oneHeart = wrapper.querySelector('.heart');

//просмотр свойства и методов объекта
// style - инлайн свойства (стили в html файле)
console.dir(box);

//Изменение инлайн свойствa style
box.style.backgroundColor = 'yellow';
box.style.width = '500px';
btns[1].style.backgroundColor = 'red';
circles[0].style.backgroundColor = 'forestgreen';


//Изменение группы инлайн свойств
box.style.cssText = 'border-radius: 20px; width: 600px';
//Можно переменную
let rad = 50;
box.style.cssText = `border-radius: ${rad}px; width: 600px; border: 1px solid #000;`;
// Можно циклом
// for (let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = 'green';
// }
hearts.forEach(item => {
    item.style.backgroundColor = 'orange';
});

//Создание элемента
const div = document.createElement('div'); //создаём
//const text = document.createTextNode('Добавочный текст');

div.classList.add('black'); // добавляем элементу класс 'black'
document.body.append(div); // вставляем наш div в конец <body>
//document.body.appendChild(div); // то же в старом синтаксисе


//Добавление без использования переменной В КОНЕЦ родителя
//Используем, если это единичный случай в проекте
//document.querySelector('.wrapper').append(div);

//Добавление В НАЧАЛО родителя
//wrapper.prepend(div);

//Добавление ПЕРЕД элементом
hearts[1].before(div);
//Старый синтаксис:
//wrapper.insertBefore(div, hearts[1]); // вставляем div перед hearts[1]
//Добавление ПОСЛЕ элемента
//hearts[1].after(div);

//Удаление элемента
//hearts[1].remove();
//Старый синтаксис (всегда начинался с родителя)
//wrapper.removeChild(hearts[1]);

//Замена (перемещение) элемента на другой существующий
//Вырезать - вставить
hearts[0].replaceWith(circles[0]);
//То же в старом синтаксисе:
//wrapper.replaceChild(circles[0], hearts[0]);

//Добавление простого текста
//div.textContent = 'Текст';

//Добавление текста с тегами
div.innerHTML = "<h1>Текст</h1>";

//Вставка блока кода HTML в нужное место
//div.insertAdjacentHTML('beforebegin', '<h2>Привет</h2>'); //перед элементом
//div.insertAdjacentHTML('afterbegin', '<h2>Привет</h2>'); //внутри перед элементом
//div.insertAdjacentHTML('afterend', '<h2>Привет</h2>'); //после элемента
div.insertAdjacentHTML('beforeend', '<h2>Привет</h2>'); //внутри после элемента