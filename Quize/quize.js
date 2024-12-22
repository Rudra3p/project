// Declare variables
const quizTitle = document.querySelector("#quizTitle");
const quizForm = document.querySelector("#createQuizForm");
const quizContainer = document.querySelector("#quizContainer");
const addQuestionBtn = document.querySelector("#addQuestionBtn");
const quizSubmitTitle = document.querySelector("#quizSubmitTitle");
const takeQuizContainer = document.querySelector("#takeQuizContainer");
const submitQuizBtn = document.querySelector("#submitQuizBtn");
const quizResult = document.querySelector("#quizResult");
const hide = document.querySelector("#display_create_container");

let quizData = { title: "", questions: [] };

// Add a new question
addQuestionBtn.addEventListener("click", () => {
  const questionBox = document.createElement("div");
  questionBox.className= "questionBox"

  // Add question input
  const questionInput = document.createElement("input");
  questionInput.placeholder = "Enter your question";
  questionInput.required = true;
  questionInput.className = "questionInput"

  // Add options inputs
  const options = Array.from({ length: 4 }, (_, index) => {
    const optionInput = document.createElement("input");
    optionInput.className = "questionOption";
    optionInput.placeholder = `${index + 1}. Option`;
    optionInput.required = "required";
    return optionInput;
  });

  // Add correct answer input
  const correctAnswerInput = document.createElement("input");
  correctAnswerInput.type = "text";
  correctAnswerInput.placeholder =
    "Enter correct answer (must match an option)";
  correctAnswerInput.required = true;
  correctAnswerInput.className = "correctAnswer"

  // Append all inputs to the question box
  questionBox.appendChild(questionInput);
  options.forEach((option) => questionBox.appendChild(option));
  questionBox.appendChild(correctAnswerInput);

  quizContainer.appendChild(questionBox);
});

// Handle quiz form submission
quizForm.addEventListener("submit", (event) => {
  event.preventDefault();

  quizData.title = quizTitle.value;
  quizData.questions = Array.from(quizContainer.children).map((questionBox) => {
    const questionInput = questionBox.querySelector("input:first-child");
    const optionInputs = questionBox.querySelectorAll(".questionOption");
    const correctAnswerInput = questionBox.querySelector("input:last-child");

    return {
      question: questionInput.value,
      options: Array.from(optionInputs).map((option) => option.value),
      correctAnswer: correctAnswerInput.value,
    };
  });

  renderQuiz();
});

// Render the quiz for taking
const renderQuiz = () => {
  
  hide.style.display = "none"

  takeQuizContainer.innerHTML = `<h2 class="show_quiz_title">${quizData.title}</h2>`;

  quizData.questions.forEach((q, index) => {
    const questionDiv = document.createElement("div");
    questionDiv.textContent = `${index + 1}. ${q.question}`;

    q.options.forEach((option) => {
      const optionDiv = document.createElement("div");
      optionDiv.innerHTML = `
        
          <input type="radio" name="question-${index}" value="${option}" />${option}
        `;
      questionDiv.appendChild(optionDiv);
    });

    takeQuizContainer.appendChild(questionDiv);
  });

  submitQuizBtn.style.display = "block";
};

// Handle quiz submission
submitQuizBtn.addEventListener("click", () => {
  const selectedAnswers = Array.from(
    takeQuizContainer.querySelectorAll("input[type='radio']:checked")
  );

  let score = 0;

  quizData.questions.forEach((q, index) => {
    if (
      selectedAnswers[index] &&
      selectedAnswers[index].value === q.correctAnswer
    ) {
      score++;
    }
  });

  quizResult.innerHTML = `<p>Your score is ${score} out of ${quizData.questions.length}</p>
  <a href="quize.html" id="back_button">&larr; Back</a>
  `;
  
});