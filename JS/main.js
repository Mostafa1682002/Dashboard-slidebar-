let search = document.querySelector('.search');
let searchForm = document.querySelector('header form');
let user = document.querySelector('.user');
let portfolioo = document.querySelector('.portfolioo');
let menu = document.querySelector('.menu');
let slidebar = document.querySelector('.slidebar');
let btnClose = document.querySelector('.slidebar .close')
    //Seach Icon Click
search.onclick = function() {
        //Toggle from Search 
        searchForm.classList.toggle('active');
        //Remove active from portfolioo 
        portfolioo.classList.remove('active');
    }
    //user Icon Click
user.onclick = function() {
    //Toggle portfolioo
    portfolioo.classList.toggle('active');
    //Remove active from Search 
    searchForm.classList.remove('active');
}

//menu Icon Click
menu.onclick = () => {
        //Toggle Slidebar
        slidebar.classList.toggle('active');
        document.body.classList.toggle('active');
        //Remove active from Search 
        searchForm.classList.remove('active');
        //Remove active from portfolioo 
        portfolioo.classList.remove('active');
    }
    //Close Slidebar
btnClose.onclick = () => {
    slidebar.classList.remove('active');
    document.body.classList.remove('active');
}

window.onscroll = () => {
    if (window.innerWidth < 1000) {
        slidebar.classList.remove('active');
        document.body.classList.remove('active');
    }
}

let year = document.querySelector('.year').innerHTML = new Date().getFullYear();

//all playList Links
let allLinksPlaylist = document.querySelectorAll('.links');
allLinksPlaylist.forEach(function(element) {
    element.addEventListener('click', goToWatchPage(element))
});

function goToWatchPage(e) {
    e.onclick = function() {
        window.location.href = 'watch.html';
    }
}



let iconToggle = document.querySelector('.toggle');
let darkMode = localStorage.getItem('dark-mode');

function enableDarkMode() {
    iconToggle.classList.replace('fa-sun', 'fa-moon')
    document.body.classList.add('dark')
    localStorage.setItem('dark-mode', 'enabled')
}

function disableDarkMode() {
    iconToggle.classList.replace('fa-moon', 'fa-sun')
    document.body.classList.remove('dark')
    localStorage.setItem('dark-mode', 'disabled')
}
if (darkMode === 'enabled') {
    enableDarkMode();
}
iconToggle.addEventListener('click', (e) => {
    let darkMode = localStorage.getItem('dark-mode');
    if (darkMode === 'disabled') {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
})