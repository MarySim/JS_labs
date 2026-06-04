(function() {
    const fill = document.querySelector('.progress-fill');
    const loader = document.getElementById('loader-container');
    const mainApp = document.getElementById('main-app');
    let progress = 0;

    // Заполнение шкалы за 2000 мс (шаг в 5% каждые 100 мс)
    const timer = setInterval(() => {
        progress += 5;
        if (fill) fill.style.width = progress + '%';

        if (progress >= 100) {
            clearInterval(timer); // Деактивируем таймер
            loader.style.display = 'none'; // Скрываем лоадер
            mainApp.style.display = 'block'; // Показываем основной контент
        }
    }, 100);
})();