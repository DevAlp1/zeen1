document.addEventListener('DOMContentLoaded', function() {

    const menu = document.querySelector('.menu-link');
    const close = document.querySelector('.menu-close');
    const navMenu = document.querySelector('.nav-menu');
    const navLink = document.querySelector('.nav-link-show');
    const cartWrap = document.querySelector('.cart-wrapper');
    const navCart = document.querySelector('.nav-cart');
    const navCartClose = document.querySelector('.cart-close');

    navMenu.addEventListener('click', () => {
        menu.classList.toggle('show');
        close.classList.toggle('show');
        navLink.classList.toggle('show');
    });

    navCart.addEventListener('click', () => {
        cartWrap.classList.add('show');
    });

    navCartClose.addEventListener('click', () => {
        cartWrap.classList.remove('show');
    });

    const loader = document.querySelector('.loader');
    const loaderSpan = document.querySelector('.logo');

    window.addEventListener('DOMContentLoaded', () => {

        setTimeout(() => {

            loaderSpan.forEach((span, idx) => {

                setTimeout(() => {

                    span.classList.add('active');

                }, (idx + 1) * 400);

            });

            setTimeout(()=> {
                loaderSpan.forEach((span, idx) => {
                    setTimeout(()=> {
                        span.classList.remove('active');
                        span.classList.add('fade');
                    }, (idx + 1) * 50);
                });
            }, 2000);

            setTimeout(() => {
                loader.style.top = '-100vh'
            }, 2300);

        });
    });

});