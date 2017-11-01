$(document).ready(function() {
    var $menuWrapper = $('.menu.wrapper');
    var $menuButton = $menuWrapper.find('.menu.button');
    var $searchAside = $menuWrapper.find('.search.aside');
    var $searchButton = $searchAside.find('.search.button');

    $menuButton.click(function() {
        $menuWrapper.toggleClass('opened');
    });

    $searchButton.click(function() {
        $searchAside.toggleClass('opened');

        if ($searchAside.hasClass('opened')) {
            $searchAside.find('.search.input').focus();
        }
    });
});
