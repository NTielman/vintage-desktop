import toggleTab from './tab-events.js';

const createCheckbox = (windowTitle, tabId) => {
    const tabCheckbox = document.createElement('input');

    tabCheckbox.setAttribute("type", "checkbox");
    tabCheckbox.setAttribute("name", `${windowTitle}-${tabId}`);
    tabCheckbox.setAttribute("id", `${windowTitle}-${tabId}`);
    tabCheckbox.setAttribute("checked", "true");
    tabCheckbox.addEventListener('change', toggleTab);

    return tabCheckbox;
}

const createLabel = (windowTitle, tabId) => {
    const tabTitle = document.createElement('label');
    tabTitle.setAttribute("for", `${windowTitle}-${tabId}`);
    tabTitle.textContent = windowTitle;

    return tabTitle;
}

const createNewTab = (windowTitle) => {
    // give each tab a unique id
    const tabId = document.querySelectorAll('.tab').length;
    const myTab = document.createElement('li');
    myTab.classList.add('tab');

    // insert mini icon here

    const tabCheckbox = createCheckbox(windowTitle, tabId);
    const tabTitle = createLabel(windowTitle, tabId);

    const myTabElems = [tabCheckbox, tabTitle];
    myTabElems.forEach(elem => {
        myTab.appendChild(elem);
    })

    return myTab;
}

export default createNewTab;