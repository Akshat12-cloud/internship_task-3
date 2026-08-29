    // =========================
// Mobile Navigation
// =========================

const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");

menuBtn.addEventListener("click", function () {

    navbar.classList.toggle("active");

});


// =========================
// Dynamic Message
// =========================

const messageBtn = document.getElementById("messageBtn");
const dynamicMessage = document.getElementById("dynamicMessage");

messageBtn.addEventListener("click", function () {

    dynamicMessage.textContent =
        "Great! JavaScript is working successfully.";

    messageBtn.textContent = "Clicked!";

});


// =========================
// Contact Form Validation
// =========================

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const messageError = document.getElementById("messageError");
    const formSuccess = document.getElementById("formSuccess");

    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";
    formSuccess.textContent = "";

    let isValid = true;


    // Name validation

    if (name === "") {

        nameError.textContent = "Please enter your name.";

        isValid = false;

    }


    // Email validation

    if (email === "") {

        emailError.textContent = "Please enter your email.";

        isValid = false;

    }
    else if (!email.includes("@")) {

        emailError.textContent =
            "Please enter a valid email address.";

        isValid = false;

    }


    // Message validation

    if (message === "") {

        messageError.textContent =
            "Please enter your message.";

        isValid = false;

    }


    // Successful submission

    if (isValid) {

        formSuccess.textContent =
            "Thank you! Your message has been submitted successfully.";

        contactForm.reset();

    }

});