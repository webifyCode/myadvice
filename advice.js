$(function(){
  
  var advice = {
    1: "Little drops of water make a mighty ocean.",
    
    2: "Throught out your life advance daily, becoming more skillful than yesterday, more skillful than today. This is never-ending",
    
    3: "Be true to the thought of the moment and avoid distraction. Other than continuing to exert yourself, enter into nothing else, but go to the extent of living single thought by single thought.",

    4: "It is easy to sit up and take notice, what's difficult is standing up and taking action."
  };
  

  $('.randomize').on('click', function(){

  
  num = Math.ceil(Math.random() * 4);

  hash = num * 99;
  
  $('.advText').empty().text('"'+advice[num]+'"').fadeOut(0).fadeIn(400);

  $('.advNum #num').empty().text(hash);

  $('.advNum').fadeOut(0).fadeIn(400);

});
  
});
