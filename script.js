const btn = document.querySelector(".switchMode");
// Выбираем таблицу стилей
const theme = document.querySelector("#theme");
// Отслеживаем щелчок по кнопке
btn.addEventListener("click", function() {
  // Если текущий адрес содержит "light-theme.css"
  if (theme.getAttribute("href") == "style.css") {
    // …то переключаемся на "dark-theme.css"
    theme.href = "style-dark.css";
    // В противном случае… 
  } else {
    // …переключаемся на "light-theme.css"
    theme.href = "style.css";
  }
});
