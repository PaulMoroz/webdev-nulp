function show(){
    document.getElementById("header-divs").style.display='block';
}

function hide(){
    if(document.body.offsetWidth<=800){
        document.getElementById("header-divs").style.display='none';
    }
}