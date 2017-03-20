$(document).ready(function() {

  $("#about_section").hide(); //hides about section, so toggle works on click
  $("#projects_section").hide();
  $("#contact_section").hide();
  $("hr").hide();

  $("#sidebar").click(function() { //on click, adds a class to the sidebar which slides it from the left using a CSS transition
    $( "#sidebar" ).addClass("shown");
    $("#home_page").addClass("down");
    $("hr").show(4000);
  });

  $(function() { //triggers the above click automatically so the side bar slides in when the page initially loads
    $("#sidebar").click();
  });

  $("#about").on("click", function() { //this toggles the about section, when the about link is clicked
    $("#about_section").slideToggle(800, "linear", function() {
    });
    $("#projects_section").hide();
    $("#contact_section").hide();
    $("#home_page").hide();
    if($(this).hasClass('left')){ //this if section slides the sidebar about item to the right and left
        $(this).removeClass('left').addClass('right');
        $("#about > a").removeClass("left").addClass('right');
    }else if ($(this).hasClass('right')) {
      $(this).removeClass('right').addClass('left');
      $("#about > a").removeClass("right").addClass('left');
      $("#home_page").show(800);
    }else{
        $(this).addClass('right');
    }
    $("#projects, #contact, #projects > a, #contact > a").removeClass("right");
    $("#contact, #contact > a, #projects, #projects > a").addClass("left");
  });

  $("#projects").on("click", function() { //this toggles the about section, when the about link is clicked
    $("#projects_section").slideToggle(800, "linear", function() {
    });
    $("#about_section").hide();
    $("#contact_section").hide();
    $("#home_page").hide();
    if($(this).hasClass('left')){ //this if section slides the sidebar about item to the right and left
        $(this).removeClass('left').addClass('right');
        $("#projects > a").removeClass("left").addClass('right');
    }else if ($(this).hasClass('right')) {
      $(this).removeClass('right').addClass('left');
      $("#projects > a").removeClass("right").addClass('left');
      $("#home_page").show(800);
    }else{
        $(this).addClass('right');
    }
    $("#about, #contact, #about > a, #contact > a").removeClass("right");
    $("#contact, #contact > a, #about, #about > a").addClass("left");
  });

  $("#contact").click(function() { //this toggles the about section, when the about link is clicked
    $("#contact_section").slideToggle(800, "linear", function() {
    });
    $("#about_section").hide();
    $("#projects_section").hide();
    $("#home_page").hide();
    if($(this).hasClass('left')){ //this if section slides the sidebar about item to the right and left
        $(this).removeClass('left').addClass('right');
        $("#contact > a").removeClass("left").addClass('right');
    }else if ($(this).hasClass('right')) {
      $(this).removeClass('right').addClass('left');
      $("#contact > a").removeClass("right").addClass('left');
      $("#home_page").show(800);
    }else{
        $(this).addClass('right');
    }
    $("#about, #projects, #about > a, #projects > a").removeClass("right");
    $("#projects, #projects > a, #about, #about > a").addClass("left");
  });

  var bounceInUp = true; //this section triggers the bounce animation for the linkedin, github, and resume icons when the contact link is clicked on the top navbar
  $("#contact_top").on("click", function() {
    if (bounceInUp === true) {
      $("#shake, #shake2, #shake3").removeClass('bounceInUp').addClass("bounce").delay(1000).queue(function(){
      $(this).removeClass("bounce").dequeue();
      });
      bounceInUp = false;
    } else if (bounceInUp === false){
      $("#shake, #shake2, #shake3").addClass("bounce").delay(1000).queue(function(){
      $(this).removeClass("bounce").dequeue();
      });
      bounceInUp = true;
    }
  });
});
