//Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam corrupti ratione eveniet nesciunt voluptate minima sunt ut ipsa rem id sapiente enim, nulla repellendus distinctio numquam quos quis consequuntur quas.
// init vars ---- wait... my boss sucks!!
// if im not here today is becucase i got sick of him and you too will!
//Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam corrupti ratione eveniet nesciunt voluptate minima sunt ut ipsa rem id sapiente enim, nulla repellendus distinctio numquam quos quis consequuntur quas.

var coverage, family, program, income, enrolled, gender, day, month, year, spouse, sgender, sday, smonth, syear, stabacco, schildren, lookaround, tabacco, street, apt, city, zip, state, firstName, lastName, email, phone;
spouse = 'Applied';
sgender = 'No applied';
sday = 'No applied';
smonth = 'No applied';
syear = 'No applied';
stabacco = 'No applied';
schildren = 'No applied';
apt = 'No applied';
email = 'No applied';



// prevent forms from auto submitting on all inputs
$(document).on("keydown", "input", function (e) {
	if (e.which == 13) e.preventDefault();
});

// init progress var 
var progress = document.querySelector('#progressBar');

// animated function
function animateCSS(element, animationName, callback) {
	const node = document.querySelector(element)
	node.classList.add('animated', animationName)

	function handleAnimationEnd() {
		node.classList.remove('animated', animationName)
		node.removeEventListener('animationend', handleAnimationEnd)
		if (typeof callback === 'function') callback()
	}
	node.addEventListener('animationend', handleAnimationEnd)
}

// notification class
class alert {
	static show(message, className) {
		const div = document.createElement('div');
		div.className = `alert alert-${className}`;
		div.appendChild(document.createTextNode(message));
		const page = document.querySelector('#page');
		const form = document.querySelector('#userInfo');
		page.insertBefore(div, form);
		setTimeout(() => document.querySelector('.alert').remove(), 1000);
	}
}

// id function
function _(id) {
	return document.getElementById(id);
}



// step by step
function step1() {
	coverage = _("coverage").value;
	if (coverage.length > 1) {
		_("step1").style.display = "none";
		_("step2").style.display = "block";
		progress.dataset.progress = 6;
		return true;
	} else {
		animateCSS('#coverageQuestion', 'jello');
		alert.show('Please select one option', 'danger');
		return false;
	}
}

function step2() {
	family = _("family").value;
	if (family.length > 1) {
		_("step2").style.display = "none";
		_("step3").style.display = "block";
		progress.dataset.progress = 12;
		return true;
	} else {
		animateCSS('#familyQuestion', 'jello');
		alert.show('Please select one option', 'danger');
		return false;
	}
}

function step3() {
	program = _("program").value;
	if (program.length > 1) {
		_("step3").style.display = "none";
		_("step4").style.display = "block";
		progress.dataset.progress = 18;
		return true;
	} else {
		animateCSS('#programQuestion', 'jello');
		alert.show('Please select one option', 'danger');
		return false;
	}
}

function step4() {
	income = _("income").value;
	if (income.length > 1) {
		_("step4").style.display = "none";
		_("step5").style.display = "block";
		progress.dataset.progress = 24;
		return true;
	} else {
		animateCSS('#incomeQuestion', 'jello');
		alert.show('Please select one option', 'danger');
		return false;
	}
}

function step5() {
	enrolled = _("enrolled").value;
	if (enrolled.length > 1) {
		_("step5").style.display = "none";
		_("step6").style.display = "block";
		progress.dataset.progress = 30;
		return true;
	} else {
		animateCSS('#enrolledQuestion', 'jello');
		alert.show('Please select one option', 'danger');
		return false;
	}
}

function step6() {
	gender = _("gender").value;
	if (gender.length > 1) {
		_("step6").style.display = "none";
		_("step7").style.display = "block";
		progress.dataset.progress = 36;
		return true;
	} else {
		animateCSS('#genderQuestion', 'jello');
		alert.show('Please select one option', 'danger');
		return false;
	}
}

