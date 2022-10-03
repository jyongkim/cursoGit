var color = false; // false es negro, true es rojo

function comenzar(){

    if (!color){
        document.getElementsByTagName("body")[0].style.backgroundColor = "red";
        color = true;
    } else {
        document.getElementsByTagName("body")[0].style.backgroundColor = "black";
        color = false;
    }
    
}