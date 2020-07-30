//check off specific todo by clicking
$("ul").on("click","li",function(){
    //if li is gray
    $(this).toggleClass("completed");
});

//click on X to delete todo
$("ul").on("click","span",function(event){
    //
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    //this stopPropagation will stop events from bubbling up. It'll fire on span but it won't continue to li.
    event.stopPropagation();
    
});


$("input[type='text']").keypress(function(event){
   if(event.which === 13){
        var todoText = $(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> "+ todoText +"</li>");
   } 

});

$(".fa-plus").click(function(){
    $("input[type='text']").fadeToggle();
})
