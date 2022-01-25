// https://www.mattmorgante.com/technology/sticky-navigation-bar-javascript

const nav = document.querySelector('#navbar');
const navTop = nav.offsetTop;

function stickNavigation() {
    console.log('navTop = ' + navTop);
    console.log('scrollY = ' + window.scrollY);
}