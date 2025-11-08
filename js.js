    // Получаем начальное время из localStorage или устанавливаем новую цель
    let startDate = localStorage.getItem('startDate');
    if (!startDate) { // Если стартового времени нет, ставим новый таймер
        startDate = new Date().toISOString(); // Текущая дата
        localStorage.setItem('startDate', startDate); // Сохраняем в хранилище
    }

    // Преобразуем строку обратно в объект Date
    startDate = new Date(startDate);

    // Фиксированная дата конца отсчета (можно менять на нужную)
    const deadline = new Date("December 15, 2025");

    function updateTimer() {
        const now = new Date();
        let timeLeft = deadline.getTime() - now.getTime(); // Остаточное время в миллисекундах

        if(timeLeft <= 0){
            document.querySelector('#timer').innerHTML = 'Время вышло!';
            return;
        }

        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.querySelector('#timer').innerHTML =
            `<span>${days}</span> д. : ` +
            `<span>${hours}</span> ч. : ` +
            `<span>${minutes}</span> м. : ` +
            `<span>${seconds}</span> с.`;
    }

    setInterval(updateTimer, 1000); // Обновляем каждую секунду
