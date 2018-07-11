
$(document).ready(function() {

	$(".header").on('click', function(){
		$('.words').removeClass('active')
		$(this).find('+ .words').addClass('active')
		$('.header').removeClass('active')
		$(this).find('+ .header').addClass('active')
			
	})

})
