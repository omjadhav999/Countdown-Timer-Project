// Set the date of the event (year, month (zero-based), day, hour, minute, second)
const eventDate = new Date(2024, 11, 31, 23, 59, 59).getTime();

const countdown = setInterval(() => {
    const now = new Date().getTime();
    const distance = eventDate - now;

    if (distance < 0) {
        clearInterval(countdown);
        document.getElementById('countdown').innerHTML = '<h2>Event Over!</h2>';
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('days').innerText = days;
    document.getElementById('hours').innerText = hours;
    document.getElementById('minutes').innerText = minutes;
    document.getElementById('seconds').innerText = seconds;
}, 1000);
