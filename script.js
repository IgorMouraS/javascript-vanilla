
document.addEventListener("DOMContentLoaded", function () {
    let submitBtn = document.querySelector("#submit-btn");
    let form = document.querySelector("#form");
    let text = document.querySelector("#text");
    let pattern = /[^ ]+@[^ ]+\.[a-z]{1,}(?:\.[a-z]{1,})?$/i;

    submitBtn.addEventListener("click", (e) => {
        e.preventDefault();

        validation()
    })

    function validation() {
        let email = document.querySelector("#email").value;
        if (pattern.test(email)) {
            form.classList.add("valid");
            form.classList.remove("invalid");
            text.innerHTML = "Your E-mail address is Valid";
            text.style.color = "#00ff00";
        } else {
            form.classList.add("invalid");
            form.classList.remove("valid");
            text.innerHTML = "Please Enter Valid E-mail";
            text.style.color = "#ff0000";
        }
    }

});