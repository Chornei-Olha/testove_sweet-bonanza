document.getElementById("bonus-btn").addEventListener("click", function () {
  alert("Бонус активирован!");
});

document
  .getElementById("registration")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    alert(`Регистрация успешна! Добро пожаловать, ${username}!`);

    this.reset();
  });
