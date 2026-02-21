// jQuery-based interactions and animations
declare global {
  interface Window {
    $: any;
    jQuery: any;
  }
}

export const initJQueryAnimations = () => {
  if (typeof window !== 'undefined' && window.$) {
    // Smooth scroll for anchor links
    window.$('a[href^="#"]').on('click', function(this: HTMLElement, e: any) {
      e.preventDefault();
      const target = window.$(this.getAttribute('href'));
      if (target.length) {
        window.$('html, body').animate({
          scrollTop: target.offset().top - 80
        }, 800);
      }
    });

    // Fade in elements on scroll
    window.$(window).on('scroll', function() {
      window.$('.fade-in-up').each(function(this: HTMLElement) {
        const elementTop = window.$(this).offset().top;
        const windowBottom = window.$(window).scrollTop() + window.$(window).height();
        
        if (elementTop < windowBottom - 100) {
          window.$(this).addClass('visible');
        }
      });
    });

    // Navbar background change on scroll
    window.$(window).on('scroll', function() {
      if (window.$(window).scrollTop() > 50) {
        window.$('.navbar-dhaba').addClass('scrolled');
      } else {
        window.$('.navbar-dhaba').removeClass('scrolled');
      }
    });
  }
};

export const animateCounter = (element: string, target: number, duration: number = 2000) => {
  if (typeof window !== 'undefined' && window.$) {
    window.$({ Counter: 0 }).animate({ Counter: target }, {
      duration: duration,
      easing: 'swing',
      step: function(now: number) {
        window.$(element).text(Math.ceil(now));
      }
    });
  }
};

export const toggleFilterAnimation = (selector: string) => {
  if (typeof window !== 'undefined' && window.$) {
    window.$(selector).fadeOut(300, function(this: HTMLElement) {
      window.$(this).fadeIn(300);
    });
  }
};
