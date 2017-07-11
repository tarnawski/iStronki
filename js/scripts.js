const API_URL = 'http://www.contact-api.ttarnawski.usermd.net';

$(document).ready(function () {
    var menu = $('.navbar-default');
    var contactButton  = $('#contactButton');
    var emailTelForm = $('#contactEmailTel');
    var contentForm = $('#contactContent');
    var submitButton = $('#contactSubmit');

    $( window ).scroll(function() {
        if(this.pageYOffset <= 50){
            menu.addClass("navbar-transparent");
            menu.removeClass("navbar-purple");
        } else {
            menu.addClass("navbar-purple");
            menu.removeClass("navbar-transparent");
        }
    });

    contactButton.click(function () {
        emailTelForm.focus();
    });

    submitButton.click(function () {
        var data = {
          from: emailTelForm.val(),
          body: contentForm.val()
        };

        $.post( API_URL, JSON.stringify(data))
            .done(function() {
                $('#infoFormPanel').html('<h3>Dziękujemy za wiadomość - postaramy się jak najszybciej odpowiedzieć.</h3>')
            })
            .fail(function() {
                $('#infoFormPanel').html('<h3>Wystąpił nieznany błąd. Skontaktuj się z Nami za pomocą adresu email - info@stronki.pl</h3>')
            });
    })
});

