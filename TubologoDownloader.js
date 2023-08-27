// ==UserScript==
// @name         TURBOLOGO DOWNLOADER
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://turbologo.ru/designs/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=turbologo.ru
// @grant    GM_addStyle
// ==/UserScript==

(function() {
    // Функция для проверки наличия элемента canvas
    function checkCanvas() {
        var canvas = document.querySelector('.editor_canvas__element--logo');

        if (canvas) {
            // Создаем кнопку
            var downloadButton = document.createElement('button');
            downloadButton.innerHTML = 'Download Image'; // Текст на кнопке
            downloadButton.className = 'download-button'; // Добавляем класс кнопке

            // Добавляем обработчик события при нажатии на кнопку
            downloadButton.addEventListener('click', function() {
                // Создаем ссылку для скачивания
                var downloadLink = document.createElement('a');
                downloadLink.href = canvas.toDataURL(); // Получаем данные изображения из canvas
                downloadLink.download = 'canvas_image.png'; // Имя файла для скачивания

                // Добавляем ссылку на страницу
                document.body.appendChild(downloadLink);

                // Нажимаем на ссылку для скачивания
                downloadLink.click();

                // Удаляем ссылку
                document.body.removeChild(downloadLink);
            });

            // Добавляем кнопку на страницу
            document.body.appendChild(downloadButton);

            // Добавляем стили кнопке с использованием GM_addStyle
            GM_addStyle('.download-button { position: fixed; top: 10px; right: 10px; z-index: 9999; background-color: #4CAF50; color: white; padding: 10px 20px; border: none; border-radius: 4px; cursor: pointer; } .download-button:hover { background-color: #45a049; }');
        } else {
            // Если элемент не найден, повторяем попытку через 500 миллисекунд
            setTimeout(checkCanvas, 500);
        }
    }

    // Запускаем функцию проверки наличия элемента canvas
    checkCanvas();
})();
