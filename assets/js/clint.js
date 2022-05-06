$(function() {
    var $clientslider = $('#clientlogo');
    var clients = $clientslider.children().length;
    var clientwidth = (clients * 220); 
    $clientslider.css('width', clientwidth);
    var rotating = true;
    var clientspeed = 1800;
    var seeclients = setInterval(rotateClients, clientspeed);
    $(document).on({
      mouseenter: function() {
        rotating = false;
      },
      mouseleave: function() {
        rotating = true;
      }
    }, '#ourclients');
    function rotateClients() {
      if (rotating != false) {
        var $first = $('#clientlogo li:first');
        $first.animate({
          'margin-left': '-220px'
        }, 2000, function() {
          $first.remove().css({
            'margin-left': '0px'
          });
          $('#clientlogo li:last').after($first);
        });
      }
    }
  });