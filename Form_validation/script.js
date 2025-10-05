document.getElementById("login_form").addEventListener("submit", function (event) {
    event.preventDefault();
    let username = document.getElementById("username").value.trim()
    let age = document.getElementById("age").value.trim()
    let email = document.getElementById("email").value.trim();
    let pass = document.getElementById("password").value.trim();
    let msg = document.getElementById("error")

    if (username===""||email===""|| pass===""){
        msg.textContent='these fields are required'
    }
    else if (age < 18) {
    msg.textContent = "You must be 18 or older!";
  } 
    else{
        msg.textContent="Form Submitted"
        window.open (`welcome.html?username=${encodeURIComponent(username)}`,"_blank");
    }
    
})

