$(document).ready(function(){

	var button = $('#button');
  var offsetButton = button.offset();
	var arrow = $('.arrow');
	var hidePoint = ($(document).height()/3);

$("#stats-btn").click(function() {
	$('#stats').slideToggle(500);
});

var target = $("#scroll");
var targetOffset = target.offset().top;

  var $w = $(window).scroll(function() {
    if (($w.scrollTop()) >= targetOffset) {
      $('#arrow').css({
        "background-image": "url('img/arrow-up.png')"

      });
      $(".arrow-link").attr("href", "#logo");
    } else {
      $('#arrow').css({
        "background-image": "url('img/arrow-down.png')"
      });
      $(".arrow-link").attr("href", "#scroll");
      $

    }
  });

// Add smooth scrolling to all links
  $(".arrow-link").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });


});
