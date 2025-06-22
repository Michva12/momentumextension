document.addEventListener('DOMContentLoaded', function() {
    function updateTime() {
        const timeElement = document.getElementById('time');
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        timeElement.textContent = `${hours}:${minutes}`;
    }

    function updateQuote() {
        const quoteElement = document.getElementById('quote');
        const randomIndex = Math.floor(Math.random() * quotes.length);
        quoteElement.textContent = quotes[randomIndex];
    }

    function updateWallpaper() {
        const wallpaperElement = document.getElementById('wallpaper');
        fetch('https://bingw.jasonzeng.dev/?index=random')
            .then(response => {
                wallpaperElement.style.backgroundImage = `url(${response.url})`;
            })
            .catch(error => {
                console.error('Error fetching wallpaper:', error);
                wallpaperElement.style.backgroundImage = 'url(https://source.unsplash.com/random/1920x1080)';
            });
    }

    updateTime();
    updateQuote();
    updateWallpaper();
    setInterval(updateTime, 1000);
}); 