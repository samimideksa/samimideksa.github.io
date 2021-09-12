"use strict";

(function(){
    $(function() {
        let started = false;
        $('#start').on('mouseenter', function () {
            if(!$(".boundary").first().hasClass('youlose')) {
                started = true;
            }
        }).click(function() {
            $('.boundary').toggleClass('youlose');
            started = true;//start the game
        });

        $('.boundary').on('mouseenter', function () {
            if (started) {
                $('.boundary').toggleClass('youlose');
                started = false;
                setTimeout(function() {
                    alert("Sorry, you lose :(");//you lost the game
                }, 0);
            }
        });

        $('#end').on('mouseenter', function () {
            if (started) {
                alert("You win! :)")//you won the game
                started = false;
            }
        })
    });
})();