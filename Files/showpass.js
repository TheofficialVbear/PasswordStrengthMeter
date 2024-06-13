function togglepassvis() {
    let password = document.getElementById("password");
    let togglebutton = document.getElementById("togglebutton");
    
    if (password.type == "password") {
        password.type = "text";
        togglebutton.textContent = "Hide ";

    }else {
        password.type = "password";
        togglebutton.textContent = "Show";
    }
}