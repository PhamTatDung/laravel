$(document).ready(function() {
	////////////Đóng mở Left
    $(".toggleButton").click(function(){
    	$(".left").toggleClass("leftSmall");
    })
    ///////////Click ô input Search  thay đổi icon
    $(".searchInput").click(function(){
    	$(".searchIcon svg.search").hide();
    	$(".searchIcon svg.x").show();
    });
    $(".searchIcon svg.search").click(function(){
    	$(".searchIcon svg.search").hide();
    	$(".searchIcon svg.x").show();
    });
    $(".searchIcon svg.x").click(function(){
    	$(".searchIcon svg.x").hide();
    	$(".searchIcon svg.search").show();
    	 $(".searchInput input").val("");
    });
    ///////////// Ẩn hiện setting
    $(".user").click(function(){
    	$(".setting").toggleClass("show");
    });
    $(document).click(function (e){
	    var setting = $(".user");
	    if (!setting.is(e.target) && setting.has(e.target).length === 0)
	    {
	        $(".setting").removeClass("show");
	    }
	});
	//////////////hiện form create List
	$(".addList").click(function(){
		$(".mask").show();
		$(".formNewList").show();
	});
	$(".footer .cancel").click(function(){
		$(".mask").hide();
		$(".formNewList").hide();
	});
	$(".formNewList .listName input").keydown(function(){
		var val = $(this).val();
		if(val != ''){
			$(".formNewList .footer .save").css("background-color", "#328ad6");
		}
		else{
			$(".formNewList .footer .save").css("background-color","#96c2e8");
		}
	});
});