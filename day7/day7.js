$(document).ready(function() {

    var counters = $(".count");
    var countersQuantity = counters.length;
    var counter = [];
  
    for (i = 0; i < countersQuantity; i++) {
      counter[i] = parseInt(counters[i].innerHTML);
    }
  
    var count = function(start, value, id) {
      var localStart = start;
      setInterval(function() {
        if (localStart < value) {
          localStart++;
          counters[id].innerHTML = localStart;
        }
      }, 40);
    }
  
    for (j = 0; j < countersQuantity; j++) {
      count(0, counter[j], j);
    }
  });





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



  // Image
  $(document).ready(function(){
    $(".img1").mouseenter(function(){
        $(".img1").addClass("line");
    })
    $(".img1").mouseleave(function(){
        $(".img1").removeClass("line");
    })
  })

  $(document).ready(function(){
    $(".img2").mouseenter(function(){
        $(".img2").addClass("line");
    })
    $(".img2").mouseleave(function(){
        $(".img2").removeClass("line");
    })
  })

  $(document).ready(function(){
    $(".img3").mouseenter(function(){
        $(".img3").addClass("line");
    })
    $(".img3").mouseleave(function(){
        $(".img3").removeClass("line");
    })
  })

  $(document).ready(function(){
    $(".img4").mouseenter(function(){
        $(".img4").addClass("line");
    })
    $(".img4").mouseleave(function(){
        $(".img4").removeClass("line");
    })
  })