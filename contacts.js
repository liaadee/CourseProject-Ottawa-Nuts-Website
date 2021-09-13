let form = document.getElementById('contact_form');

let phoneCheck = (phone) => {
    if (phone == '') {
        return true;
    } else
    if (isNaN(phone)) {
        return true
    } else {
        return phone.match(/\d/g).length != 10;
    }
}

function emailCheck(email) {
    if (email == '')
        return true;
    else {
        return !/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(form.email.value);
    }
}

let formCheck = new Object();

let updateFormCheck = () => {
    formCheck = {
        'nameError': form.name.value == '',
        'telephoneError': phoneCheck(document.getElementById('telephone_input').value),
        'emailError': emailCheck(document.getElementById('email_input').value),
        'subjectError': form.subject.value == 'Subject line',
        'messageError': form.message.value == ''
    }
}

let errorMsgs = {
    'nameError': '*Name required.',
    'telephoneError': '*Valid 10-digit phone number required.',
    'emailError': '*Valid email required.',
    'subjectError': '*Subject required',
    'messageError': '*Message required.'
}

let validate = function () {
    updateFormCheck();
    let valid = true;
    cleanWarnings();
    for (let key in formCheck) {
        if (formCheck[key]) {
            document.getElementById(key).innerHTML = errorMsgs[key];
            valid = false;
        }
    }
    return valid;
}


let cleanWarnings = () => {
    errorIds = [
        'nameError',
        'telephoneError',
        'emailError',
        'subjectError',
        'messageError'
    ]
    for (let i = 0; i < errorIds.length; i++) {
        document.getElementById(errorIds[i]).innerHTML = '';
    }
}


form.addEventListener('submit', function (e) {
    if (!validate()) {
        e.preventDefault();
    }
});


let validateElement = (input) => {
    let nameErrorDic = {
        'name_input': 'nameError',
        'telephone_input': 'telephoneError',
        'email_input': 'emailError',
        'subject_input': 'subjectError',
        'message_input': 'messageError'
    }
    updateFormCheck();
    let errorBox = document.getElementById(nameErrorDic[input.id]);
    if (formCheck[nameErrorDic[input.id]]) {
        errorBox.innerHTML = errorMsgs[nameErrorDic[input.id]];
    } else {
        errorBox.innerHTML = '';
    }
}