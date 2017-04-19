$(document).ready(function() {

  $("#about_section").hide(); //lines 3-6 hide main content sections on initial page load, so toggle works on click
  $("#projects_section").hide();
  $("#skills_section").hide();
  $("hr").hide();

  $("#sidebar").click(function() { //this allows lines 9-11 to execute on page load, automatically
    $( "#sidebar" ).addClass("shown"); //adds a class to the sidebar which slides it from the left using a CSS transition;
    $("#home_page").addClass("down"); //adds a class to the home_page section which slides it down from the top automatically
    $("hr").show(4000); //decorative horizontal rule line scrolls across the screen on page load and underlines "Aaron White"
  });

  $(function() { //triggers the above click automatically so the side bar slides in when the page initially loads
    $("#sidebar").click();
  });

  $(".about").on("click", function() { //this toggles the about section, when the about link is clicked
    $("#about_section").show(200);
    // slideToggle(800, "linear", function() {
    // });
    $("#projects_section").hide(); //21-23 hide content sections other than about section when it is clicked
    $("#skills_section").hide();
    $("#home_page").hide();
    if($("div.about").hasClass('left')){ //this if section slides the sidebar about item to the right and left
        $("div.about").removeClass('left').addClass('right');
        $(".about > a").removeClass("left").addClass('right');
    } else if ($("div.about").hasClass('right')) {
      $("div.about").removeClass('right').addClass('left');
      $(".about > a").removeClass("right").addClass('left');
      $("#about_section").hide(200);
      $("#home_page").show(300);
    }
    $(".projects, .skills, .projects > a, .skills > a").removeClass("right");
    $(".skills, .skills > a, .projects, .projects > a").addClass("left");
  });

  $(".projects").on("click", function() { //this toggles the about section, when the about link is clicked
    $("#projects_section").show(200);
    $("#about_section").hide();
    $("#skills_section").hide();
    $("#home_page").hide();
    if($("div.projects").hasClass('left')){ //this if section slides the sidebar about item to the right and left
        $("div.projects").removeClass('left').addClass('right'); 
        $(".projects > a").removeClass("left").addClass('right');
    }else if ($("div.projects").hasClass('right')) {
      $("div.projects").removeClass('right').addClass('left');
      $(".projects > a").removeClass("right").addClass('left');
      $("#projects_section").hide(200);
      $("#home_page").show(300);
    }
    $(".about, .skills, .about > a, .skills > a").removeClass("right");
    $(".skills, .skills > a, .about, .about > a").addClass("left");
  });

  $(".skills").click(function() { //this toggles the about section, when the about link is clicked
    $("#skills_section").show(200);
    $("#about_section").hide();
    $("#projects_section").hide();
    $("#home_page").hide();
    if($("div.skills").hasClass('left')){ //this if section slides the sidebar about item to the right and left
        $("div.skills").removeClass('left').addClass('right');
        $(".skills > a").removeClass("left").addClass('right');
    }else if ($("div.skills").hasClass('right')) {
      $("div.skills").removeClass('right').addClass('left');
      $(".skills > a").removeClass("right").addClass('left');
      $("#skills_section").hide(200);
      $("#home_page").show(300);
    }
    $(".about, .projects, .about > a, .projects > a").removeClass("right");
    $(".projects, .projects > a, .about, .about > a").addClass("left");
  });

  var bounceInUp = true; //this section triggers the bounce animation for the linkedin, github, and resume icons when the contact link is clicked on the top navbar; uses a jQuery plugin called "animate"
  $(".contact").on("click", function() {
    if (bounceInUp === true) {
      $("#shake, #shake2, #shake3, #shake4").removeClass('bounceInUp').addClass("bounce").delay(1000).queue(function(){
      $(this).removeClass("bounce").dequeue();
      });
      bounceInUp = false;
    } else if (bounceInUp === false){
      $("#shake, #shake2, #shake3, #shake4").addClass("bounce").delay(1000).queue(function(){
      $(this).removeClass("bounce").dequeue();
      });
      bounceInUp = true;
    }
  });

//BEGIN TOP NAVBAR SECTION FOR MOBILE SCREENS

  $("#skills_top").on("click", function() {
      $("#skills_section").animate({width:'toggle'}, 200);
      $("#home_page").hide();
      $("#about_section").hide();
      $("#projects_section").hide();
      if ($("#home_page").hasClass("down")) {
        $("#home_page").removeClass("down");
        $("#home_page").hide();
      } else {
        $("#home_page").addClass("down");
        $("#home_page").show(500);
      }
  });

  $("#projects_top").on("click", function() {
      $("#projects_section").animate({width:'toggle'}, 200);
      $("#home_page").hide();
      $("#about_section").hide();
      $("#skills_section").hide();
      if ($("#home_page").hasClass("down")) {
        $("#home_page").removeClass("down");
        $("#home_page").hide();
      } else {
        $("#home_page").addClass("down");
        $("#home_page").show(800);
      }
  });

  $("#about_top").on("click", function() {
      $("#about_section").animate({width:'toggle'}, 200);
      $("#skills_section").hide();
      $("#projects_section").hide();
    if ($("#home_page").hasClass("down")) {
      $("#home_page").removeClass("down");
      $("#home_page").hide();
    } else {
      $("#home_page").addClass("down");
      $("#home_page").show(800);
    }
  });

}); //end of dom ready
