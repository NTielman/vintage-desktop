const toggleTab = (clickTarget) => {
    const targetId = parseInt(clickTarget.target.id.split('-')[1]);

    if (clickTarget.target.checked) {
        // find corresponding target window using #root and child[id]
        // Open, expand corresponding window
        console.log('opening window');
    } else {
        // find corresponding target window using #root and child[id]
        // minimise corresponding window
        console.log('minimising window');
    }
}

export default toggleTab;