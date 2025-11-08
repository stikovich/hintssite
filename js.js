 const deadline = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000); // Через неделю

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
            '<span>'+days+'</span> д. : '+
            '<span>'+hours+'</span> ч. : '+
            '<span>'+minutes+'</span> м. : '+
            '<span>'+seconds+'</span> с.';
    }

    setInterval(updateTimer, 1000); // Обновляем каждые секунду