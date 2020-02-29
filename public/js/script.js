$(document).ready(function(){
  $("body").on("click",function(){
    $(".searchresults").css({"display":"none"})
  })


  $("input").on("keyup",function(e){
    let value= e.target.value;
    $.ajax({
      url:"https://ecommeceapi.herokuapp.com/search?name="+value
    })
    .done(function(data){
      if(data[0]!==undefined){
        if (data[0].name===value){
          $(".searchresults").css({"display":"block","transition":"3s"})
          $(".searchresults").html(`
            <span class="results">${data[0].name} <font color="green">available</font><br><a href="/search?name=${data[0].name}">View</a></span>
            `)
          }


        }
      });
    });

  });
