$(document).ready(function() {
    $('.dropdown-submenu > a').on("click", function(e) {
        var submenu = $(this).next('ul');
        $('.dropdown-submenu .dropdown-menu').not(submenu).hide();
        submenu.toggle();
        e.stopPropagation();
        e.preventDefault();
    });
});

