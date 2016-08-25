$( document ).ready(function() {
  // Handler for .ready() called.


$(".read-more") .click(slideDown);

function slideDown() {
	//step1
	event.preventDefault(); 
	//step2
	$("#show-this-on-click").slideDown();
	$(".read-less").show();
	$(".read-more").hide();
}


$(".read-less") .click(slideUp);

function slideUp() {
	//step1
	event.preventDefault(); 
	//step2
	$("#show-this-on-click").slideUp();
	$(".read-less").hide();
	$(".read-more").show();
}


$(".learn-more") .click(asideDown);

function asideDown() {
	//step1
	event.preventDefault(); 
	//step2
	$("#learn-more-text").slideDown();
	$("#learn-more-text").show();
	$(".learn-more").hide();
}


});