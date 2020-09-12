$(document).ready(function(){
    $('.tabs').tabs();
	$('.sidenav').sidenav();
	// PARALAX
	$('.parallax').parallax();
	$('.slider').slider({
		height:600,
		indicators:false
	});
	$('input#input_text, textarea#textarea2').characterCounter();
	$('select').formSelect();
	$('.collapsible').collapsible();
	$('.carousel').carousel();
  		setInterval(function() {
    $('.carousel').carousel('next');
  }, 2000);
});