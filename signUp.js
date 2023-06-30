const emailError = document.getElementById('email-error');
const form = document.getElementById('form');
const email = document.getElementById('email');
const btn = document.getElementById('btn');

form.addEventListener('submit', function(e){
    e.preventDefault();
    if(validateEmail()){
        this.submit();
    }
})

function validateEmail(){
    // if(email.length == 0){
    //     console.log('great');
    //     return false;
    // }
    if(!email.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        console.log(emailError.style.textContent = 'valid email required');
        return false;
    }
    
}

