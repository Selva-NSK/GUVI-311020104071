$(document).ready(function(){
    $("#btn").click(()=>{
        localStorage.removeItem('info');
        window.location='index.html';
    })
    const item=localStorage.getItem('info');
    if(!item) window.location='login.html';
    const now = new Date();
    const t=JSON.parse(item);
    if (now.getTime() > t.expiry){
        localStorage.removeItem('info');
        window.location='login.html';
    }
    console.log(t.id);
    $.ajax({
        url:'php/profile.php',
        type: 'GET',
        data:{email:t.id},
        success: function(data) { 
            const items=JSON.parse(data);
            $('#email').text(items.email);
            $('#name').text(items.fname+" "+items.lname);
            $('#lname').text(items.lname);
            $('#fname').text(items.fname);
            $('#phone').text(items.phone);
            $('#gender').text(items.gender);
        },
    });
})
