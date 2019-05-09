function animatedForm() {

    const arrows = document.querySelectorAll(".enter-next");

    arrows.forEach(arrow => {
        arrow.addEventListener("click", () => {

            const input = arrow.previousElementSibling;
            const parent = arrow.parentElement;
            const nextForm = parent.nextElementSibling;


            if (input.type === "radio" && validateCoverage(input)) {
                nextSlide(parent, nextForm);


            } else if (input.type === "text" && validateUser(input)) {
                nextSlide(parent, nextForm);

            } else if (input.type === "email" && validateEmail(input)) {
                nextSlide(parent, nextForm);


            } else if (input.type === "password" && validateUser(input)) {
                nextSlide(parent, nextForm);



            } else if (input.type === "radio" && validateGenders(input)) {
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



function validateCoverage() {

    var cover = document.getElementsByName('cover')

    if (!(cover[0].checked || cover[1].checked)) {
        error("rgb(101, 109, 255)");
        progress.value = 25;
        statusProgress.innerHTML = `<span class="percentage">25% </span>Completed`;
        console.log("cover is up and running");
        return true;
    } else {
        error("rgb(189, 87, 87)");
        console.log("cover is not up and running");
        return false;
    }
}




function validateUser(user) {

    if (user.value.length < 6) {
        error("rgb(189, 87, 87)");
        console.log("user is not up and running");
        return false;
    } else {
        error("rgb(101, 109, 255)");
        progress.value = 50;
        statusProgress.innerHTML = `<span class="percentage">50% </span>Completed`;
        console.log("user is up and running");
        return true;
    }
}

function validateEmail(email) {
    const validation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (validation.test(email.value)) {
        error("rgb(101, 109, 255)");
        progress.value = 75;
        statusProgress.innerHTML = `<span class="percentage">75% </span>Completed`;
        console.log("email is up and running");
        return true;
    } else {
        error("rgb(189, 87, 87)");
        console.log("email is not up and running");
        return false;
    }
}




function validateGender() {

    var gender = document.getElementsByName('gender')

    if (!(gender[0].checked || gender[1].checked)) {
        error("rgb(101, 109, 255)");
        progress.value = 100;
        statusProgress.innerHTML = `<span class="percentage">100% </span>Completed`;
        console.log("gender is up and running");
        return true;
    } else {
        error("rgb(189, 87, 87)");
        console.log("gender is not up and running");
        return false;
    }
}








//    if (genders[i].checked) gerderVal = true;
//    error("rgb(101, 109, 255)");
//    i++;
//
//    return true;
//}
//
//if (!gerderVal) alert("Must check some option!");
//error("rgb(189, 87, 87)");
//return gerderVal;
//}


//if (validation.test(email.value)) {
//    error("rgb(101, 109, 255)");
//    return true;
//} else {
//    error("rgb(189, 87, 87)");
//    return false;
//}
//}





//            function validateGender(gender) {
//
//                select = document.getElementById('select');
//                if (select.value) {
//
//                    error("rgb(101, 109, 255)");
//                    return true;
//
//                } else {
//                    error("rgb(189, 87, 87)");
//                    return false;
//                }
//            }


//function validateCoverange(converage) {
//
//    select = document.getElementById('select');
//    if (select.value) {
//
//        error("rgb(101, 109, 255)");
//        return true;
//
//    } else {
//        error("rgb(189, 87, 87)");
//        return false;
//    }
//}





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









//            } else if (location.className === location.value && validateGender(location)) {
//                nextSlide(parent, nextForm);ss
