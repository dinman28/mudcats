$(document).ready(function() { 
	$("#home").click( function () {
		$("#nav ul li a").removeClass("navSelected");
		$("#home a").addClass("navSelected");
		$("#main div").addClass("hidden");
		$("#main p").removeClass("hidden").html("Welcome to the home page");
	});	
	$("#roster").click( function () {
		$("#nav ul li a").removeClass("navSelected");
		$("#main div").addClass("hidden");		
		$("#rosterContent").removeClass("hidden");
		$("#main p").addClass("hidden");
		$("#roster a").addClass("navSelected");
		
	});	
	$("#schedule").click( function () {
		$("#nav ul li a").removeClass("navSelected");
		$("#schedule a").addClass("navSelected");
		$("#main div").addClass("hidden");		
		$("#main p").removeClass("hidden").html("Welcome to the schedule page");
	});	
	$("#results").click( function () {
		$("#nav ul li a").removeClass("navSelected");
		$("#results a").addClass("navSelected");
		$("#main div").addClass("hidden");		
		$("#main p").removeClass("hidden").html("Welcome to the results page");
	});	
	$("#standings").click( function () {
		$("#nav ul li a").removeClass("navSelected");
		$("#standings a").addClass("navSelected");
		$("#main div").addClass("hidden");		
		$("#main p").removeClass("hidden").html("Welcome to the standings page");
	});	
});
