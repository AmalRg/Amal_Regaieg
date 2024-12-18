function calculateScore() {
    var score = 0;
    var correctAnswers = [];
    var answers = {
        q1: "a", // Paris
        q2: "a", // Shakespeare
        q3: "c", // Jupiter
        q4: "a", // George Washington
        q5: "c", // Tokyo
        q6: "a", // O
        q7: "b", // Albert Einstein
        q8: "b", // 1912
        q9: "c", // Avocado
        q10: "b"  // Vatican City
    };

    // parcourir chaque question et verifier si la proposition choisie est correcte
    for (var i = 1; i <= 10; i++) {
        var question = document.querySelector(`input[name="q${i}"]:checked`);
        if (question && question.value === answers[`q${i}`]) {
            score++;
            correctAnswers.push(`Question ${i}: ${question.labels[0].innerText}`);
        }
    }

    // Afficher le resultat
    document.getElementById("score").textContent = score;
    var answersList = document.getElementById("correct-answers");
    answersList.innerHTML = correctAnswers.map(answer => `<li>${answer}</li>`).join('');
    document.getElementById("result").style.display = "block";

    // Cacher le formulaire
    document.getElementById('quiz-form').style.display = 'none';
}

function restartQuiz() {
    // Réinitialiser le formulaire du quiz
    document.getElementById('quiz-form').reset();

    // Cacher les résultats et réafficher le formulaire
    document.getElementById('quiz-form').style.display = 'block';
    document.getElementById('result').style.display = 'none';
}