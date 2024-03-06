window.onload = function() {
    // Получаем случайный совет
    var tip = getRandomTip();

    // Находим модальное окно и текстовый элемент
    var modal = document.getElementById("myModal");
    var tipText = document.getElementById("tipOfTheDay");

    // Устанавливаем текст совета в модальное окно
    tipText.innerText = tip;

    // Показываем модальное окно
    modal.style.display = "block";

    // Находим кнопку закрытия модального окна
    var closeButton = document.getElementsByClassName("close")[0];

    // Закрываем модальное окно при нажатии на кнопку закрытия
    closeButton.onclick = function() {
        modal.style.display = "none";
    }

    // Закрываем модальное окно, если пользователь кликает вне его
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
};
