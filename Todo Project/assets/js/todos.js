//Check off Todos
$("ul").on("click","li",function(){
	$(this).toggleClass("completed");
});

//Click on X to delete
$("ul").on("click","span",function(e){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	e.stopPropagation();
});

$("input[type='text']").keypress(function(e){
	if(e.which===13){
		//Taking input from user
		var todoText=$(this).val();
		//Create new LI and add to UL
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> "+todoText+"</li>");
		$(this).val("");
	}
});

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});