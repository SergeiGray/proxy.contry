'use strict';

(function () {

  $('.nav__slide').click( function (evt) {
    evt.preventDefault();
    $(evt.target).parents('li').find('.nav__drop_out').slideToggle('slow');
    $(evt.target).parents('li').find('.nav__icon_pointer').toggleClass('nav__icon_rotate');
  });

})();
