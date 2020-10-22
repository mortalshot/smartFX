document.addEventListener('DOMContentLoaded', function () {
    const animItems = document.querySelectorAll('._anim-items');

    if (animItems.length > 0) {
        window.addEventListener('scroll', animOnScroll);
        function animOnScroll(params) {
            for (let index = 0; index < animItems.length; index++) {
                const animItem = animItems[index];
                const animItemHeight = animItem.offsetHeight;
                const animItemOffset = offset(animItem).top;
                const animStart = 55; // Коэффициент старта анимации

                let animItemPoint = window.innerHeight - animItemHeight / animStart;

                if (animItemHeight > window.innerHeight) {
                    animItemPoint = window.innerHeight - window.innerHeight / animStart;
                }

                if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                    animItem.classList.add('_active');
                } else {
                    if (!animItem.classList.contains('_anim-no-hide')) {
                        animItem.classList.remove('_active');
                    }
                }
            }
        }

        function offset(el) {
            const rect = el.getBoundingClientRect(),
                scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
                scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
        }

        setTimeout(() => {
            animOnScroll();
        }, 300);
    }


    const mediaQuerySmMin = window.matchMedia('(min-width: 576px)');
    mediaQuerySmMin.addListener(handleTabletChange);
    function handleTabletChange(e) {
        if (e.matches) {
            let st = ScrollTrigger.create({
                trigger: ".skrolltriger__content",
                pin: ".skrolltriger__content",
                start: "top center",
                end: "+=670",
            });

            const cards = gsap.utils.toArray('.skrolltriger__card');
            cards.forEach(card => {
                gsap.to(card, {
                    opacity: 1,
                    scrollTrigger: {
                        trigger: card,
                        scrub: true,
                        start: "top 90%",
                        end: "bottom 55%"
                    }
                })
            });
        }
    }

    if (mediaQuerySmMin.matches) {
        let st = ScrollTrigger.create({
            trigger: ".skrolltriger__content",
            pin: ".skrolltriger__content",
            start: "top center",
            end: "+=670",
        });

        const cards = gsap.utils.toArray('.skrolltriger__card');
        cards.forEach(card => {
            gsap.to(card, {
                opacity: 1,
                scrollTrigger: {
                    trigger: card,
                    scrub: true,
                    start: "top 90%",
                    end: "bottom 55%"
                }
            })
        });
    }
});