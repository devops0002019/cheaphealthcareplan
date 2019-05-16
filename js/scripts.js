    // form
    var coverage, family, program, income, enrolled, gender, tabacco, birth, spouse, zip, firstName,lastName, email, phone;

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
            _("step4").style.display = "none";
            _("step5").style.display = "block";
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
            _("step5").style.display = "none";
            _("step6").style.display = "block";
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

    function step6() {
        gender = _("gender").value;
        if (gender.length > 0) {
            _("step6").style.display = "none";
            _("step7").style.display = "block";
            _("progressBar").value = 60;
            _("status").innerHTML = `<h3 id="status"><span class="percentage">60% <br /></span>Completed</h3>`;
            error("rgb(255, 255, 255)");
            console.log("gender is up and running");
            return true;
        } else {
            error("rgb(189, 87, 87)");
            console.log("gender is NOT up and running");
            alert('Plase select one option')
            return false;
        }
    }

    function step7() {
        tabacco = _("tabacco").value;
        if (tabacco.length > 0) {
            _("step7").style.display = "none";
            _("step8").style.display = "block";
            _("progressBar").value = 70;
            _("status").innerHTML = `<h3 id="status"><span class="percentage">70% <br /></span>Completed</h3>`;
            error("rgb(255, 255, 255)");
            console.log("tobacco is up and running");
            return true;
        } else {
            error("rgb(189, 87, 87)");
            console.log("tobacco is NOT up and running");
            alert('Plase select one option')
            return false;
        }
    }

    function step8() {
        birth = _("birth").value;
        if (birth.length > 0) {
            _("step8").style.display = "none";
            _("step9").style.display = "block";
            _("progressBar").value = 80;
            _("status").innerHTML = `<h3 id="status"><span class="percentage">80% <br /></span>Completed</h3>`;
            error("rgb(255, 255, 255)");
            console.log("birth is up and running");
            return true;
        } else {
            error("rgb(189, 87, 87)");
            console.log("birth is NOT up and running");
            alert('Plase select one option')
            return false;
        }
    }




    function step9() {
        var spouse = false;
        spouse = _("spouse").value;
        

        if (spouse.value === false) {

            _("step9").style.display = "none";
            _("step10").style.display = "block";

        } else if (spouse.value === true) {

            _("step9").style.display = "none";
            _("step20").style.display = "block";


            _("progressBar").value = 80;
            _("status").innerHTML = `<h3 id="status"><span class="percentage">80% <br /></span>Completed</h3>`;
            error("rgb(255, 255, 255)");
            console.log("spouse is up and running");
            return true;
        } else {
            error("rgb(189, 87, 87)");
            console.log("spouse is NOT up and running");
            alert('Plase select one option')
            return false;
        }
    }








    // function step9() {
    //     spouse = _("spouse").value;
    //     if (spouse.length > 0) {
    //         _("step9").style.display = "none";
    //         _("step10").style.display = "block";
    //         _("progressBar").value = 80;
    //         _("status").innerHTML = `<h3 id="status"><span class="percentage">80% <br /></span>Completed</h3>`;
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

    function step10() {
        zip = _("zip").value;
        if (zip.length > 0) {
            _("step10").style.display = "none";
            _("step11").style.display = "block";
            _("progressBar").value = 80;
            _("status").innerHTML = `<h3 id="status"><span class="percentage">80% <br /></span>Completed</h3>`;
            error("rgb(255, 255, 255)");
            console.log("zip is up and running");
            return true;
        } else {
            error("rgb(189, 87, 87)");
            console.log("zip is NOT up and running");
            alert('Plase select one option')
            return false;
        }
    }

    function step11() {
        firstName = _("firstName").value;
        lastName = _("lastName").value;
        if (firstName.length > 0 && lastName.length > 0) {
            _("step11").style.display = "none";
            _("step12").style.display = "block";
            _("progressBar").value = 80;
            _("status").innerHTML = `<h3 id="status"><span class="percentage">80% <br /></span>Completed</h3>`;
            error("rgb(255, 255, 255)");
            console.log("full name is up and running");
            return true;
        } else {
            error("rgb(189, 87, 87)");
            console.log("full name is NOT up and running");
            alert('Plase select one option')
            return false;
        }
    }

    function step12() {
        email = _("email").value;
        var validemail = /\S+@\S+/;
        if (zip.length > 0) { 
            _("step12").style.display = "none";
            _("step13").style.display = "block";
            _("progressBar").value = 80;
            _("status").innerHTML = `<h3 id="status"><span class="percentage">80% <br /></span>Completed</h3>`;
            error("rgb(255, 255, 255)");
            console.log("email is up and running");
            return validemail.test(email);
        } else {
            error("rgb(189, 87, 87)");
            console.log("email is NOT up and running");
            alert('Plase select one option')
            return false;
        }
    }

    function step13() {
        phone = _("phone").value;
        if (phone.length > 0) {
            _("step13").style.display = "none";
            _("userData").style.display = "block";
            _("userCoverage").innerHTML = coverage;
            _("userFamily").innerHTML = family;
            _("userProgram").innerHTML = program;
            _("userIncome").innerHTML = income;
            _("userEnrolled").innerHTML = enrolled;
            _("userGender").innerHTML = gender;
            _("userTabacco").innerHTML = tabacco;
            _("userBirth").innerHTML = birth;
            _("userSpouse").innerHTML = spouse;
            _("userZip").innerHTML = zip;
            _("userFirstName").innerHTML = firstName;
            _("userLastName").innerHTML = lastName;
            _("userEmail").innerHTML = email;
            _("userPhone").innerHTML = phone;
            _("progressBar").value = 100;
            _("status").innerHTML = `<h3 id="status"><span class="percentage">100% <br /></span>Completed</h3>`;
            error("rgb(255, 255, 255)");
            console.log("spouse gender is up and running");
            return true;
        } else {
            error("rgb(189, 87, 87)");
            console.log("income is NOT up and running");
            alert('Plase spouse gender one option')
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