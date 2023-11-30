// DOM Manipulation





// getElementById()


// const title = document.getElementById('main-heading');

// console.log(title)



// getElementByClassName()


// const listItem = document.getElementsByClassName('list-items')
// console.log(listItem)



// getElementByTagName()


// const listItem = document.getElementsByTagName('li')
// console.log(listItem)



// querySelector()


// const container = document.querySelector('div');
// console.log(container);


// querySelectorAll()


// const container = document.querySelectorAll('div');
// console.log(container);

// const title = document.querySelector('#main-heading');
// title.style.color = 'red';

// console.log(title)


// const listItems = document.querySelectorAll(".list-items");

// for(i=0 ; i< listItems.length ; i++) {
//     listItems[i].style.fontSize = '2rem';
// }

// console.log(listItems);

// const ul = document.querySelector('ul');

// const li = document.createElement('li');

// ul.append(li);

// li.innerText = 'X-men'

// console.log(title.getAttribute('id'))

// li.setAttribute('id','main-heading');

let ul = document.querySelector('ul');

console.log(ul.previousElementSibling);

console.log(ul.nextElementSibling)

console.log(ul);
const div = document.querySelector('div');
console.log(div.childNodes)