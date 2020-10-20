$(document).ready(function () {
    $('.accordion__title').click(function (event) {

        let accordionid = $(this).closest('.accordion').attr("id");

        if ($('#' + accordionid).hasClass('accordion-one')) {
            $('#' + accordionid + ' ' + '.accordion__title').not($(this)).removeClass('active');
            $('#' + accordionid + ' ' + '.accordion__text').not($(this).next()).slideUp(300);
        }

        $(this).toggleClass('active').next().slideToggle(300);

        if (!$(this).hasClass('active')) {
            $(this).closest('.faq__accordion-item').css({ 'background-color': '#fff' })
        } else {
            $('.faq__accordion-item').css({ 'background-color': '#fff' })
            $(this).closest('.faq__accordion-item').css({ 'background-color': '#142745' })
        }
    });

    $('.accordion .accordion__title:first').click();
});