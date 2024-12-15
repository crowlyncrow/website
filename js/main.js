document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Останавливаем стандартную отправку формы
    
    // Получаем значения из полей формы
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Простая валидация (например, проверка на пустые поля)
    if (!name || !email || !message) {
        alert("Будь ласка, заповніть всі поля!");
        return;
    }

    // Показываем сообщение об успешной отправке
    const formMessage = document.getElementById('form-message');
    formMessage.classList.remove('d-none');
    
    // Очистим форму после отправки
    document.getElementById('contact-form').reset();
});

