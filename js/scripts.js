    // form

    var coverage, family, program, income, enrolled, gender, birth, tabaco, spouse;

    function _(id) {
        return document.getElementById(id);
    }

    function step1() {
        coverage = _("coverage").value;
        if (coverage.length > 0) {
            _("step1").style.display = "none";
            _("step2").style.display = "block";
            _("progressBar").value = 10;
            _("status").innerHTML = `<h3 id="status"><span class="percentage">10% <br /></span>Completed</h3>`;             
            error("rgb(255, 255, 255)");
            console.log("coverage is up and running");
            return true;

        } else {

            error("rgb(189, 87, 87)");
            console.log("coverage is NOT up and running");
            alert('Plase select one option')
            return false;

        }
    }

    function step2() {
        family = _("family").value;
        if (family.length > 0) {
            _("step2").style.display = "none";
            _("step3").style.display = "block";
            _("progressBar").value = 20;
            _("status").innerHTML = `<h3 id="status"><span class="percentage">20% <br /></span>Completed</h3>`;
            error("rgb(255, 255, 255)");
            console.log("family is up and running");
            return true;
        } else {
            error("rgb(189, 87, 87)");
            console.log("family is NOT up and running");
            alert('Plase select one option')
            return false;

        }
    }


    function step3() {
        program = _("program").value;
        if (program.length > 0) {
            _("step3").style.display = "none";
            _("step4").style.display = "block";
            _("progressBar").value = 30;
            _("status").innerHTML = `<h3 id="status"><span class="percentage">30% <br /></span>Completed</h3>`;
            error("rgb(255, 255, 255)");
            console.log("program is up and running");
            return true;
        } else {
            error("rgb(189, 87, 87)");
            console.log("program is NOT up and running");
            alert('Plase select one option')
            return false;
        }
    }

    function step4() {
        income = _("income").value;
        if (income.length > 0) {
            _("step3").style.display = "none";
            _("step4").style.display = "block";
            _("progressBar").value = 40;
            _("status").innerHTML = `<h3 id="status"><span class="percentage">40% <br /></span>Completed</h3>`;
            error("rgb(255, 255, 255)");
            console.log("income is up and running");
            return true;
        } else {
            error("rgb(189, 87, 87)");
            console.log("income is NOT up and running");
            alert('Plase select one option')
            return false;
        }
    }


    function step5() {

        enrolled = _("enrolled").value;
        if (enrolled.length > 0) {
            _("step3").style.display = "none";
            _("step4").style.display = "block";
            _("progressBar").value = 50;
            _("status").innerHTML = `<h3 id="status"><span class="percentage">50% <br /></span>Completed</h3>`;

            error("rgb(255, 255, 255)");
            console.log("enrolled is up and running");
            return true;

        } else {

            error("rgb(189, 87, 87)");
            console.log("enrolled is NOT up and running");
            alert('Plase select one option')
            return false;

        }
    }

    // function step6() {

    //     gender = _("gender").value;

    //     if (gender.length > 0) {
    //         _("step3").style.display = "none";
    //         _("step4").style.display = "block";
    //         _("progressBar").value = 30;
    //         _("status").innerHTML = `<h3 id="status"><span class="percentage">30% <br /></span>Completed</h3>`;

    //         error("rgb(255, 255, 255)");
    //         console.log("gender is up and running");
    //         return true;

    //     } else {

    //         error("rgb(189, 87, 87)");
    //         console.log("gender is NOT up and running");
    //         alert('Plase select one option')
    //         return false;

    //     }
    // }

    // function step7() {

    //     birth = _("birth").value;
    //     if (birth.length > 0) {
    //         _("step3").style.display = "none";
    //         _("step4").style.display = "block";
    //         _("progressBar").value = 30;
    //         _("status").innerHTML = `<h3 id="status"><span class="percentage">30% <br /></span>Completed</h3>`;

    //         error("rgb(255, 255, 255)");
    //         console.log("birth is up and running");
    //         return true;

    //     } else {

    //         error("rgb(189, 87, 87)");
    //         console.log("birth is NOT up and running");
    //         alert('Plase select one option')
    //         return false;

    //     }
    // }


    // function step8() {

    //     spouse = _("spouse").value;
    //     if (spouse.length > 0) {
    //         _("step3").style.display = "none";
    //         _("step4").style.display = "block";
    //         _("progressBar").value = 30;
    //         _("status").innerHTML = `<h3 id="status"><span class="percentage">30% <br /></span>Completed</h3>`;

    //         error("rgb(255, 255, 255)");
    //         console.log("spouse is up and running");
    //         return true;

    //     } else {

    //         error("rgb(189, 87, 87)");
    //         console.log("spouse is NOT up and running");
    //         alert('Plase select one option')
    //         return false;

    //     }
    // }







    // function step2() {
    //     email = _("email").value;
    //     var validemail = /\S+@\S+/;
    //     if (email.length > 0) {
    //         _("step2").style.display = "none";
    //         _("step3").style.display = "block";
    //         _("progressBar").value = 20;
    //         _("status").innerHTML = `<h3 id="status"><span class="percentage">20% <br /></span>Completed</h3>`;

    //         error("rgb(255, 255, 255)");
    //         console.log("email is up and running");
    //         return validemail.test(email);

    //     } else {

    //         error("rgb(189, 87, 87)");
    //         console.log("email is NOT up and running");
    //         return false;
    //     }
    // }
    // function step3() {
    //     gender = _("gender").value;
    //     if (gender.length > 0) {
    //         _("step3").style.display = "none";
    //         _("step4").style.display = "block";
    //         _("progressBar").value = 30;
    //         _("status").innerHTML = `<h3 id="status"><span class="percentage">30% <br /></span>Completed</h3>`;

    //         error("rgb(255, 255, 255)");
    //         console.log("gender is up and running");
    //         return true;

    //     } else {

    //         error("rgb(189, 87, 87)");
    //         console.log("gender is NOT up and running");
    //         alert('Plase select one option')
    //         return false;

    //     }
    // }
    // function step4() {
    //     cover = _("cover").value;
    //     if (cover.length > 0) {
    //         _("step4").style.display = "none";
    //         _("step5").style.display = "block";
    //         _("progressBar").value = 40;
    //         _("status").innerHTML = `<h3 id="status"><span class="percentage">40% <br /></span>Completed</h3>`;

    //         error("rgb(255, 255, 255)");
    //         console.log("cover is up and running");
    //         return true;

    //     } else {

    //         error("rgb(189, 87, 87)");
    //         console.log("cover is NOT up and running");
    //         alert('Plase select one option')
    //         return false;
    //     }
    // }
    function step9() {
        income = _("income").value;
        if (income.length > 0) {
            _("step9").style.display = "none";
            _("show_all_data").style.display = "block";
            _("display_username").innerHTML = username;
            _("display_email").innerHTML = email;
            _("display_gender").innerHTML = gender;
            _("display_cover").innerHTML = cover;
            _("display_income").innerHTML = income;
            _("progressBar").value = 50;
            _("status").innerHTML = `<h3 id="status"><span class="percentage">50% <br /></span>Completed</h3>`;

            error("rgb(255, 255, 255)");
            console.log("income is up and running");
            return true;

        } else {

            error("rgb(189, 87, 87)");
            console.log("income is NOT up and running");
            alert('Plase select one option')
            return false;
        }
    }
    function error(color) {
        document.body.style.background = color;
    }
    function submitForm() {
        _("userInfo").submit();
            console.log("Form Submitted");
        return true;
    }









