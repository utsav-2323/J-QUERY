$(document).ready(function(){
    $(".project").click(function(){
        $(this).next().slideToggle();
        $(this).find("#p1").toggleClass("fa-chevron-down fa-chevron-up")
    })
})

$(document).ready(function(){
    $("#menu").click(function(){
        $(".saedbal").toggleClass('hide');
        $(".saedbal1").toggleClass('show');
        $(".nav-m").toggleClass('nhide')
    })
})



var options = {
    series: [{
    name: 'Sales',
    data: [4, 3, 10, 9, 29, 19, 22, 9, 12, 7, 19, 5, 13, 9, 17, 2, 7, 5]
  }],
    chart: {
    height: 350,
    type: 'line',
  },
  forecastDataPoints: {
    count: 7
  },
  stroke: {
    width: 5,
    curve: 'smooth'
  },
  xaxis: {
    type: 'datetime',
    categories: ['1/11/2000', '2/11/2000', '3/11/2000', '4/11/2000', '5/11/2000', '6/11/2000', '7/11/2000', '8/11/2000', '9/11/2000', '10/11/2000', '11/11/2000', '12/11/2000', '1/11/2001', '2/11/2001', '3/11/2001','4/11/2001' ,'5/11/2001' ,'6/11/2001'],
    tickAmount: 10,
    labels: {
      formatter: function(value, timestamp, opts) {
        return opts.dateFormatter(new Date(timestamp), 'dd MMM')
      }
    }
  },
  title: {
    text: 'Forecast',
    align: 'left',
    style: {
      fontSize: "16px",
      color: '#666'
    }
  },
  fill: {
    type: 'gradient',
    gradient: {
      shade: 'dark',
      gradientToColors: [ '#FDD835'],
      shadeIntensity: 1,
      type: 'horizontal',
      opacityFrom: 1,
      opacityTo: 1,
      stops: [0, 100, 100, 100]
    },
  },
  yaxis: {
    min: -10,
    max: 40
  }
  };

  var chart = new ApexCharts(document.querySelector("#chart"), options);
  chart.render();




//   gor chart

var options = {
    series: [44, 55, 41, 17, 15],
    chart: {
    type: 'donut',
  },
  responsive: [{
    breakpoint: 480,
    options: {
      chart: {
        width: 200
      },
      legend: {
        position: 'bottom'
      }
    }
  }]
  };

  var chart = new ApexCharts(document.querySelector("#chart1"), options);
  chart.render();



//   cerendal ///


document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'dayGridMonth'
    });
    calendar.render();
  });
