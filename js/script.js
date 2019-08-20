'use strict';
(function () {

  var hangSelect2 = function () {
    $(document).ready(function() {
      $('select').select2()
    });
  };

  var scrollBarСustomization = function () {
    if($(window).width() > 1190) {
      $('body').niceScroll({
        cursorborder: "none"
      });
    };
    $('select').click( function () {
      $('.select2-results__options').niceScroll({
        cursorborder: "none"
      });
    });
  };

  var showPopUpAuthorization = function () {
    $('.pop_up__icon_close, .pop_up__overlay').click(function (){
      $('.pop_up__authorization, .pop_up__overlay').css({'opacity': 0, 'display': 'none'});
    });
    $('a.header__login_link, a.pop_up__link_auto').click(function (event){
      event.preventDefault();
      $('.pop_up__registration').css({'display': 'none'});
      $('.pop_up__authorization, .pop_up__overlay').css({'opacity': 1, 'display': 'flex'});
      $(document).keydown(function(event) {
          if (event.keyCode === 27) {
              event.stopPropagation();
              $('.pop_up__authorization, .pop_up__overlay').css({'opacity': 0, 'display': 'none'});
          }
      });
    });
  };

  var showPopUpRegistration = function () {
    $('.pop_up__icon_close, .pop_up__overlay').click(function (){
      $('.pop_up__registration, .pop_up__overlay').css({'opacity': 0, 'display': 'none'});
    });
    $('a.pop_up__link_reg, a.advantage__link_reg').click(function (event){
      event.preventDefault();
      $('.pop_up__authorization').css({'display': 'none'});
      $('.pop_up__registration, .pop_up__overlay').css({'opacity': 1, 'display': 'flex'});
      $(document).keydown(function(event) {
          if (event.keyCode === 27) {
              event.stopPropagation();
              $('.pop_up__registration, .pop_up__overlay').css({'opacity': 0, 'display': 'none'});
          }
      });
    });
  };

  var changeBlockApplicable = function () {
    $('.parameters__select[name$="type"]').change(function (){
      let optionSelected = $('.parameters__select[name$="type"] option:selected').val();
        if( optionSelected === 'IPv6') {
          $('.objective__applicable_IPv4').css({'display': 'none'});
          $('.objective__applicable_IPv6').css({'display': 'block'});
        }
        if( optionSelected === 'IPv4' || optionSelected === 'Shared IPv4') {
          $('.objective__applicable_IPv6').css({'display': 'none'});
          $('.objective__applicable_IPv4').css({'display': 'block'});
        }
    });
  };

  var showHeaderNav = function () {
    var clickCloseHandler = function () {
      $('.header__nav_list').slideToggle('fast');
      $('.header__nav_arrow').toggleClass('header__nav_arrow_open');
      $(document).unbind('click', clickCloseHandler);
    };
    var checker = false;
    $('.header__nav_title').click(function(evt) {
      evt.preventDefault();
       evt.stopPropagation();
      $('.header__nav_list').slideToggle('fast');
      $('.header__nav_arrow').toggleClass('header__nav_arrow_open');
      $(document).click(clickCloseHandler);
      if (checker) {
        $(document).unbind('click', clickCloseHandler);
      } else {
        checker = true;
      }
    });
  };

  var getSliderInNav = function () {
    $('.nav__slide').click( function (evt) {
      evt.preventDefault();
      $(evt.target).parents('li').find('.nav__drop_out').slideToggle('slow');
      $(evt.target).parents('li').find('.nav__icon_pointer').toggleClass('nav__icon_rotate');
    });
  };

  var getLink = function () {
    $('.landing__button_promo').click( function (evt) {
      evt.preventDefault();
      $('.landing__button_promo').addClass('display_none');
      $('.landing__label_promo').removeClass('display_none');
      $('.landing__button_promo').unbind('click');
    });
  };

  var showHeaderNavPopUp = function () {
    if($(window).width() < 1190) {
      $('.header__nav_close, .pop_up__overlay').click(function (){
        $('.header__nav, .pop_up__overlay').css({'opacity': 0, 'display': 'none'});
      });
      $('.header__nav_open').click(function (event){
        event.preventDefault();
        $('.header__nav, .pop_up__overlay').css({'opacity': 1, 'display': 'flex'});
        $(document).keydown(function(event) {
            if (event.keyCode === 27) {
                event.stopPropagation();
                $('.header__nav, .pop_up__overlay').css({'opacity': 0, 'display': 'none'});
            }
        });
      });
    };
  };

  hangSelect2();
  scrollBarСustomization();
  showPopUpAuthorization();
  showPopUpRegistration();
  changeBlockApplicable();
  showHeaderNav();
  getSliderInNav();
  getLink();
  showHeaderNavPopUp();

}());
