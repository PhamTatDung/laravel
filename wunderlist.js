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
});