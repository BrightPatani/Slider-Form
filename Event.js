const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");


signUpButton.addEventListener('click', () => {
    container.classList.add('right-panel-active');
});
signInButton.addEventListener('click', () => {
    container.classList.remove('right-panel-active');
});

const form = document.getElementById("slider");
        const signUpbtn = document.getElementById("signUpBtn");
        const signInbtn  = document.getElementById("signInBtn")


        form.addEventListener("submit", function(event) {
            event.preventDefault(); // Prevent default form submission

            const passwordInput = document.getElementById("password");
            const usernameInput = document.getElementById("username")
            const emailInput =  document.getElementById("email")

            // Basic validation
            if (usernameInput.value.trim() === "") {
                alert("Please fill in all fields.");
                return;
            }
            if (emailInput.value.trim() === "") {
                alert("Please fill in all fields.");
                return;
            }
            
             // Password length validation
             if (passwordInput.value.length < 6) {
                alert("Password must be at least 6 characters long.");
                return;
            }

});