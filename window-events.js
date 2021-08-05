export const minimiseWindow = (clickTarget) => {
    const targetWindow = clickTarget.target.parentElement.parentElement;

    targetWindow.style.transform = 'translate(-50%, 200%)';
    targetWindow.style.height = '0';
    targetWindow.style.width = '0';
}

export const expandWindow = (clickTarget) => {
    const targetWindow = clickTarget.target.parentElement.parentElement;

    targetWindow.style.height = '100vh';
    targetWindow.style.width = '100vw';
    targetWindow.style.left = '0';
    targetWindow.style.bottom = '0';
    targetWindow.style.transform = 'translate(0, 0)';
}

export const closeWindow = (clickTarget) => {
    const targetWindow = clickTarget.target.parentElement.parentElement;

    document.querySelector('#root').removeChild(targetWindow);
}