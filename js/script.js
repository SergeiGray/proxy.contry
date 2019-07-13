'use strict';
(function () {

  let hangSelect2 = function () {
    $(document).ready(function() {
      $('select').select2()
    });
  };

  let scrollBarСustomization = function () {
    $('body').overlayScrollbars({
      className: "os-theme-dark"
    });
  }

  let showPopUpAuthorization = function () {
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

  let showPopUpRegistration = function () {
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

  let changeBlockApplicable = function () {
    $('.parameters__select[name$="type"]').change(function (){
      let optionSelected = $('.parameters__select[name$="type"] option:selected').val();
        if( optionSelected === 'IPv6') {
          $('.objective__applicable_IPv4').css({'display': 'none'});
          $('.objective__applicable_IPv6').css({'display': 'block'});
        }
        if( optionSelected === 'IPv4') {
          $('.objective__applicable_IPv6').css({'display': 'none'});
          $('.objective__applicable_IPv4').css({'display': 'block'});
        }
    });
  };

  hangSelect2();
  scrollBarСustomization();
  showPopUpAuthorization();
  showPopUpRegistration();
  changeBlockApplicable();

})();
