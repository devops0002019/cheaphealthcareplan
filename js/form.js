function animatedForm() {

    const arrows = document.querySelectorAll(".enter-next");

    arrows.forEach(arrow => {
        arrow.addEventListener("click", () => {

            const input = arrow.previousElementSibling;
            const parent = arrow.parentElement;
            const nextForm = parent.nextElementSibling;



            if (input.type === "text" && validateUser(input)) {
                nextSlide(parent, nextForm);

            } else if (input.type === "email" && validateEmail(input)) {
                nextSlide(parent, nextForm);


            } else if (input.type === "radio" && validateGender(input)) {
                nextSlide(parent, nextForm);


            } else if (input.type === "radio" && validateCoverage(input)) {
                nextSlide(parent, nextForm);


            } else if (input.type === "radio" && validateIncome(input)) {
                nextSlide(parent, nextForm);

            } else if (input.type === "radio" && validateEnrolled(input)) {
                nextSlide(parent, nextForm);


            } else if (input.type === "date" && validateBirth(input)) {
                nextSlide(parent, nextForm);


            } else {
                parent.style.animation = "shake 0.5s ease";
            }

            parent.addEventListener("animationend", () => {
                parent.style.animation = "";

            });
        });
    });
}



var progress = document.getElementById('progressBar');
var statusProgress = document.getElementById('status');



function validateUser(user) {

    if (user.value.length < 6) {
        error("rgb(189, 87, 87)");
        console.log("user is not up and running");
        return false;
    } else {
        error("#fafafa");
        progress.value = 10;
        statusProgress.innerHTML = `<span class="percentage">10% </span>Completed`;
        console.log("user is up and running");
        return true;
    }
}




function validateEmail(email) {

    var validation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (validation.test(email.value)) {
        error("#fafafa");
        progress.value = 20;
        statusProgress.innerHTML = `<span class="percentage">20% </span>Completed`;
        console.log("email is up and running");
        return true;
    } else {
        error("rgb(189, 87, 87)");
        console.log("email is not up and running");
        return false;
    }
}



function validateGender(gender) {

    var gender = document.getElementsByName('gender');

    if (!(gender[0].checked || gender[1].checked)) {
        error("#fafafa");
        progress.value = 30;
        statusProgress.innerHTML = `<span class="percentage">30% </span>Completed`;
        console.log("gender is up and running");
        return true;
    } else {
        error("rgb(189, 87, 87)");
        console.log("gender is not up and running");
        return false;
    }
}




function validateCoverage(coverage) {

    var coverage = document.getElementsByName('coverage');

    if (!(coverage[0].checked || coverage[1].checked)) {
        error("#fafafa");
        progress.value = 40;
        statusProgress.innerHTML = `<span class="percentage">40% </span>Completed`;
        console.log("coverage is up and running");
        return true;
    } else {
        error("rgb(189, 87, 87)");
        console.log("coverage is not up and running");
        return false;
    }
}






function validateIncome(income) {

    var income = document.getElementsByName('income');

    if (!(income[0].checked || income[1].checked)) {
        error("#fafafa");
        progress.value = 50;
        statusProgress.innerHTML = `<span class="percentage">50% </span>Completed`;
        console.log("income is up and running");
        return true;
    } else {
        error("rgb(189, 87, 87)");
        console.log("income is not up and running");
        return false;
    }
}







function validateEnrolled(enrolled) {

    var enrolled = document.getElementsByName('enrolled');

    if (!(enrolled[0].checked || enrolled[1].checked)) {
        error("#fafafa");
        progress.value = 60;
        statusProgress.innerHTML = `<span class="percentage">60% </span>Completed`;
        console.log("enrolled is up and running");
        return true;
    } else {
        error("rgb(189, 87, 87)");
        console.log("enrolled is not up and running");
        return false;
    }
}




function validateBirth(date) {

    var validationBirth = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/;

    if (!(validationBirth.test(date.value))) {
        error("#fafafa");
        progress.value = 70;
        statusProgress.innerHTML = `<span class="percentage">70% </span>Completed`;
        console.log("birth is up and running");
        return true;

    } else {
        error("rgb(189, 87, 87)");
        console.log("birth is not up and running");
        return false;
    }
}













function nextSlide(parent, nextForm) {
    parent.classList.add('innactive');
    parent.classList.remove('active');
    nextForm.classList.add('active');
}

function error(color) {
    document.body.style.background = color;
}

animatedForm();

console.log(" hello andrew ");