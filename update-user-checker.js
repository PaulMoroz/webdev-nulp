function showError(divName){
    document.getElementById(divName).style.display = 'block';
}

function hideError(divName){
    document.getElementById(divName).style.display = 'none';
}

function checkName(){
    const re = /^[A-Za-z]+$/;
    if(re.test(String(document.getElementById('update-name').value).toLowerCase())){
        hideError('update-name-message');
    }else{
        showError('update-name-message');
    }
}

function checkSurname(){
    const re = /^[A-Za-z]+$/;
    if(re.test(String(document.getElementById('update-surname').value).toLowerCase())){
        hideError('update-surname-message');
    }else{
        showError('update-surname-message');
    }
}

function checkEmail(){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(String(document.getElementById('update-email').value).toLowerCase())){
        hideError('update-email-message');
    }else{
        showError('update-email-message');
    }
}

function checkPassword(){
    if(document.getElementById('new-password').value.length<8 && document.getElementById('new-password').value.length>0){
        showError('update-new-password-message');
    }else{
        hideError('update-new-password-message');
        if(document.getElementById('old-password').value.length<8){
            showError('update-old-password-message');
        }
        else
            hideError('error-old-password-message');
        if(document.getElementById('confirm-new-password').value!==document.getElementById('new-password').value){
            showError('update-error-confirm-password-message');
        }
        else
            hideError('error-error-confirm-new-password-message');
    }
}

