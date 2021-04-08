function init() {
    var signIn = document.getElementById("login-form");
    var signUp = document.getElementById("signup-form");
    const link1 = document.getElementById("login-link1");
    const link2 = document.getElementById("login-link2");


    link1.addEventListener('click', () => {
        signUp.style.display = "none";
        signIn.style.display = "block";


    });
    link2.addEventListener('click', () => {
        signIn.style.display = "none";
        signUp.style.display = "block";
    });
}

window.addEventListener("load", init);

