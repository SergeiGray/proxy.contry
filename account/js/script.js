'use strict';

(function () {

  let hangSelect2 = function () {
    $(document).ready(function() {
      $('.my_proxy__footer_select').select2();
    });
    $(document).ready(function() {
      $('.my_proxy__prolong_select').select2();
    });
  };

  var getSliderInNav = function () {
    $('.nav__slide').click( function (evt) {
      evt.preventDefault();
      $(evt.target).parents('li').find('.nav__drop_out').slideToggle('slow');
      $(evt.target).parents('li').find('.nav__icon_pointer').toggleClass('nav__icon_rotate');
    });
  };

  var getComentInMyProxy = function () {

    $(window).on("load", function() {
      $('.my_proxy__coment_text').each( function (index, el) {
        var label = $(el).parents('td').find('.my_proxy__coment_label');
        $(el)[0].scrollWidth > $(el).innerWidth() ? label.removeClass('my_proxy__coment_off') : label.addClass('my_proxy__coment_off');
      });
    });

    $('.my_proxy__coment_text').focusout( function (evt) {
      let text = $(evt.target).val();
      let label = $(evt.target).parents('td').find('.my_proxy__coment_label');
      label.text(text);
      $(evt.target)[0].scrollWidth > $(evt.target).innerWidth() ? label.removeClass('my_proxy__coment_off') : label.addClass('my_proxy__coment_off');
    });

    $('.my_proxy__coment_text').mouseover( function (evt) {
      let label = $(evt.target).parents('td').find('.my_proxy__coment_label');
      let position = $(evt.target).offset();
      let height = label.height();
      label.attr('style', 'top: ' + (position.top - height - 25) + 'px;' + 'left: ' + (position.left - 40) + 'px;' );
    });

  };

  hangSelect2();
  getSliderInNav();
  getComentInMyProxy();

})();
