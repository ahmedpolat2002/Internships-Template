let questions = Array.from(document.querySelectorAll(".question"));
let answers = Array.from(document.querySelectorAll(".answer"));

questions.forEach((ques, index) => {
  ques.addEventListener("click", () => {
    if (ques.classList.contains("active")) {
      ques.classList.remove("active");
      answers[index].classList.toggle("hidden");
    } else {
      questions.forEach((ques) => {
        ques.classList.remove("active");
      });
      ques.classList.add("active");

      answers.forEach((ans) => {
        ans.classList.add("hidden");
      });
      answers[index].classList.toggle("hidden");
    }
  });
});
