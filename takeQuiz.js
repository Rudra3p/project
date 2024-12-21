const quizTitleElement = document.querySelector("#quizTitle");
const quizContainer = document.querySelector("#quizContainer");
const submitQuizBtn = document.querySelector("#submitQuizBtn");
const quizResult = document.querySelector("#quizResult");

// Retrieve quiz data from localStorage
const quizData = JSON.parse(localStorage.getItem("quizData"));

if (quizData) {
  quizTitleElement.textContent = quizData.title;

  // Render quiz questions
  quizData.questions.forEach((q, index) => {
    const questionDiv = document.createElement("div");
    questionDiv.className = "quizQuestion";
    questionDiv.innerHTML = `<p>${index + 1}. ${q.question}</p>`;

    q.options.forEach((option) => {
      const optionDiv = document.createElement("div");
      optionDiv.innerHTML = `
        <label>
          <input type="radio" name="question-${index}" value="${option}" />
          ${option}
        </label>`;
      questionDiv.appendChild(optionDiv);
    });

    quizContainer.appendChild(questionDiv);
  });

  submitQuizBtn.style.display = "block";
}

// Handle quiz submission
submitQuizBtn.addEventListener("click", () => {
  const selectedAnswers = Array.from(
    quizContainer.querySelectorAll("input[type='radio']:checked")
  );

  if (selectedAnswers.length < quizData.questions.length) {
    alert("Please answer all questions before submitting!");
    return;
  }

  let score = 0;
  quizData.questions.forEach((q, index) => {
    if (
      selectedAnswers[index] &&
      selectedAnswers[index].value === q.correctAnswer
    ) {
      score++;
    }
  });

  quizResult.innerHTML = `Your score is <strong>${score}</strong> out of <strong>${quizData.questions.length}</strong>.`;
  submitQuizBtn.style.display = "none";
});
