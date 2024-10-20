$(document).ready(function() {
    $('.dropdown-submenu > a').on("click", function(e) {
        var submenu = $(this).next('ul');
        $('.dropdown-submenu .dropdown-menu').not(submenu).hide();
        submenu.toggle();
        e.stopPropagation();
        e.preventDefault();
    });

    // Disable right-click on images
    $('img').on('contextmenu', function(e) {
        return false;
    });

    // Disable drag-and-drop for images
    $('img').on('dragstart', function(e) {
        e.preventDefault();
    });
});
