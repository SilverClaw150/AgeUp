
let signUpButton = document.querySelector('#signup')


signUpButton.addEventListener('click', (e)=>{
    let email = document.querySelector('#email').value
    let password = document.querySelector('#password').value

    
   firebase.auth().signInWithEmailAndPassword(email, password)
   .then(()=>{
       console.log('user logged in!')
   }).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
});
        
  // Handle Errors here.
 
    
    console.log(email)
    console.log(password)
    
    document.querySelector('#email').value = ""
    document.querySelector('#password').value = ""
    alert("Account Loggen In!")
    
})