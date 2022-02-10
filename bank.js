document.getElementById('login-submit').addEventListener('click',function(){
    //get user email
    const emailField=document.getElementById('user-email');
    const userEmail=emailField.value;
    
    
    //get user password
    const passwordField=document.getElementById('user-password');
    const userPassword=passwordField.value;
    
    //console.log(userPassword);

    if(userEmail=='utpal250@gmail.com' && userPassword=='secret'){
        window.location.href='banking.html'
    }
    else{
        alert('no match email and passowrd')
    }
})

