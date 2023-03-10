$(document).ready(function(){
    const item=localStorage.getItem('info');
    const id=JSON.parse(item).id;
    console.log(id);
    $("p").text(id);
})
