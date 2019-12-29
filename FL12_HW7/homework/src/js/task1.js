/* eslint-disable no-magic-numbers */
const email = prompt('Enter your email');
let password;
let passcheck = false;
let newpass = false;
if(email){
     if(email.length > 5){
     if(email === 'user@gmail.com' || email === 'admin@gmail.com'){
     passcheck = true;
     }else{
          alert('I don’t know you');
     }
     }else{
     alert('I don’t know any emails having name length less than 5 symbols');
     }
}else{
     alert('Canceled');
}
if(passcheck){
     password = prompt('Enter your password');
     if(password){
     if(email === 'user@gmail.com' && password === 'UserPass'){
     newpass = true;
     }else if(email === 'admin@gmail.com' && password === 'AdminPass'){
     newpass = true;
     }else{
          alert('Wrong password');
     }
     }else{
     alert('Canceled');
     }
}
if(newpass){
     newpass = confirm('Do you want to change your password?');
     if(newpass){
     const oldPass = prompt('Enter the old password');
     if(password === oldPass){
          const newPass = prompt('Enter a new password');
          if(newPass.length > 5){
          const passConfirm = prompt('Enter a new password again');
          if(newPass === passConfirm){
          alert('You have successfully changed your password');
          password = newPass;
          }else{
          alert('You wrote the wrong password');
          }
          }else{
          alert('It’s too short password. Sorry');
          }
     }else{
          alert('Wrong password');
     }
     }else{
     alert('You have failed the change');
     }
}