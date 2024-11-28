// script.js
function checkKey() {
  const input = document.getElementById("key").value.trim().toLowerCase();
  const validKey = "календарь"; // Правильное слово
  const errorMessage = document.getElementById("error-message");
  const linkContainer = document.getElementById("link-container");

  // Очищаем предыдущие сообщения
  errorMessage.textContent = "";
  linkContainer.innerHTML = ""; // Очищаем предыдущую ссылку

  if (input === validKey) {
    // Создаем элемент с ссылкой
    const link = document.createElement("a");
    link.href = "https://ваша_ссылка.com"; // Замените на вашу ссылку
    link.textContent = "Перейти по ссылке";
    link.target = "_blank"; // Открытие ссылки в новой вкладке

    // Добавляем ссылку на страницу
    linkContainer.appendChild(link);
  } else {
    // Если введено неверное слово, показываем сообщение об ошибке
    errorMessage.textContent = "Неверное слово! Попробуйте снова.";
  }
}
