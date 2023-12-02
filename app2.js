const revealBtn = document.querySelector('.reveal-btn');

const hiddenContent = document.querySelector('.hidden-content');

const hideBtn = document.querySelector('.hide-btn');

function revealContent() {
    hiddenContent.classList.add('reveal-btn');
    revealBtn.classList.add('hide-btn')
    hideBtn.classList.add('show-btn')
}

function hideContent(){
    hiddenContent.classList.remove('reveal-btn');
    revealBtn.classList.remove('hide-btn');
    hideBtn.classList.remove('show-btn');
}


revealBtn.addEventListener('click',revealContent);

hideBtn.addEventListener('click', hideContent)