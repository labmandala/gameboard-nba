var main = function() {
    $('.more-btn').on('click', (event) => {
        $(event.currentTarget).siblings('.more-menu').toggle();
    })
};

$(document).ready(main);