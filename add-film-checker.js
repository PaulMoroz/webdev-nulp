function showError(divName){
    document.getElementById(divName).style.display = 'block';
}

function hideError(divName){
    document.getElementById(divName).style.display = 'none';
}

function checkName(){
    if(document.getElementById('film-name').value.trim().length>0){
        hideError('add-film-name-message');
    }else{
        showError('update-name-message');
    }
}

function checkDuration(){
    const re = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/;
    if(re.test(String(document.getElementById('film-name').value).toLowerCase())){
        hideError('add-film-name-message');
    }else{
        showError('update-name-message');
    }
}

function checkPrice(){
    const re = /^[A-Za-z]+$/;
    if(re.test(String(document.getElementById('update-surname').value).toLowerCase())){
        hideError('update-surname-message');
    }else{
        showError('update-surname-message');
    }
}

