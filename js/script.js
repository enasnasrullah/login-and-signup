let signInEmail=document.getElementById('signInEmail')
let signInPassword = document.getElementById('signInPassword')
let login = document.getElementById('login')
let signUpbt = document.getElementById('signUpbt')

let Name = document.getElementById('Name')
let Email = document.getElementById('Email')
let password = document.getElementById('password')

let users=[];
let signUpUsers=[];


if (localStorage.getItem('newuser') == null) {
    signUpUsers = []

}
else {
    signUpUsers = JSON.parse(localStorage.getItem('newuser'))

}



// login.addEventListener('click', addUser)




function addUser() { 
    if (validation() == true) {
        for (let i=0;i< signUpUsers.length;i++)
{
    if (signUpUsers[i].useremail.toLowerCase() == signInEmail.value.toLowerCase()&& signUpUsers[i].userpassword.toLowerCase() == signInPassword.value.toLowerCase()){
        localStorage.setItem('name', signUpUsers[i].useremail)

        document.getElementById('login').setAttribute('href', 'home.html')
    }
    else {
        document.getElementById('signupfirst').innerHTML = `<p class='alert alert-danger'>please signUp first </p>`
    }
}

        
       let user = {
            email: signInEmail.value,
            password: signInPassword.value
        }
        users.push(user)
        document.getElementById('none').classList.replace('d-block', 'd-none')



        clearForm()

    }
    else {
      error()
    }


}






function clearForm() {
    signInEmail.value = ''
    signInPassword.value = ''
}

function validation() {
    if (signInPassword.value !== '' && signInEmail.value !== '') {
        return true
    }
    else {
        return false
    }

}
function error() {
    
    document.getElementById('none').classList.add ('d-block')
}

// signUpbt.addEventListener('click',signupForm)





function signupForm ()
{
    
    if (validationSignUp()==true &&  isEmailExist()==true){
    
    let newUser ={ 
        username:Name.value,
        useremail: Email.value,
        userpassword:password.value
    }

    signUpUsers.push(newUser)
    localStorage.setItem('newuser',JSON.stringify(signUpUsers))
  clearFormSignUp()
  document.getElementById('noneSignUp').classList.replace('d-block', 'd-none')
  document.getElementById('exist').innerHTML = '<span class="text-success m-3">Success</span>'



}
else{
    errorSignUp()
    
}
}
function clearFormSignUp()
{
    Name.value=''
    Email.value=''
    password.value=''
}


function validationSignUp ()
{
    if (Name.value !==''&&Email.value!==''&&password.value!=='')
    {
        return true 
    }
    else 
    {
        return false 
    }
}
function  errorSignUp()
{
    document.getElementById('noneSignUp').classList.add ('d-block')

}

function isEmailExist() {
    var result=true;
    for (var i = 0; i < signUpUsers.length; i++) {
        if (signUpUsers[i].useremail== Email.value) {
            document.getElementById('already').innerHTML=`<span class= ' alert alert-danger text-exist m-3 '>Already Exist </span>`
            document.getElementById('exist').classList='d-none'
         result = false


        }
    }
    return result
}

var welcome = localStorage.getItem('name')
if (welcome) {
    document.getElementById('newuser').innerHTML = "Welcome    " + welcome
}

