$(document).ready(function() {
	
//Animate
(function($) {
		$.fn.animated = function(inEffect, outEffect) {
				$(this).css("opacity", "0").addClass("animated").waypoint(function(dir) {
						if (dir === "down") {
								$(this).removeClass(outEffect).addClass(inEffect).css("opacity", "1");
						} else {
								$(this).removeClass(inEffect).addClass(outEffect).css("opacity", "1");
						};
				}, {
						offset: "70%"
				}).waypoint(function(dir) {
						if (dir === "down") {
								$(this).removeClass(inEffect).addClass(outEffect).css("opacity", "1");
						} else {
								$(this).removeClass(outEffect).addClass(inEffect).css("opacity", "1");
						};
				}, {
						offset: -$(window).height()
				});
		};
})(jQuery);


// $(".").animated("fadeIn","fadeOut");


// Smooth scroll
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

	//Цели для Яндекс.Метрики и Google Analytics
	$(".count_element").on("click", (function() {
		ga("send", "event", "goal", "goal");
		yaCounterXXXXXXXX.reachGoal("goal");
		return true;
	}));

	//SVG Fallback


	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("#form").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				
				$("#form").trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};
// Отмена перетаскивания изображений
	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

});
// Preloader
$(window).load(function() { 
	$(".loader_Inner").fadeOut(); 
	$(".loader").delay(400).fadeOut("slow"); 
});


