
  $("#submitFilm").submit(function(event) {
        event.preventDefault();

        var shortFilmTitle = $('#ShortFilmTitle').val();
        var caption = $('#Caption').val();
        var director = $('#Director').val();
        var producer = $('#Producer').val();
        var theme =  $('#Theme').val();
        var jhonor = $('#Jhonor option:selected').text();
        var mobile = $('#Mobile').val();

        var $form = $( this );
        url = $form.attr( 'action' );

        var data = {
            shortFilmTitle : shortFilmTitle,
            Caption :  caption,
            Director : director,
            Producer :  producer,
            Theme : theme,
            Jhonor : jhonor,
            Mobile : mobile
        }

        $.ajax({
            url: url,
            method: 'post',
            dataType: "json",
            data: JSON.stringify(data),
            contentType: "application/json; charset=utf-8",
            crossDomain: true
        })
        .done(function(data) {
            if(data.success == true) {
                $("#submitFilm").trigger("reset");
                alert("Posted Succesfully");
            } else {
                alert('Unable to process your request');
            }
        })
        .fail(function(data) {
            alert('Request is Failed');
        });
        //     var posting = $.post( url, {  ShortFilmTitle: $('#ShortFilmTitle').val(),
        //                                   Caption: $('#Caption').val(),
        //                                   Director: $('#Director').val(),
        //                                   Producer: $('#Producer').val(),
        //                                   Theme: $('#Theme').val(),
        //                                   Jhonor: $('#Jhonor option:selected').text(),
        //                                   Mobile: $('#Mobile').val()
        //                                 } );
        //     posting.done(function( data ) {
        //     $("#submitFilm").trigger("reset");
        //     alert(data);
        //  });


  });
