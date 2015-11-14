$(function(){
  $("#page-home").on("pagebeforeshow",function(){
    HomeController.getHome();    
  });
});


