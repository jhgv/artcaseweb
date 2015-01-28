(function(){

	$("#compradores").slideUp();

	$(".cell").on("click",function(){

		var tabGroup = $(this).attr('tab-group');
		var tabTarget = $(this).attr('tab-target');

		$("."+tabGroup).hide();
		$("#"+tabTarget).fadeIn(1000);

	});

})();