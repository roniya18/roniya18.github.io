var nameError=document.getElementById('name-error')
var emailError=document.getElementById('email-error')
var phoneError=document.getElementById('phone-error')
var subjectError=document.getElementById('subject-error')
var messageError=document.getElementById('message-error')
var submitError=document.getElementById('submit-error')

function validateName(){
    var name=document.getElementById('name').value;
    if (name. length == 0)
    {
        nameError.innerHTML= 'Name is required'
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/))
    {
        nameError. innerHTML = 'Write full name'
        return false;
    }
    nameError.innerHTML = ''
    return true;
}
function validatePhone(){
    var phone=document.getElementById('phone').value;
    if (phone. length == 0)
    {
        phoneError.innerHTML= 'Phone Number is required'
        return false;
    }
    
    if(!phone.match(/^\d{10}$/))
    {
        phoneError.innerHTML= '10 digits required'
        return false;
    }
    phoneError.innerHTML=''
    return true;
}
function validateEmail(){
    var email=document.getElementById('email').value;
    if (email. length == 0)
    {
        emailError.innerHTML= 'Email is required'
        return false;
    }
    if(!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/))
    {
        emailError.innerHTML= 'Invalid mail id'
        return false;
    }
    emailError.innerHTML=''
    return true;
}
function validateSubject(){
    var subject=document.getElementById('subject').value;
    if (subject. length <= 15)
    {
        subjectError.innerHTML= 'Minimum 15 characters required'
        return false;
    }
    subjectError.innerHTML=''
    return true;
}
function validateMessage(){
    var message=document.getElementById('message').value;
    if (message. length <= 50)
    {
        messageError.innerHTML= 'Minimum 50 characters required'
        return false;
    }
    messageError.innerHTML=''
    return true;
}


