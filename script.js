let password =document.getElementById('password');
let eyeicone=document.getElementById('eyeicone');



eyeicone.onclick=function(){

    if(password.type=='password'){
        password.type='text';
        eyeicone.src='eye-open.png';
    }else{
        password.type='password';  
        eyeicone.src='eye-close.png';

    }

}