function step7() {
	tabacco = _("tabacco").value;
	if (tabacco.length > 1) {
		_("step7").style.display = "none";
		_("step8").style.display = "block";
		progress.dataset.progress = 42;
		return true;
	} else {
		animateCSS('#tabaccoQuestion', 'jello');
		alert.show('Please select one option', 'danger');
		return false;
	}
}

function step8() {
	day = _("day").value;
	month = _("month").value;
	year = _("year").value;
	if (day.length < 2 && month.length < 2 && year.length < 4) {
		animateCSS('#birthQuestion', 'jello');
		alert.show('Please enter your date of birth', 'danger');
		return false;
	} else if(day.length < 2 ){
		animateCSS('#day', 'jello');
		alert.show('Please enter the day you were born', 'danger');
	} else if(month.length < 2 ){
		animateCSS('#month', 'jello');
		alert.show('Please enter the month you were born', 'danger');
	} else if(year.length < 4 ){
		animateCSS('#year', 'jello');
		alert.show('Please enter the year the were born', 'danger');
	} else {
		_("step8").style.display = "none";
		_("step9").style.display = "block";
		progress.dataset.progress = 48;
		return true;
	}
}

function step9() {
	var spouse = document.getElementById("spouse");
	var answer = spouse.options[spouse.selectedIndex].value;
	if (answer == "No" && spouse.length > 1) {
		_("step9").style.display = "none";
		_("step10").style.display = "block";
		progress.dataset.progress = 54;
		return true;
	} else if (answer == "Yes" && spouse.length > 1) {
		_("step9").style.display = "none";
		_("step20").style.display = "block";
		progress.dataset.progress = 54;
		return true;
	} else {
		animateCSS('#spouseQuestion', 'jello');
		alert.show('Please select one option', 'danger');
		return false;
	}
}

function step20() {
	sgender = _("sgender").value;
	if (sgender.length > 1) {
		_("step20").style.display = "none";
		_("step21").style.display = "block";
		progress.dataset.progress = 60;
		return true;
	} else {
		animateCSS('#sgenderQuestion', 'jello');
		alert.show('Please select one option', 'danger');
		return false;
	}
}

function step21() {
	sday = _("sday").value;
	smonth = _("smonth").value;
	syear = _("syear").value;
	if (sday.length < 2 && smonth.length < 2 && syear.length < 4) {
		animateCSS('#sbirthQuestion', 'jello');
		alert.show('Please enter your spouse`s date of birth', 'danger');
		return false;
	} else if(sday.length < 2 ){
		animateCSS('#sday', 'jello');
		alert.show('Please enter the day your spouse was born', 'danger');
	} else if(smonth.length < 2 ){
		animateCSS('#smonth', 'jello');
		alert.show('Please enter the month your spouse was born', 'danger');
	} else if(syear.length < 4 ){
		animateCSS('#syear', 'jello');
		alert.show('Please enter the year your spouse was born', 'danger');
	} else {
		_("step21").style.display = "none";
		_("step22").style.display = "block";
		progress.dataset.progress = 66;
		return true;
	}
}

function step22() {
	stabacco = _("stabacco").value;
	if (stabacco.length > 1) {
		_("step22").style.display = "none";
		_("step23").style.display = "block";
		progress.dataset.progress = 72;
		return true;
	} else {
		animateCSS('#stabaccoQuestion', 'jello');
		alert.show('Please select one option', 'danger');
		return false;
	}
}

function step23() {
	schildren = _("schildren").value;
	if (schildren.length > 1) {
		_("step23").style.display = "none";
		_("step24").style.display = "block";
		progress.dataset.progress = 78;
		return true;
	} else {
		animateCSS('#schildrenQuestion', 'jello');
		alert.show('Please select one option', 'danger');
		return false;
	}
}


