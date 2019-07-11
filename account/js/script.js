'use strict';

(function () {

  let hangSelect2 = function () {
    $(document).ready(function() {
      $('.main__footer_select').select2();
    });
    $(document).ready(function() {
      $('.my_proxy__prolong_select').select2();
    });
    $(document).ready(function() {
      $('.my_proxy__search_select').select2();
    });
    $(document).ready(function() {
      $('.my_proxy__download_select').select2();
    });
    $(document).ready(function() {
      $('.my_proxy__filter_select').select2();
    });
    $(document).ready(function() {
      $('.pricing__select').select2();
    });
    $(document).ready(function() {
      $('.settings__select').select2();
    });
    $(document).ready(function() {
      $('.cheker__select').select2();
    });
    $(document).ready(function() {
      $('.converter__select').select2();
    });
  };

  let scrollBarСustomization = function () {
    $('body').overlayScrollbars({
      className: "os-theme-dark"
    });
    $('tbody').overlayScrollbars({
      className: "os-theme-dark"
    });
    $('.help__dialog_field').overlayScrollbars({
      className: "os-theme-dark"
    });
  }

  let getSliderInNav = function () {
    $('.nav__slide').click( function (evt) {
      evt.preventDefault();
      $(evt.target).parents('li').find('.nav__drop_out').slideToggle('slow');
      $(evt.target).parents('li').find('.nav__icon_pointer').toggleClass('nav__icon_rotate');
    });
  };

  let getComentInMyProxy = function () {

    $(window).on("load", function() {
      $('.main__coment_text').each( function (index, el) {
        var label = $(el).parents('td').find('.main__coment_label');
        $(el)[0].scrollWidth > $(el).innerWidth() ? label.removeClass('my_proxy__coment_off') : label.addClass('my_proxy__coment_off');
      });
    });

    $('.main__coment_text').focusout( function (evt) {
      let text = $(evt.target).val();
      let label = $(evt.target).parents('td').find('.main__coment_label');
      label.text(text);
      $(evt.target)[0].scrollWidth > $(evt.target).innerWidth() ? label.removeClass('my_proxy__coment_off') : label.addClass('my_proxy__coment_off');
    });

    $('.main__coment_text').mouseover( function (evt) {
      let label = $(evt.target).parents('td').find('.main__coment_label');
      let position = $(evt.target).offset();
      let height = label.height();
      label.attr('style', 'top: ' + (position.top - height - 25) + 'px;' + 'left: ' + (position.left - 40) + 'px;' );
    });
  };

  let getShowInMyProxy = function () {

    var check = function (itemCheck, itemShow, itemLink) {
        $(itemCheck).prop('checked') ? $(itemShow).removeClass('display_none') && $(itemLink).addClass('my_proxy__link_active') : $(itemShow).addClass('display_none') && $(itemLink).removeClass('my_proxy__link_active');
    };

    var checkEdit = function (itemCheck, itemShow, itemLink) {
        $(itemCheck).prop('checked') ? $(itemShow).removeClass('display_none') && $(itemLink).addClass('my_proxy__edit_link_active') : $(itemShow).addClass('display_none') && $(itemLink).removeClass('my_proxy__edit_link_active');
    };

    $(".my_proxy__navigation .main__input").change( function() {
        check('#show__prolong', '.my_proxy__prolong', '.show__prolong');
        check('#show__search', '.my_proxy__search', '.show__search');
        check('#show__edit', '.my_proxy__edit', '.show__edit');
        check('#show__auth', '.my_proxy__auth', '.show__auth');
        check('#show__download', '.my_proxy__download', '.show__download');
        check('#show__filter', '.my_proxy__filter', '.show__filter');
    });

    $(".my_proxy__navigation .my_proxy__link").click( function(evt) {
      if ($(this).siblings('.main__input').prop('checked')) {
        evt.preventDefault();
        $('#show__none').trigger('click')
        check('#show__prolong', '.my_proxy__prolong', '.show__prolong');
        check('#show__search', '.my_proxy__search', '.show__search');
        check('#show__edit', '.my_proxy__edit', '.show__edit');
        check('#show__auth', '.my_proxy__auth', '.show__auth');
        check('#show__download', '.my_proxy__download', '.show__download');
        check('#show__filter', '.my_proxy__filter', '.show__filter');
      };
    });

    $(".my_proxy__edit_nav .main__input").change( function() {
      checkEdit('#show__edit_login', '.my_proxy__edit_login', '.show__edit_login');
      checkEdit('#show__edit_comment', '.my_proxy__edit_comment', '.show__edit_comment');
      checkEdit('#show__edit_type', '.my_proxy__edit_type', '.show__edit_type');
    });
  };

  let showPopUpMyProxySearch = function (popUpOpen, popUpBlock) {
    $('.pop_up__icon_close, .pop_up__overlay').click(function (){
      $(popUpBlock + ', .pop_up__overlay').css({'opacity': 0, 'display': 'none'});
    });
    $(popUpOpen).click(function (evt){
      evt.preventDefault();
      $(popUpBlock + ', .pop_up__overlay').css({'opacity': 1, 'display': 'flex'});
      $(document).keydown(function(evt) {
          if (evt.keyCode === 27) {
              evt.stopPropagation();
              $(popUpBlock + ', .pop_up__overlay').css({'opacity': 0, 'display': 'none'});
          }
      });
    });
  };

  let copyText = function (buttonCopy, copyTextBlock) {
    $(buttonCopy).click( function(evt) {
      let copyText = document.getElementById(copyTextBlock);
      copyText.select();
      document.execCommand("copy");
    });
  };

  hangSelect2();
  scrollBarСustomization();
  getSliderInNav();
  getComentInMyProxy();
  getShowInMyProxy();
  showPopUpMyProxySearch('.my_proxy__open_pop_up', '.my_proxy__search_pop_up');
  showPopUpMyProxySearch('.history__open_pop_up', '.history__pop_up');
  copyText('.partnership__promocode_copy', 'partnership__promocode');
  copyText('.partnership__ref_link_copy', 'partnership__ref_link');

})();
