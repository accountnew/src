// A function to toggle the menu on mobile devices
var hamburgerbutton = document.getElementsByClassName('hamburgerbutton')[0];
var menubar = document.getElementsByClassName('menubar')[0];
hamburgerbutton.style.cursor = 'pointer';
hamburgerbutton.onclick = function() {
    if (document.getElementsByClassName('menumobile')[0].style.display == "block"){
        document.getElementsByClassName('menumobile')[0].style.display = "none"
        menubar.style.borderBottom = "none"
        hamburgerbutton.style.backgroundImage = "url('images/menu.png')"
        document.getElementsByTagName("BODY")[0].style.overflow = "auto"        
    }
    else {
        document.getElementsByClassName('menumobile')[0].style.display = "block"
        menubar.style.borderBottom = "solid white 2px"
        hamburgerbutton.style.backgroundImage = "url('images/close.png')"
        document.getElementsByTagName("BODY")[0].style.overflow = "hidden"
    }
};
