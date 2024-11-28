<!DOCTYPE html>
<html>
<head>
  <title>Введите ключ</title>
  <script>
    function checkKey() {
      const input = document.getElementById("key").value;
      if (input === "календарь") {
        window.location.href = "https://ваша_ссылка.com";
      } else {
        alert("Неверное слово!");
      }
    }
  </script>
</head>
<body>
  <h1>Введите ключ</h1>
  <input type="text" id="key" placeholder="Введите слово">
  <button onclick="checkKey()">Проверить</button>
</body>
</html>
