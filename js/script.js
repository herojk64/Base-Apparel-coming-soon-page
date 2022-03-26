function submit(){
email=document.getElementById('email').value;

    
    
    
const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
if(re.test(String(email).toLowerCase()) != true)
{
    error_msg=document.getElementById('error_msg');
    error_image=document.getElementById('error_img');
    
    error_msg.style.display="block";
    error_img.style.display="block";
}
    
}