function step10() {
	street = _("street").value;
	apt = _("apt").value;
	city = _("city").value;
	zip = _("zip").value;
	state = _("state").value;
	if (street.length < 5 && city.length < 3 && zip.length < 5 && state.length < 2) {
		animateCSS('#addressQuestion', 'jello');
		alert.show('Please enter your address', 'danger');
		return false;
	} else if( street.length < 5 ){
		animateCSS('#street', 'jello');
		alert.show('Please enter the street', 'danger');
	} else if( city.length < 3 ){
		animateCSS('#city', 'jello');
		alert.show('Please enter the city', 'danger');
	} else if(zip.length < 5){
		animateCSS('#zip', 'jello');
		alert.show('Please enter the zip code', 'danger');
	} else if(state.length < 2){
		animateCSS('#state', 'jello');
		alert.show('Please enter the state', 'danger');
	} else {
		_("step10").style.display = "none";
		_("step11").style.display = "block";
		progress.dataset.progress = 86;
		return true;
	}
}

function step11() {
	firstName = _("firstName").value;
	lastName = _("lastName").value;
	if ( firstName.length == '' || lastName.length == '') {
		animateCSS('#namesQuestion', 'jello');
		alert.show('Please enter your first and last names', 'danger');
		return false;
	} else if (firstName.length < 2){
		animateCSS('#firstName', 'jello');	
		alert.show('Please enter your First Name', 'danger');
	} else if (lastName.length < 2){
		animateCSS('#lastName', 'jello');
		alert.show('Please enter your Last Name', 'danger');
	} else if (firstName.match(/^[a-zA-Z]{1,16}$/) && firstName.length > 2 && lastName.match(/^[a-zA-Z]{1,16}$/) && lastName.length > 2) {
		_("step11").style.display = "none";
		_("step12").style.display = "block";
		progress.dataset.progress = 90;
		return true;
	} else {
		animateCSS('#firstName', 'jello');
		animateCSS('#lastName', 'jello');
		alert.show('Please enter the correct values', 'danger');
		return false;
	}
}

function step12() {
	if (email.length == '' || email.length > 5) {
		_("step12").style.display = "none";
		_("step13").style.display = "block";
		progress.dataset.progress = 94;
		return true;
	} else {
		animateCSS('#email', 'jello');
		alert.show('Please enter a valid email address', 'danger');
		return false;
	}
}

function step13() {
	phone = _("phone").value;
	if (phone.length > 7 && phone.match(/^[0-9]*$/)) {
		_("step13").style.display = "none";
		_("step30").style.display = "block";
		progress.dataset.progress = 98;
		return true;
	} else {
		animateCSS('#phone', 'jello');
		alert.show('Please enter a valid phone number', 'danger');
		return false;
	}
}

function step30() {
	lookaround = _("lookaround").value;
	if (lookaround.length > 1) {
		_("step30").style.display = "none";
		_("userData").style.display = "block";
		_("userCoverage").innerHTML = coverage;
		_("userFamily").innerHTML = family;
		_("userProgram").innerHTML = program;
		_("userIncome").innerHTML = income;
		_("userEnrolled").innerHTML = enrolled;
		_("userGender").innerHTML = gender;
		_("userTabacco").innerHTML = tabacco;
		_("userDay").innerHTML = day;
		_("userMonth").innerHTML = month;
		_("userYear").innerHTML = year;
		_("userSpouse").innerHTML = spouse;
		_("userSgender").innerHTML = sgender;
		_("userSday").innerHTML = sday;
		_("userSmonth").innerHTML = smonth;
		_("userSyear").innerHTML = syear;
		_("userStabacco").innerHTML = stabacco;
		_("userSchildren").innerHTML = schildren;
		_("userStreet").innerHTML = street;
		_("userApt").innerHTML = apt;
		_("userCity").innerHTML = city;
		_("userState").innerHTML = state;
		_("userZip").innerHTML = zip;
		_("userFirstName").innerHTML = firstName;
		_("userLastName").innerHTML = lastName;
		_("userEmail").innerHTML = email;
		_("userPhone").innerHTML = phone;
		_("userLookaround").innerHTML = lookaround;
		progress.dataset.progress = 100;
		alert.show('Please review your information', 'success');
		return true;
	} else {
		animateCSS('#lookaround', 'jello');
		alert.show('Please select one option', 'danger');
		return false;
	}
}

// submit form
function submitForm() {
	_("userInfo").submit();
	alert.show('Submitted', 'success');
	return true;
}

// master selec tag funtions
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


