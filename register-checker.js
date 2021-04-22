function showError(divName){
    document.getElementById(divName).style.display = 'block';
}

function hideError(divName){
    document.getElementById(divName).style.display = 'none';
}

function checkName(){
    const re = /^[A-Za-z]+$/;
    if(re.test(String(document.getElementById('register-name').value).toLowerCase())){
        hideError('register-name-message');
    }else{
        showError('register-name-message');
    }
}

function checkSurname(){
    const re = /^[A-Za-z]+$/;
    if(re.test(String(document.getElementById('register-surname').value).toLowerCase())){
        hideError('register-surname-message');
    }else{
        showError('register-surname-message');
    }
}

function checkEmail(){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(String(document.getElementById('register-email').value).toLowerCase())){
        hideError('register-email-message');
    }else{
        showError('register-email-message');
    }
}

function checkPassword(){
    if(document.getElementById('register-password').value.length<8){
        showError('register-password-message')
    }else{
        hideError('register-password-message');
    }
}

function checkConfirmationPassword(){
    if(document.getElementById('register-confirm-password').value!==document.getElementById('register-password').value){
        showError('register-confirm-message')
    }else{
        hideError('register-confirm-message');
    }
}
