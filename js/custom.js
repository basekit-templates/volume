// Makes the whole ecom product tiles clickable
$(document).ready(function() {

    $('.product-item').each(function() {
        var href = $(this).find("a").attr("href");
        if(href) {
            $(this).addClass("clickable");
        }
    });


    metaKeyPressed = false;

    $(window).keydown(function(e) {
        if (e.ctrlKey || e.metaKey) {
            metaKeyPressed = true;
        }
    });


    $('.product-item').click(function() {

        var href = $(this).find("a").attr("href");
        if(href) {

            if (metaKeyPressed == true) {
                 window.open(href, '_blank');
            } else {
                window.location = href;
            }
        }

    });

});


// Makes the whole twitter item clickable
$(document).ready(function() {

    $('.tweet-item').each(function() {
        var href = $(this).find("a").attr("href");
        if(href) {
            $(this).addClass("clickable");
        }
    });


    metaKeyPressed = false;

    $(window).keydown(function(e) {
        if (e.ctrlKey || e.metaKey) {
            metaKeyPressed = true;
        }
    });


    $('.tweet-item').click(function() {

        var href = $(this).find("a").attr("href");
        if(href) {

            if (metaKeyPressed == true) {
                 window.open(href, '_blank');
            } else {
                window.location = href;
            }
        }

    });

});


// Toggles class open to display/hide the whole navigation
$( ".navigation-toggle" ).click(function() {
    $( ".bk-extendednavigation" ).toggleClass( "open" );
    $( "body, html" ).toggleClass( "noscroll" );
});

// Toggles class open to display/hide folders

$( ".navigation-item.folder .item-name--parent" ).each(function() {
    $( this ).click(function() {
            $( this ).parent( ".navigation-item.folder" ).toggleClass( "open-folder" );
    });
});
