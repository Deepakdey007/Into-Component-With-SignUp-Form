const btn = document.querySelector('[type="submit"]');
const inputs = document.querySelectorAll("input");

function validateInputs(e) {

  e.preventDefault();

  let msge = document.querySelector("#message");
  let email = document.querySelector('[type="email"]');

  inputs.forEach((input) => {
    const errorText = input.parentElement.querySelector(".error-text");
    const errorIcon = input.parentElement.querySelector(".error-icon");
    if (!input.value) {
      input.setAttribute("style", "border:2px solid hsl(0, 100%, 74%)");
      input.removeAttribute("placeholder");
      errorText.classList.add("visible");
      errorIcon.classList.add("visible");
    }

    if(!validateEmail(email.value)) {
        if(email.value == ""){
            console.log("empty");
            msge.textContent = "Email address can not be empty"; 
        }
        else{
            msge.textContent = "Looks like this is not an email"; 
            email.setAttribute("style", "color:hsl(0, 100%, 74%);border:2px solid hsl(0, 100%, 74%)")
        }

        console.log(input);
        console.log(email);
      errorText.classList.add("visible");
      errorIcon.classList.add("visible");
    } 

    input.addEventListener("input", function () {
      if (input.value) {
        // console.log(input);

        input.setAttribute(
          "style",
          "border:2px solid hsl(246, 25%, 77%, 0.3); color:hsl(249, 10%, 26%); font-weight:700"
        );
        errorIcon.classList.remove("visible");
        errorText.classList.remove("visible");
      }
    });
  });
}

function validateEmail(email) {
    if(email == "") {
        return "";
    }
    var regEx =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regEx.test(String(email).toLowerCase());
}

btn.addEventListener("click", validateInputs);
