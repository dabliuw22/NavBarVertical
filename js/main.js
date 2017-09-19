$(document).ready(function () {
	$('#btn-menu').click(function (e) {
		e.preventDefault();
		if($(this).hasClass('activo')) {
			$(this).removeClass('activo');
			$("#menu-container").hide("slide", {direction: "left"}, 200);
		} else {
			$(this).addClass('activo');
			$("#menu-container").show("slide", {direction: "left"}, 200);
			$("#main-container").css({"margin-left": 60});

		}
	});
});