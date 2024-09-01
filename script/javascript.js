function MenubuttonClick(){
    if (document.getElementById("menu2wrapper").style.display == "block"){
        document.getElementById("menu2wrapper").style.display = "none";
        document.getElementById("imageicon").src = `images/hamburger.svg`;
    }
    else{
        document.getElementById("menu2wrapper").style.display = "block";
        document.getElementById("imageicon").src = `images/close_big.svg`;
    }
}


function bodyResized(){
    if (window.outerWidth > 700){
        document.getElementById("menu2wrapper").style.display = "none";
        document.getElementById("imageicon").src = `images/hamburger.svg`;
    }
}