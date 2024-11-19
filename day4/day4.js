const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay: true,
    autoplayspeed: 1000,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });



  $(document).ready(function(){
    $(".a").mouseenter(function(){
        $(".a").css("color","rgb(122,198,77)");
    })
    $(".a").mouseleave(function(){
      $(".a").css("color","#000");
  })
})
$(document).ready(function(){
  $(".b").mouseenter(function(){
      $(".b").css("color","rgb(122,198,77)");
  })
  $(".b").mouseleave(function(){
    $(".b").css("color","#000");
})
})
$(document).ready(function(){
  $(".c").mouseenter(function(){
      $(".c").css("color","rgb(122,198,77)");
  })
  $(".c").mouseleave(function(){
    $(".c").css("color","#000");
})
})
$(document).ready(function(){
  $(".d").mouseenter(function(){
      $(".d").css("color","rgb(122,198,77)");
  })
  $(".d").mouseleave(function(){
    $(".d").css("color","#000");
})
})
$(document).ready(function(){
  $(".e").mouseenter(function(){
      $(".e").css("color","rgb(122,198,77)");
  })
  $(".e").mouseleave(function(){
    $(".e").css("color","#000");
})
})
$(document).ready(function(){
  $(".f").mouseenter(function(){
      $(".f").css("color","rgb(122,198,77)");
  })
  $(".f").mouseleave(function(){
    $(".f").css("color","#000");
})
})

$(document).ready(function(){
  $(".link1").mouseenter(function(){
      $(".link1").css("color","rgb(31, 67, 10)");
  })
  $(".link1").mouseleave(function(){
    $(".link1").css("color","rgb(122,198,77)");
})
})



// Image//
$(document).ready(function(){
  $(".img1").mouseenter(function(){
      $(".img1").addClass("line");
  })
  $(".img1").mouseleave(function(){
      $(".img1").removeClass("line");
  })
})

// button //
$(document).ready(function(){
  $(".btn1").mouseenter(function(){
    $(".btn1").css("color","#000");
    $(".btn1").css("background-color","#fff")
  })
  $(".btn1").mouseleave(function(){
    $(".btn1").css("color","#fff");
    $(".btn1").css("background-color","#000")
  })
})

$(document).ready(function(){
  $(".btn2").mouseenter(function(){
    $(".btn2").css("color","#000");
    $(".btn2").css("background-color","#fff")
  })
  $(".btn2").mouseleave(function(){
    $(".btn2").css("color","#fff");
    $(".btn2").css("background-color","#000")
  })
})