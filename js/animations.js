gsap.registerPlugin(ScrollTrigger);
const tlLoader = gsap.timeline();
//Loader
tlLoader
  .set(".loader__item", { yPercent: -100 })
  .set(".loader__title", { opacity: 0 })
  .to(".loader__item", {
    yPercent: 0,
    duration: 0.5,
    stagger: 0.25,
  })
  .to(".loader__item", {
    yPercent: 100,
    duration: 0.5,
    stagger: 0.25,
  })
  .to(".loader__title", {
    opacity: 1,
    duration: 1,
    scale: 1.2,
  })
  .to(".loader__item", {
    yPercent: -100,
  })
  .to(".loader__title", {
    opacity: 0,
    duration: 1,
    scale: 0.8,
  })
  .to(
    ".loader",
    {
      yPercent: -100,
      duration: 1,
    },
    "-=0.2"
  );
// Добавляем проверку на мобильные устройства
const mobileScreen = window.matchMedia("(max-width: 991px)");

if (mobileScreen.matches) {
  // Hero Section Mobile
  gsap.to(".section__hero", {
    scrollTrigger: {
      trigger: ".section__hero",
      start: "top top",
      scrub: 0.5,
    },
    backgroundColor: "#18895a",
    duration: 1,
  });

  gsap.to(".title__row-1", {
    scrollTrigger: {
      trigger: ".section__hero",
      start: "top top",
      scrub: 0.5,
    },
    yPercent: -50,
    duration: 1,
  });

  gsap.to(".hero__image", {
    scrollTrigger: {
      trigger: ".section__hero",
      start: "top top",
      scrub: 0.5,
    },
    scale: 1.1,
    y: -20,
    duration: 1,
  });

  // Materials Section Mobile
  gsap.from(".materials__title", {
    scrollTrigger: {
      trigger: ".section__materials",
      start: "top 80%",
    },
    y: 50,
    autoAlpha: 0,
    duration: 0.8,
  });

  gsap.from(".materials__text", {
    scrollTrigger: {
      trigger: ".section__materials",
      start: "top 70%",
    },
    y: 30,
    autoAlpha: 0,
    duration: 0.6,
  });

  gsap.from(".products__img", {
    scrollTrigger: {
      trigger: ".section__materials",
      start: "top 60%",
    },
    x: -30,
    opacity: 0,
    stagger: 0.2,
    duration: 0.5,
  });

  // Choose Section Mobile
  gsap.from(".choose__title", {
    scrollTrigger: {
      trigger: ".section__choose",
      start: "top 80%",
    },
    y: 50,
    autoAlpha: 0,
    duration: 0.8,
  });

  gsap.from(".why__item", {
    scrollTrigger: {
      trigger: ".section__choose",
      start: "top 60%",
    },
    y: 30,
    autoAlpha: 0,
    stagger: 0.2,
    duration: 0.5,
  });

  // Help Section Mobile
  gsap.from(".help__img-1", {
    scrollTrigger: {
      trigger: ".section__help",
      start: "top 80%",
    },
    x: 20,
    opacity: 0,
    duration: 0.6,
  });

  gsap.from(".help__title", {
    scrollTrigger: {
      trigger: ".section__help",
      start: "top 70%",
    },
    y: 30,
    autoAlpha: 0,
    duration: 0.5,
  });

  // Examples Section Mobile
  gsap.from(".examples__item", {
    scrollTrigger: {
      trigger: ".section__examples",
      start: "top 80%",
    },
    x: -30,
    autoAlpha: 0,
    stagger: 0.2,
    duration: 0.5,
  });

  // Blog Section Mobile
  gsap.from(".blog__title", {
    scrollTrigger: {
      trigger: ".section__blog",
      start: "top 80%",
    },
    y: 30,
    autoAlpha: 0,
    duration: 0.6,
  });

  // Subscribe Section Mobile
  gsap.from(".subscribe__image", {
    scrollTrigger: {
      trigger: ".section__subscribe",
      start: "top 80%",
    },
    x: 50,
    opacity: 0,
    duration: 0.6,
  });

  gsap.from(".form__item", {
    scrollTrigger: {
      trigger: ".section__subscribe",
      start: "top 60%",
    },
    y: 30,
    autoAlpha: 0,
    stagger: 0.2,
    duration: 0.5,
  });
}
// Laptop Animation
const laptopScreen = window.matchMedia("(min-width: 992px)");
// Hero Scroll Animation
if (laptopScreen.matches) {
  gsap.to(".section__hero", {
    scrollTrigger: {
      trigger: ".section__hero",
      start: "top top",
      scrub: true,
    },
    css: {
      backgroundColor: "#18895a",
    },
  });
  gsap.to(".title__row-1", {
    scrollTrigger: {
      trigger: ".section__hero",
      start: "-100 0",
      scrub: true,
    },
    yPercent: -100,
  });
  gsap.to(".title__row-2", {
    scrollTrigger: {
      trigger: ".section__hero",
      start: "-100 0",
      scrub: true,
    },
    yPercent: -170,
  });
  gsap.to(".hero__svg", {
    scrollTrigger: {
      trigger: ".section__hero",
      start: "-100 0",
      scrub: true,
    },
    scale: 0.5,
    y: 50,
  });
  gsap.to(".hero__image", {
    scrollTrigger: {
      trigger: ".section__hero",
      start: "-100 0",
      scrub: true,
    },
    scale: 1.2,
    y: -50,
  });
  gsap.to(".hero__buttons", {
    scrollTrigger: {
      trigger: ".section__hero",
      start: "-100 0",
      scrub: true,
    },
    y: 160,
    xPercent: 70,
    scale: 1.2,
  });

  // Section Materials
  gsap.from(".materials__title", {
    scrollTrigger: {
      trigger: ".section__materials",
      start: "-300 0",
    },
    y: 100,
    autoAlpha: 0,
    duration: 1,
  });
  gsap.from(".materials__text", {
    scrollTrigger: {
      trigger: ".section__materials",
      start: "-300 0",
    },
    y: 150,
    autoAlpha: 0,
    duration: 1,
  });
  gsap.from(".materials__btn", {
    scrollTrigger: {
      trigger: ".section__materials",
      start: "-200 0",
    },
    y: 50,
    autoAlpha: 0,
    duration: 1,
  });
  gsap.from(".products__img", {
    scrollTrigger: {
      trigger: ".section__materials",
      start: "-200 0",
    },
    x: -100,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
  });

  gsap.from(".products__info", {
    scrollTrigger: {
      trigger: ".section__materials",
      start: "-200 0",
    },
    y: -50,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
  });

  // Choose section
  const tlChoose = gsap.timeline();
  tlChoose
    .from(".section__choose", {
      scrollTrigger: {
        trigger: ".section__choose",
        start: "0 0",
        scrub: true,
        pin: true,
      },
    })
    .from(".choose__title", {
      scrollTrigger: {
        trigger: ".section__choose",
        start: "-150 0",
        scrub: true,
      },
      y: 30,
    })
    .from(".choose__text", {
      scrollTrigger: {
        trigger: ".section__choose",
        start: "-120 0",
        scrub: true,
      },
      y: 60,
    })
    .from(".why__svg", {
      scrollTrigger: {
        trigger: ".section__choose",
        start: "0 0",
        scrub: true,
      },
      scale: 0,
    })
    .from(".why__image", {
      scrollTrigger: {
        trigger: ".section__choose",
        start: "0 0",
        scrub: true,
      },
      css: {
        width: 0,
        height: "100%",
      },
    })
    .from(".why__item", {
      scrollTrigger: {
        trigger: ".section__choose",
        start: "-200 0",
        scrub: true,
      },
      stagger: 0.25,
      y: 50,
      autoAlpha: 0,
    })
    .from(".why__icon circle", {
      scrollTrigger: {
        trigger: ".section__choose",
        start: "-200 0",
        scrub: true,
      },
      stagger: 0.25,
      css: {
        fill: "#f9bf29",
        fillOpacity: 1,
      },
    })
    .from(".why__icon svg", {
      scrollTrigger: {
        trigger: ".section__choose",
        start: "-200 0",
        scrub: true,
      },
      scale: 2,
    })
    //Help
    .from(".help__img-1", {
      scrollTrigger: {
        trigger: ".section__help",
        start: "0 center",
        scrub: true,
        end: "+=300",
      },
      xPercent: 30,
    })
    .from(".help__img-2", {
      scrollTrigger: {
        trigger: ".section__help",
        start: "0 center",
        scrub: true,
        end: "+=300",
      },
      scale: 0.5,
      yPercent: -80,
      xPercent: -100,
    })
    .from(".help__img-3", {
      scrollTrigger: {
        trigger: ".section__help",
        start: "0 center",
        scrub: true,
        end: "+=400",
      },
      xPercent: -130,
      scale: 0.8,
    })
    .from(".help__title", {
      scrollTrigger: {
        trigger: ".section__help",
        start: "50 center",
        scrub: true,
        end: "+=150",
      },
      y: 50,
      autoAlpha: 0,
    })
    .from(".help__text", {
      scrollTrigger: {
        trigger: ".section__help",
        start: "50 center",
        scrub: true,
        end: "+=150",
      },
      y: 80,
      autoAlpha: 0,
    })
    .from(".help__list li", {
      scrollTrigger: {
        trigger: ".section__help",
        start: "50 center",
        scrub: true,
        end: "+=200",
      },
      stagger: 0.1,
      y: 80,
      x: 80,
      opacity: 0,
    })
    .from(".help__btn", {
      scrollTrigger: {
        trigger: ".section__help",
        start: "100 center",
        scrub: true,
        end: "+=150",
      },
      y: 80,
      autoAlpha: 0,
    })

    // Examples
    .from(".examples__item", {
      scrollTrigger: {
        trigger: ".section__examples",
        start: "0 center",
        scrub: true,
        end: "+=250",
      },
      x: -100,
      autoAlpha: 0,
      stagger: 0.2,
    })

    //   Testimonials
    .from(".section__testimonials", {
      scrollTrigger: {
        trigger: ".section__testimonials",
        start: "0 center",
        scrub: true,
        end: "+=150",
      },
      css: {
        backgroundColor: "#578573",
      },
    })
    .from(".section__testimonials .testimonials__text", {
      scrollTrigger: {
        trigger: ".section__testimonials",
        start: "0 center",
        scrub: true,
        end: "+=250",
      },
      css: {
        color: "white",
      },
    })
    .from(".testimonials__title", {
      scrollTrigger: {
        trigger: ".section__testimonials",
        start: "0 center",
        scrub: true,
        end: "+=150",
      },
      css: {
        color: "white",
      },
    })
    //   blog
    .from(".section__blog-title", {
      scrollTrigger: {
        trigger: ".section__blog",
        start: "0 center",
        scrub: true,
        end: "+=150",
      },
      css: {
        xPercent: -100,
        backgroundColor: "#3b5d58",
        color: "#3b5d58",
      },
    })
    .from(".blog__title", {
      scrollTrigger: {
        trigger: ".section__blog",
        start: "0 center",
        scrub: true,
        end: "+=250",
      },
      autoAlpha: 0,
      y: -50,
    })
    .from(".blog__info", {
      scrollTrigger: {
        trigger: ".section__blog",
        start: "0 center",
        scrub: true,
        end: "+=250",
      },
      autoAlpha: 0,
      x: -350,
      stagger: 0.5,
    })
    .from(".blog__link", {
      scrollTrigger: {
        trigger: ".section__blog",
        start: "0 350",
        scrub: true,
        end: "+=250",
      },
      x: 150,
    })
    //  Section Subscibe
    .from(".subscribe__image", {
      scrollTrigger: {
        trigger: ".section__subscribe",
        start: "30% center",
        scrub: 1,
      },
      x: 120,
      y: -30,
    })
    .from(".subscribe__svg", {
      scrollTrigger: {
        trigger: ".section__subscribe",
        start: "30% center",
        scrub: 1,
        end: "+=100",
      },
      scale: 0,
    })
    .from(".subscribe__span", {
      scrollTrigger: {
        trigger: ".section__subscribe",
        start: "30% center",
        scrub: 1,
        end: "+=140",
      },
      scale: 0,
    })
    .from(".form__item", {
      scrollTrigger: {
        trigger: ".section__subscribe",
        start: "40% center",
        scrub: 1,
        end: "+=100",
      },
      y: 120,
      stagger: 0.3,
    });
}
