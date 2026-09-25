function myFunc(){
    var x = document.getElementById("navbar-section");
    if(x.className === "nav"){
        x.className += " responsive";
    }else {x.className="nav" }
}