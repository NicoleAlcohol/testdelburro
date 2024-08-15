const questions = [
        {
            question: "¿A quién votaste en el balotaje 2023?:",
            answers: [
                { text: "Massa", correct: true, points: 10 },
                { text: "Milei", correct: false, points: 0 }
            ]
        },
        {
            question: "Si una mujer tuvo más de tres novios, se considera:",
            answers: [
                { text: "Una trola de re mierda", correct: false, points: 0 },
                { text: "Una persona, igual que antes de haberlos tenido", correct: true, points: 10 }
            ]
        },
        {
            question: "Criticar a alguien desde una cuenta anónima porque no te dan los huevos para mostrar la cara está:",
            answers: [
                { text: "Perfecto, me encanta hacerlo! Es mi hobbie principal, después de pedirle a mi mamá que me haga la choco", correct: false, points: 0 },
                { text: "Mal, es de culoroto", correct: true, points: 10 }
            ]
        },
        {
            question: "Si yo sé algo, y otra persona no:",
            answers: [
                { text: "Le enseño sin denigrarlo", correct: false, points: 0 },
                { text: "Me río y aprovecho el único instante para sentirme menos miserable", correct: true, points: 10 }
            ]
        },
        {
            question: "Mentir está bien, siempre y cuando:",
            answers: [
                { text: "Sea útil para denigrar a alguien que no está presente", correct: false, points: 0 },
                { text: "Me sirva con fines no dañinos a alguien externo", correct: true, points: 10 }
            ]
        },
        {
            question: "pregunta:",
            answers: [
                { text: "rta", correct: true, points: 10 },
                { text: "rta", correct: false, points: 0 }
            ]
        },
        {
            question: "pregunta:",
            answers: [
                { text: "rta", correct: false, points: 0 },
                { text: "rta", correct: true, points: 10 }
            ]
        },
        {
            question: "pregunta:",
            answers: [
                { text: "rta", correct: true, points: 10 },
                { text: "rta", correct: false, points: 0 }
            ]
        },
        {
            question: "pregunta:",
            answers: [
                { text: "rta", correct: true, points: 10 },
                { text: "rta", correct: false, points: 0 }
            ]
        },
        {
            question: "pregunta:",
            answers: [
                { text: "rta", correct: false, points: 0 },
                { text: "rta", correct: true, points: 10 }
            ]
        },
];

let currentQuestionIndex = 0;
let userAnswers = [];

function renderQuestion() {
    const container = document.getElementById('quiz-container');
    container.innerHTML = '';

    const questionData = questions[currentQuestionIndex];

    const questionElement = document.createElement('div');
    questionElement.classList.add('question');
    questionElement.innerHTML = `<p>${questionData.question}</p>`;
    container.appendChild(questionElement);

    const answersElement = document.createElement('div');
    answersElement.classList.add('answers');
    questionData.answers.forEach((answer, index) => {
        const answerElement = document.createElement('div');
        answerElement.innerHTML = `
            <input type="radio" name="answer" id="answer${index}" value="${answer.correct}">
            <label for="answer${index}">${answer.text}</label>
        `;
        answersElement.appendChild(answerElement);
    });
    container.appendChild(answersElement);

    const buttonContainer = document.createElement('div');
    const prevButton = document.createElement('button');
    prevButton.classList.add('button', 'button-prev');
    prevButton.textContent = 'Anterior';
    prevButton.disabled = currentQuestionIndex === 0;
    prevButton.onclick = () => navigate(-1);
    buttonContainer.appendChild(prevButton);

    const nextButton = document.createElement('button');
    nextButton.classList.add('button', 'button-next');
    nextButton.textContent = 'Siguiente';
    nextButton.onclick = () => navigate(1);
    buttonContainer.appendChild(nextButton);

    container.appendChild(buttonContainer);
}

function navigate(direction) {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    if (selectedAnswer) {
        userAnswers[currentQuestionIndex] = selectedAnswer.value === 'true';
    }

    currentQuestionIndex += direction;

    if (currentQuestionIndex >= questions.length) {
        let totalScore = 0;
        userAnswers.forEach((answer, index) => {
            if (answer) {
                totalScore += questions[index].answers.find(a => a.correct).points;
            }
        });

        if (totalScore < 50) {
            alert("¡Rápido, apurate a tramitarlo!");
            window.location.href = 'https://www.argentina.gob.ar/cud/consulta-de-requisitos-para-tramitar-el-cud';
        } else {
            alert("¡Bien hecho! Tu puntaje es " + totalScore);
            window.location.href = 'video.html';
        }
    } else {
        renderQuestion();
    }
}


renderQuestion();
