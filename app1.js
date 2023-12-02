const buttonTwo = document.querySelector('.btn-2');

function alertBtn() {
    alert('I also love Javascript')
}

buttonTwo.addEventListener("click" , alertBtn)


const newBackgroundColor = document.querySelector('.box-3');

console.log(newBackgroundColor);

function changeBgColor() {
    newBackgroundColor.style.backgroundColor = 'blue' ;
} ;

newBackgroundColor.addEventListener("mouseover", changeBgColor);