// select tag

var x, i, j, selElmnt, a, b, c;
x = document.getElementsByClassName("select");
for (i = 0; i < x.length; i++) {
    selElmnt = x[i].getElementsByTagName("select")[0];
    a = document.createElement("DIV");
    a.setAttribute("class", "select-selected");
    a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
    x[i].appendChild(a);
    b = document.createElement("DIV");
    b.setAttribute("class", "select-items select-hide");
    for (j = 1; j < selElmnt.length; j++) {
        c = document.createElement("DIV");
        c.innerHTML = selElmnt.options[j].innerHTML;
        c.addEventListener("click", function (e) {
            var y, i, k, s, h;
            s = this.parentNode.parentNode.getElementsByTagName("select")[0];
            h = this.parentNode.previousSibling;
            for (i = 0; i < s.length; i++) {
                if (s.options[i].innerHTML == this.innerHTML) {
                    s.selectedIndex = i;
                    h.innerHTML = this.innerHTML;
                    y = this.parentNode.getElementsByClassName("same-as-selected");
                    for (k = 0; k < y.length; k++) {
                        y[k].removeAttribute("class");
                    }
                    this.setAttribute("class", "same-as-selected");
                    break;
                }
            }
            h.click();
        });
        b.appendChild(c);
    }
    x[i].appendChild(b);
    a.addEventListener("click", function (e) {
        e.stopPropagation();
        closeAllSelect(this);
        this.nextSibling.classList.toggle("select-hide");
        this.classList.toggle("select-arrow-active");
    });
}
function closeAllSelect(elmnt) {
    var x, y, i, arrNo = [];
    x = document.getElementsByClassName("select-items");
    y = document.getElementsByClassName("select-selected");
    for (i = 0; i < y.length; i++) {
        if (elmnt == y[i]) {
            arrNo.push(i)
        } else {
            y[i].classList.remove("select-arrow-active");
        }
    }
    for (i = 0; i < x.length; i++) {
        if (arrNo.indexOf(i)) {
            x[i].classList.add("select-hide");
        }
    }
}
document.addEventListener("click", closeAllSelect);





// loader

$(document).ready(function() {
	
	setTimeout(function(){
		$('body').addClass('loaded');
	}, 1000);
	
});