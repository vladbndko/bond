// === START SCRIPTS (BEGIN)
function BONDInit($) {
  'use strict';

  // === COMMON VARIABLES
  var $window = $(window);
  var $body = $('body');
  var $container = $('#js-container');
  var $overlay = $('#js-overlay');
  var $sidenav = $('#js-sidenav');

  // === USEFUL FUNCTIONS
  function debounce(func, wait, immediate) {
    var timeout;
    return function () {
      var context = this,
        args = arguments;
      clearTimeout(timeout);
      timeout = setTimeout(function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      }, wait);
      if (immediate && !timeout) func.apply(context, args);
    };
  }

  // === PAGE LOADER (BEGIN)
  $(window).on('load', function () {
    var $preloader = $('#js-preloader');
    $preloader.find('> div').fadeOut(400);
    $preloader.delay(300).fadeOut('slow');
    $body.delay(300, function () {
      $container.animate(
        {
          opacity: '1',
        },
        300,
      );
      $body.addClass('loaded');
      BONDTyped();
      BONDAnimation();
    });
  });
  // === PAGE LOADER (END)

  // === OVERLAY (BEGIN)
  function showOverlay() {
    $overlay.addClass('is-active');
  }

  function hideOverlay() {
    $overlay.removeClass('is-active');
  }

  function isOverlayActive() {
    return $overlay.hasClass('is-active');
  }
  // === OVERLAY (END)

  // === SIDENAV (BEGIN)
  var $sidenavHamburger = $('#js-sidenav-hamburger');
  var $sidenavX = $('#js-sidenav-close');
  var $sidenavMenu = $('#js-sidenav-menu');

  function showSidenav() {
    $sidenav.addClass('is-active');
    showOverlay();
    $body.css('overflow-y', 'hidden');
  }

  function hideSidenav() {
    $sidenav.removeClass('is-active');
    hideOverlay();
    $body.css('overflow-y', 'visible');
  }

  function isSidenavActive() {
    return $sidenav.hasClass('is-active');
  }

  $sidenavHamburger.on('click', showSidenav);

  $sidenavX.on('click', hideSidenav);

  $window.on('keydown', function (event) {
    if (event.key === 'Escape' && isSidenavActive()) {
      hideSidenav();
    }
  });

  $overlay.on('click', function () {
    if (isOverlayActive()) {
      hideSidenav();
    }
  });

  $sidenavMenu.on('click', 'a', function () {
    if (/^#/.test($(this).attr('href'))) {
      hideSidenav();
    }
  });
  // === SIDENAV (END)

  // === COUNTERS (BEGIN)
  var $counters = $('.js-counter');

  if ($counters.length > 0) {
    $counters.each(function () {
      var $this = $(this);
      $(this).waypoint({
        handler: function () {
          if ($this.hasClass('finished')) {
            return;
          }
          if ($this.data('from') === undefined) {
            throw new Error('data-from is required attribute');
          }
          if ($this.data('to') === undefined) {
            throw new Error('data-to is required attribute');
          }
          anime({
            targets: $this.get(0),
            innerText: [$this.data('from'), $this.data('to')],
            easing: 'easeInOutQuad',
            round: true,
            duration: $this.data('duration') || 2000,
            complete: function () {
              $this.addClass('finished');
            },
          });
        },
        offset: '95%',
      });
    });
  }
  // === COUNTERS (END)

  // === TYPED (BEGIN)
  function BONDTyped() {
    var $typed = $('.js-typed');
    $typed.each(function () {
      var dataStrings = $(this).data('strings');
      if (dataStrings === undefined) {
        throw new Error('data-strings is required attribute');
      }
      var strings = dataStrings.split(',');
      if (Array.isArray(strings) && strings.length > 0) {
        new Typed(this, {
          strings: strings,
          typeSpeed: 20,
          backSpeed: 30,
          backDelay: 2000,
          smartBackspace: true,
          loop: true,
        });
      }
    });
  }
  // === TYPED (END)

  // === PROGRESS (BEGIN)
  var $progresses = $('.js-progress');
  if ($progresses.length > 0) {
    $progresses.each(function () {
      var $this = $(this);
      $(this).waypoint({
        handler: function () {
          if ($this.hasClass('finished')) {
            return;
          }
          if ($this.data('value') === undefined) {
            throw new Error('data-value is required attribute');
          }
          anime({
            targets: $this.find('.progress-line').get(0),
            width: $this.data('value') + '%',
            easing: 'easeInOutQuad',
            duration: $this.data('duration') || 2000,
            complete: function () {
              $this.addClass('finished');
            },
          });
        },
        offset: '95%',
      });
    });
  }
  // === PROGRESS (END)

  // === MODALS (BEGIN)
  var $modals = $('.modal');
  if ($modals.length > 0) {
    MicroModal.init({
      openTrigger: 'data-modal-open',
      closeTrigger: 'data-modal-close',
      disableScroll: true,
      disableFocus: true,
      awaitOpenAnimation: true,
      awaitCloseAnimation: true,
    });
  }
  // === MODALS (END)

  // === PORTFOLIO (BEGIN)
  var $portfolio = $('#js-portfolio');
  var $portfolioControls = $('#js-portfolio-controls');
  var $portfolioTriggers = $portfolioControls.find('button[data-group]');

  if ($portfolio) {
    var $currentTrigger = $portfolioTriggers.first();
    var speed = 400;
    $currentTrigger.addClass('is-active');

    var portfolioShuffle = new window.Shuffle($portfolio.get(0), {
      itemSelector: '.js-portfolio-item',
      speed: speed,
    });

    $portfolioTriggers.each(function () {
      $(this).on('click', function () {
        $currentTrigger.removeClass('is-active');
        $currentTrigger = $(this);
        portfolioShuffle.filter(String($(this).data('group')));
        $currentTrigger.addClass('is-active');
        setTimeout(AOS.refresh, speed);
      });
    });
  }
  // === PORTFOLIO (END)

  // === TESTIMONIAL (BEGIN)
  var $testimonial = $('#js-testimonial');
  if ($testimonial.length) {
    new Splide($testimonial.get(0), {
      type: 'loop',
      perPage: 2,
      perMove: 2,
      arrows: false,
      speed: 800,
      autoplay: true,
      interval: 6000,
      classes: {
        pagination: 'splide__pagination carousel-dots',
        page: 'splide__pagination__page carousel-dot',
      },
      breakpoints: {
        768: {
          perPage: 1,
          perMove: 1,
        },
      },
    }).mount();
  }
  // === TESTIMONIAL (END)

  // === ANIMATION (BEGIN)
  function BONDAnimation() {
    AOS.init({
      disable: 'mobile',
      duration: 800,
    });
    $window.on('resize', debounce(AOS.refresh, 500));
  }
  // === ANIMATION (END)

  // === NOTIFICATION (BEGIN)
  var notyf = new Notyf({
    duration: 6000,
    ripple: false,
    position: {
      x: 'center',
      y: 'bottom',
    },
    types: [
      { type: 'success', background: '#5ac18f', icon: false },
      { type: 'error', background: '#ff5f5f', icon: false },
    ],
  });

  var toast = {
    success: function (message) {
      notyf.success(message);
    },
    error: function (message) {
      notyf.error(message);
    },
  };
  // === NOTIFICATION (END)

  // === CONTACT FORM (BEGIN)
  var $form = $('#js-contact-form');
  if ($form.length) {
    var $button = $form.find('button');
    $form.on('submit', function (event) {
      event.preventDefault();
      var $this = $(this);

      grecaptcha.ready(function () {
        var siteKey = $('#recaptcha-v3').attr('src').split('render=')[1];
        grecaptcha.execute(siteKey, { action: 'contact' }).then(function (token) {
          var data = $this.serialize() + '&token=' + token;
          $.ajax({
            url: 'mail.php',
            data: data,
            beforeSend: function (xhr) {
              $button.addClass('is-loading').attr('disabled', 'disabled');
            },
            success: function (result, status, xhr) {
              toast.success('Your message was sent successfully');
              $this.trigger('reset');
            },
            error: function (xhr, status, error) {
              var response = JSON.parse(xhr.responseText);
              toast.error(response.message || 'Your message was unable to send');
              console.error(xhr);
            },
            complete: function (xhr, status) {
              $button.removeClass('is-loading').removeAttr('disabled');
            },
          });
        });
      });
    });
  }
  // === CONTACT FORM (END)
}

jQuery(function ($) {
  BONDInit($);
});
// === START SCRIPTS (END)
