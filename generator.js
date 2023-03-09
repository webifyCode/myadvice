$(() => {

  $('.randomize').on('click', () => {

    $.ajax({
      type: 'GET',
      url: 'https://api.adviceslip.com/advice',
      setTimeout: '2000',
      success: (data) => {

        var dataJson = JSON.parse(data);

        var dataContent = dataJson.slip;

        $('.advText').fadeOut(400, function() {
          
          $(this).empty().text(dataContent.advice);
          
        }).delay(100).fadeIn(400);

        $('#num').fadeOut(400, function() {
          
          $(this).empty().text("Advice #" + dataContent.id);
          
        }).delay(100).fadeIn(400);

      },

      fail: () => {
        $('.advText').empty().text("Error retrieving advice");
        
      }

    });

  });

});
