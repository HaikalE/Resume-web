const form = document.querySelector('form');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const submitButton = document.getElementById('submit');
const clearButton = document.getElementById('clear');
const forgotPasswordLink = document.getElementById('forgot-password');

clearButton.addEventListener('click', (event) => {
  event.preventDefault();
  // Clear input fields
  usernameInput.value = '';
  passwordInput.value = '';
});


forgotPasswordLink.addEventListener('click', (event) => {
  event.preventDefault();
  // Redirect to forgot password page
});

form.addEventListener('reset', (event) => {
  event.preventDefault();
  // Clear input fields
  usernameInput.value = '';
  passwordInput.value = '';
});

submitButton.addEventListener('click', () => {
    if (validateForm()==true){
        alert("Anda berhasil login")
        form.submit();
    }
    else {
        alert("ID / password salah")
    }
});

function validateForm() {
    if (usernameInput.value=="haikal123" && passwordInput.value=="alhamdulillahberkah123"){
        return true;
    }
    else {
        alert("ID / password salah");
        return false;
    }
}