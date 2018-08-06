
let signUpButton = document.querySelector('#signup')


signUpButton.addEventListener('click', (e)=>{
    
    let email = document.querySelector('#email').value
    let password = document.querySelector('#password').value
    let password2 = document.querySelector('#password2').value
    
    if(password == password2){
        firebase.auth().createUserWithEmailAndPassword(email, password).then(()=>{
            console.log('user signed up')
        }).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
});
    }
    console.log(email)
    console.log(password)
    console.log(password2)
    
    document.querySelector('#email').value = ""
    document.querySelector('#password').value = ""
    document.querySelector('#password2').value = ""
    alert("Account Created")
})