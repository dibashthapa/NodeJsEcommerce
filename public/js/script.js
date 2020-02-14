$(document).ready(function(){
  $("input").on("focusout",function(){
    $(".searchresults").css({"display":"none","transition":"3s"})
  })
  $("input").on("keyup",function(e){
    let value= e.target.value;
    $.ajax({
      url:"https://ecommeceapi.herokuapp.com/search?name="+value
    })
    .done(function(data){
if(data[0]!==undefined){
      if (data[0].name===value){
        $(".searchresults").css({"transition":"2s","display":"block"})
        $(".searchresults").html(`
          <span class="results">${data[0].name} <font color="green">available</font><button type="button" onclick="add(this)">Add</button></span>
          `)
        }


}
        });
      });

    });
