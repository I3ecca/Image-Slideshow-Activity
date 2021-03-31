$(function(){

  let galleryImg= $(".gallery").find("img").first();

  let images = [
  "img/laptop-mobile_small.jpg", 
  "img/laptop-on-table_small.jpg", 
  "img/people-office-group-team_small.jpg" 
  ];
  
  let i = 0;

  //The set interval function is selfinvoking. 
  setInterval(function(){
   
    i = (i + 1) % images.length;
    console.log(images.length);
    galleryImg.fadeOut(function() {
      $(this).attr("src", images[i]);
      $(this).fadeIn();
      console.log(galleryImg.attr("src"));
    })
  }, 4000);


    
});

// To understand the modulo, just know that when the number is greater on the right side, you have to ask how many times the number on the right can go into the one on the left. If it cannot go into the number, the remainder is the number on the left. 

// (0 + 1) 1 % 3 = 1
// (1 + 1) 2 % 3 = 2
// (2 + 1) 3 % 3 = 0

