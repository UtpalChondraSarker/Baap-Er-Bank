document.getElementById('login-submit').addEventListener('click',function(){
    //get user email
    const emailField=document.getElementById('user-email');
    const userEmail=emailField.value;
    
    //get user password
    const passwordField=document.getElementById('user-password');
    const userPassword=passwordField.value;
    //console.log(userPassword);

    if(userEmail=='utpal250@gmail.com' && userPassword=='secret'){
        console.log('valid user');
    }
    else{
        console.log('No match email and password');
    }
    window.location.href='banking.html'
})