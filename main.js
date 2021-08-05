import showClock from './clock.js';
import openWindow from './desktop-events.js';

const myClock = setInterval(showClock, 1000);
const menuItems = document.querySelectorAll('.menu-item');
const desktopItems = document.querySelectorAll('.desktop-item');
const desktopElems = [menuItems, desktopItems];

// setup desktop eventhandlers
desktopElems.forEach(elems => {
    elems.forEach(elem => {
        elem.addEventListener('click', () => {
            openWindow(elem.textContent.slice(0, -1));
        })
    })
})