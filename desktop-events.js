import createNewWindow from './window.js';
import createNewTab from './tab.js';
import fetchItems from './api-client.js';

const openWindow = async (clickTarget) => {
    try {
        const results = await fetchItems(clickTarget);
        const newWindow = createNewWindow(results);
        document.querySelector('#root').appendChild(newWindow);

        const newTab = createNewTab(clickTarget);
        document.querySelector('#tabs').appendChild(newTab);

    } catch (e) {
        console.warn(e);
    }
}

export default openWindow;