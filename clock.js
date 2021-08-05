const showClock = () => {
    const today = new Date();
    let hours = today.getHours();
    let minutes = today.getMinutes();

    if (hours <= 9) {
        hours = `0${hours}`;
    }

    if (minutes <= 9) {
        minutes = `0${minutes}`;
    }

    document.querySelector('#live-clock').innerHTML = `${hours}:${minutes}`;
}

export default showClock;