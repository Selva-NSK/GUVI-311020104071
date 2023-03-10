$(document).ready(function () {
    $("form").submit(function (event) {
       eml= $("#emailid").val(),
       pwd= $("#password").val(),
      // alert(eml+" "+pwd);
      $.ajax({
        url:'php/register.php',
        type: 'post',
        headers: {
            'Access-Control-Allow-Origin': '*'
         },
        data:{email:eml,password:pwd},
        success: function(response) { 
          console.log(response);
            alert("Account created");
            const now = new Date()
            const item = {
              id: eml,
              expiry: now.getTime() + 60*1000,
            }
            localStorage.setItem('info', JSON.stringify(item))
            window.location='profile.html'
        }
      });
      event.preventDefault();
    });
  });
