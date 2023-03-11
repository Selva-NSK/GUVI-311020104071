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
       $("#un").text("");
       $("#pwd").text("");
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
            $("#un").text("No user Name found");
          }
          else if(response=='verified'){
            const now = new Date()
            const item = {
              id: eml,
              expiry: now.getTime() + 5*60*1000,
            }
            localStorage.setItem('info', JSON.stringify(item))
            window.location='profile.html'
          }
          else if(response=='pwd'){
            $("#pwd").text("Incorrect password");
          }
          else alert(response);
        }
      });
      event.preventDefault();
    });
  });

console.log("js connected");
