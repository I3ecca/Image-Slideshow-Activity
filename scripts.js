$(function(){

  let galleryImg= $(".gallery").find("img").first();

  let images = [
  "img/laptop-mobile_small.jpg", 
  "img/laptop-on-table_small.jpg", 
  "img/people-office-group-team_small.jpg" 
  ];
  
  let i = 0;
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


