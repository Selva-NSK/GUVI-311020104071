$(document).ready(function () {
    $("form").submit(function (event) {
       eml= $("#emailid").val(),
       pwd= $("#password").val(),
       fn=$("#fname").val(),
       ln=$("#lname").val(),
       phn=$('#phone').val(),
       cpwd=$('#cpass').val(),
       output = $('input[name=gender]:checked',
                '#frm').val();
      if(phn.length!=10){
        $("#phn").text("Enter 10 digit number");
      }
      else if(pwd.length<6){
        $("#pwd1").text("Password must have minimum length of 6");
      }
      else if(pwd!=cpwd){
        $("#pwd").text("Password doesnt match");
      }
      else{
        $.ajax({
          url:'php/register.php',
          type: 'post',
          headers: {
              'Access-Control-Allow-Origin': '*'
           },
          data:{email:eml,password:pwd,fname:fn,lname:ln,phone:phn,gender:output},
          success: function(response) { 
            console.log(response);
            if(response=='success'){
              alert("Account created");
              const now = new Date()
              const item = {
                id: eml,
                expiry: now.getTime() + 60*1000,
              }
              localStorage.setItem('info', JSON.stringify(item))
              window.location='profile.html'
            }
            else if(response=='exist'){
              alert('id already exists try logging in..');
              sessionStorage.removeItem(eml);
              window.location='login.html'
            }
            else{
              alert('An '+response +' error occured');
            } 
          
          }
        });
      }
      event.preventDefault();
    });
  });
  $('frm').on('click', function() {
    console.log("l");
    alert($('input[name=gender]:checked', '#myForm').val());
  });
