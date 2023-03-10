$(document).ready(function () {
  const itemStr = localStorage.getItem('info');
  if (itemStr) {
    const item = JSON.parse(itemStr)
    const now = new Date();
    if (now.getTime() > item.expiry) {
      localStorage.removeItem('info');
    }
    else{
      window.location='profile.html';
    }
  }
    $("form").submit(function (event) {
       eml= $("#emailid").val(),
       pwd= $("#password").val(),
      // alert(eml+" "+pwd);
      $.ajax({
        url:'php/login.php',
        type: 'post',
        headers: {
            'Access-Control-Allow-Origin': '*'
         },
        data:{email:eml,password:pwd},
        success: function(response) { 
          if(response=='register'){
            alert("You have not registered!!");
            window.location='register.html'
          }
          else if(response=='verified'){
            const now = new Date()
            const item = {
              id: eml,
              expiry: now.getTime() + 60*1000,
            }
            localStorage.setItem('info', JSON.stringify(item))
            window.location='profile.html'
          }
          else{
            $("#login_label").text("Incorrect password");
          }
        }
      });
      event.preventDefault();
    });
  });
