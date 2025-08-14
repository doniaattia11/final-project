const bookExamples = {
  "fantasy": ["Harry Potter", "The Hobbit"],
  "science": ["A Brief History of Time", "The Selfish Gene"],
  "history": ["Guns, Germs, and Steel", "The Silk Roads"],
  "romance": ["Pride and Prejudice", "Me Before You"],
};

const form = document.getElementById("categoryForm");
const input = document.getElementById("categoryInput");
const result = document.getElementById("result");

form.addEventListener("submit", function(e) {
  e.preventDefault();
  const key = input.value.trim().toLowerCase();
  if (bookExamples[key]) {
    result.textContent = "Examples: " + bookExamples[key].join(", ");
  } else {
    result.textContent = "Sorry, we have no examples for that category.";
  }
  result.style.opacity = 1;
});