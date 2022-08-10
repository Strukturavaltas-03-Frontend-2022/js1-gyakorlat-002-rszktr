/*
- A `js/main.js` fájlban dolgozz!
- Írj egy olyan függvénykifejezést, amely paraméterként egy string-eket tartalmazó tömböt kap (inputellenőrzést nem kell végezni), és __visszaad__ egy HTML-template-et (string)! 
- A függvény neve `generateList` legyen!
- A HTML-template egy lista, amelynek a listaelemei a kapott tömb értékeit tartalmazzák.
*/

['első', 'második', 'harmadik']

/* 
Látszólag egy objektumot kapok, ami mégsem objektum, így a JSON.stringify() üresen tér vissza

const generateList = (array) => {
    let ul = document.createElement('ul');
    let li;

    array.forEach(item => {
        li = document.createElement('li');
        li.appendChild(document.createTextNode(item));
        ul.appendChild(li);
    })
    console.log(ul);
} 
*/

const generateList = (array) => {
    let li = [];
    array.forEach(item => li.push('<li>' + item + '</li>'));
    
    return ('<ul>' + li.join("") + '</ul>');
};
