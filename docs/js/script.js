var mySwiper = new Swiper('.swiper-container', {
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
		renderCustom: function (swiper, current, total) {
			return current + ' of ' + total;
		},
	},
	mousewheel: {},
});

menu.onclick = function myFunction() {
	var x = document.getElementById("myTopnav");
	if (x.className === "topnav") {
		x.className += " responsive";
	} else{
		x.className = "topnav";
	}
}

$(function(){
	$('.toggles button').click(function(){
		var get_id = this.id;
		var get_current = $('.posts .' + get_id);

		$('.post').not(get_current).hide(500);
		get_current.show(500);
	});

	$('#all').click(function(){
		$('.post').show(500);
	});
});
