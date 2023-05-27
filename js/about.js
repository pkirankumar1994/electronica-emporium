const form = document.querySelector("#feedback-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const messageInput = document.querySelector("#message");

// add event listener to form on submit
form.addEventListener("submit", function(e) {
  e.preventDefault(); // prevent default form submission

  // validate inputs
  if (nameInput.value === "" || emailInput.value === "" || messageInput.value === "") {
    alert("Please fill in all fields");
    return;
  }

  // send form data to server using fetch
  fetch("https://example.com/feedback", {
    method: "POST",
    body: JSON.stringify({
      name: nameInput.value,
      email: emailInput.value,
      message: messageInput.value
    }),
    headers: {
      "Content-type": "application/json"
    }
  })
  .then(response => response.json())
  .then(data => {
    // show success message
    alert("Thank you for your feedback!");
    
    // reset form
    form.reset();
  })
  .catch(error => {
    // show error message
    alert("An error occurred while submitting your feedback. Please try again later.");
  });
});
