//parallax effect video

let video = document.querySelector('video');
  window.addEventListener('scroll', function(){
    let value = 1 + window.scrollY/-600;
      video.style.opacity = value;
  });


  var myIndex = 0;
  carousel();
  
  function carousel() {
    var i;
    var x = document.getElementsByClassName("slider");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    setTimeout(carousel, 2000); // Change image every 2 seconds
  }
  
  
