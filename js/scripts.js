$(document).ready(function(){
    $("#design-img").click(function(){
        $("#design-img").hide();
        $("#p-design").show();
        
    });
    $("#p-design").click(function(){
        $("#p-design").hide();
        $("#design-img").show();
    
    });
    $("#development-img").click(function(){
        $("#development-img").hide();
        $("#p-development").show();
        
    }) ;
    $("#p-development").click(function(){
        $("#p-development").hide();
        $("#development-img").show();
        
    });
    $("#management-img").click(function(){
        $("#management-img").hide();
        $("#p-management").show();
        
    });
    $("#p-management").click(function(){
        $("#p-management").hide();
        $("#management-img").show();
    });
});