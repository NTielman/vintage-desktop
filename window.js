import { minimiseWindow, expandWindow, closeWindow } from './window-events.js';

const createToolbar = () => {
    const toolbar = document.createElement('header');
    toolbar.classList.add('window-toolbar');

    const toolbarButtons = ["minimise", "expand", "close"];
    toolbarButtons.forEach(btn => {
        const newBtn = document.createElement('button');
        newBtn.classList.add('btn', btn);

        switch (btn) {
            case "minimise":
                newBtn.textContent = "-";
                newBtn.addEventListener('click', (e) => {
                    minimiseWindow(e);
                    // uncheck tab in startmenu footer
                });
                break;
            case "expand":
                newBtn.textContent = "H";
                newBtn.addEventListener('click', expandWindow)
                break;
            case "close":
                newBtn.textContent = "X";
                newBtn.addEventListener('click', (e) => {
                    closeWindow(e)
                    // remove tab from startmenu
                })
                break;
        }

        toolbar.appendChild(newBtn);
    })

    return toolbar;
}

const createSearchBar = () => {
    const searchBar = document.createElement('form');
    searchBar.classList.add('search-bar');

    const inputField = document.createElement('input');
    inputField.setAttribute("type", "search");
    inputField.setAttribute("name", "searchfield");
    inputField.setAttribute("id", "window-search");

    const searchBtn = document.createElement('button');
    searchBtn.textContent = "?";
    searchBtn.classList.add("btn", "search");
    // add eventlistener onclick fetches and updates windowitems

    searchBar.appendChild(inputField);
    searchBar.appendChild(searchBtn);

    return searchBar;
}

const createWindowItems = (searchResults) => {
    const { results } = searchResults;
    // windowitems events reset() update()
    if (results) {
        const windowList = document.createElement('ul');
        windowList.classList.add('window-list');

        results.forEach(resultItem => {
            const listItem = document.createElement('li');
            listItem.classList.add("window-item");
            // add item icon or image here
            listItem.textContent = `${resultItem.name}`;
            // add eventlistener onclick fetches item info updates infobar
            windowList.appendChild(listItem);
        })

        return windowList;
    } else { // create div with "no results found"
        const emptyWindow = document.createElement('div');
        const placeholderText = document.createElement('p');
        placeholderText.textContent = 'No results found';
        emptyWindow.appendChild(placeholderText);

        return emptyWindow;
    }
}

export const createInfoBar = (itemInfo) => {
    const aside = document.createElement('aside');
    aside.classList.add("item-info-container");

    // infobar events reset() update()
    if (itemInfo) {
        // show image and overige item info
        // append to aside
    }

    return aside;
}

const createStatusBar = (searchResults) => {
    const { info } = searchResults;
    const footer = document.createElement('footer');
    footer.classList.add('window-footer');

    if (info) {
        const itemCount = document.createElement('span');
        itemCount.classList.add('item-count');
        itemCount.textContent = `${info.count} items`;

        footer.appendChild(itemCount);

        const footerButtons = ["prev", "next"];
        footerButtons.forEach(btn => {
            const newBtn = document.createElement('button');
            newBtn.classList.add('btn', btn);

            switch (btn) {
                case "prev":
                    newBtn.innerHTML = "&lt;";
                    // add eventlistener click show prev page
                    break;
                case "next":
                    newBtn.innerHTML = "&gt;";
                    // eventlistener click show nextpage
                    break;
            }
            footer.appendChild(newBtn);
        })
    }

    return footer;
}

const createNewWindow = (searchResults) => {
    const myWindow = document.createElement('div');
    myWindow.classList.add('window');
    myWindow.setAttribute("draggable", "true");

    const toolbar = createToolbar();
    const searchBar = createSearchBar();
    const windowContent = createWindowItems(searchResults);
    const aside = createInfoBar();
    const statusBar = createStatusBar(searchResults);

    const myWindowElems = [toolbar, searchBar, windowContent, aside, statusBar];

    myWindowElems.forEach(elem => {
        myWindow.appendChild(elem);
    })

    return myWindow;
}

export default createNewWindow;