const form = document.getElementById('form');
const username = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');


//regex patterns
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const usernamepattern = /^(?!\s*$)[A-Za-z\s]{5,50}$/;
const passwordpattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[@$!]).{8,}$/;



//showError function
function showError(input,message){
    let parent = input.parentElement;
    parent.classList.add("error");
    parent.classList.remove("success");
    let small= input.parentElement.querySelector("small");
    small.innerText=message;
}
//showsuccess function
function showSuccess(input){
    let parent =input.parentElement;
    parent.classList.remove('error');
}
//event listener
form.addEventListener('submit',(event)=>{
    let isValid = true;
    //username validation check
    if(!usernamepattern.test(username.value.trim()))
    {
        showError(username,'Username should not be empty and must be greater than 5 character and should not include any special symbol or digit');
        isValid = false;
    }
    else{
        showSuccess(username);
    }
    //email validation check 
        if(!emailPattern.test(email.value.trim()))
    {
        showError(email,'Enter a valid email');
        isValid = false;
    }
    else{
        showSuccess(email);
    }
    //password validation
          if(!passwordpattern.test(password.value.trim()))
    {
        showError(password,'Your password must contain at least one uppercase letter one lowercase letter one digit one special character(@ $ !) and must be greater than 8 characters ');
        isValid = false;
    }
    else{
        showSuccess(password);
    }
    if (!isValid) {
    event.preventDefault(); 
  }
}
)



  const signupContainer = document.getElementById("signup-container");
  const signinContainer = document.getElementById("signin-container");

  const signupBtns = document.querySelectorAll(".signup-btn");
  const signinBtns = document.querySelectorAll(".signin-btn");

  // Handle Sign Up button click
  signupBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      // Show signup container and hide signin
      signupContainer.classList.add("active");
      signinContainer.classList.remove("active");

      // Set active button style
      signupBtns.forEach((b)=> {
        b.classList.add("active")
    });
      signinBtns.forEach((b) =>{
        b.classList.remove("active")
    });
    });
  });

  // Handle Sign In button click
  signinBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      // Show signin container and hide signup
      signinContainer.classList.add("active");
      signupContainer.classList.remove("active");

      // Set active button style
      signinBtns.forEach((b) => {
        b.classList.add("active")
    });
      signupBtns.forEach((b) => {
        b.classList.remove("active")
    });
    });
  });

  const pwdToggle = document.getElementById('pwdtoggle');
  const passwordInput = document.getElementById('password');

  // Toggle password visibility

  pwdToggle.addEventListener('click', () => {
    if(passwordInput.type === 'password') {
      passwordInput.type = 'text';
      pwdToggle.innerHTML = '<i class="fa-solid fa-eye"></i>';
    }
    else{
      passwordInput.type = 'password';
      pwdToggle.innerHTML = '<i class="fa-solid fa-eye-slash"></i>';
    }

  });



































//    //username validation check
//     if(!usernamepattern.test(username.value.trim()))
//     {
//         showError(username,'Username should not be empty and must be greater than 5 character and should not include any special symbol or digit');
//     }
//     else{
//         showSuccess(username);
//     }
//     //email validation check 2
//         if(!emailPattern.test(email.value.trim()))
//     {
//         showError(email,'Enter a valid email');
//     }
//     else{
//         showSuccess(email);
//     }
//     //password validation
//           if(!passwordpattern.test(password.value.trim()))
//     {
//         showError(password,'Your password must contain at least one uppercase letter one lowercase letter one digit one special character(@ $ !) and must be greater than 8 characters ');
//     }
//     else{
//         showSuccess(password);
//     }