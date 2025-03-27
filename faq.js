document.addEventListener("DOMContentLoaded", function () {
    const questions = document.querySelectorAll('.faq-question');

    questions.forEach(question => {
        question.addEventListener('click', function () {
            const answer = this.nextElementSibling;

            // Закрываем все ответы
            document.querySelectorAll('.faq-answer').forEach(ans => {
                if (ans !== answer) {
                    ans.classList.remove('open');
                    ans.style.maxHeight = 0; // Скрываем другие ответы
                }
            });

            // Переключаем текущий ответ
            answer.classList.toggle('open');
            if (answer.classList.contains('open')) {
                answer.style.maxHeight = answer.scrollHeight + "1px"; // Устанавливаем max-height
            } else {
                answer.style.maxHeight = 0; // Скрываем ответ
            }
        });
    });
});