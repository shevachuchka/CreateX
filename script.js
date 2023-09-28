const animItems = document.querySelectorAll('._anim-Items');

if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll() {
        for (let i = 0; i < animItems.length; i++) {
            const animItem = animItems[i];
            const animItemHeigth = animItem.offsetHeight;
            let animItemOffset = offset(animItem).top;
            let animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeigth / animStart;

            if (animItemHeigth > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            };

            if ((scrollY > animItemOffset - animItemPoint) && scrollY < (animItemOffset + animItemHeigth)) {
                animItem.classList.add('_active');
            } else {
                animItem.classList.remove('_active');
            };
        };

        function offset(el) {
            const rect = el.getBoundingClientRect(),
                scrollLeft = window.scrollX || document.documentElement.scrollLeft,
                scrollTop = window.scrollY || document.documentElement.scrollTop;
            return {
                top: rect.top + scrollTop,
                left: rect.left + scrollLeft
            };
        };
    };
};


// TABS

const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', (event) => {
        const target = document.querySelector(tab.dataset.tabTarget);
        tabContents.forEach(tabContent => {
            tabContent.classList.remove('active');
        });
        tabs.forEach(tab => {
            tab.classList.remove('active');
        });
        event.currentTarget.classList.add('active');
        target.classList.add('active');
    });
});



// Accordion

const accdn = document.getElementsByClassName("acc-btn");

for (let i = 0; i < accdn.length; i++) {
    accdn[i].addEventListener("click", function () {

        this.classList.toggle("active");

        let content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
}


// Swiper

const sec7Swiper = new Swiper('.sec7-swiper', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    slidesPerView: 3,
    centeredSlides: true,
    spaceBetween: 30,
    speed: 1200,
    breakpoints: {
        150: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        670: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        1000: {
            slidesPerView: 3,
            spaceBetween: 30
        }
    }
});


// Toggle button

const toggleButton = document.querySelectorAll('[data-btn-target]');

toggleButton.forEach(btn => {
    btn.addEventListener('click', (ev) => {

        toggleButton.forEach(btn => {
            btn.classList.remove('active');
        });

        ev.currentTarget.classList.add('active');
    });
});

const sec9ContentPriceBasic = document.querySelector('[data-btn-priceBasic]');
const sec9ContentPriceOptimal = document.querySelector('[data-btn-priceOptimal]');
const sec9ContentPricePremium = document.querySelector('[data-btn-pricePremium]');


let priceMonthly = () => {
    sec9ContentPriceBasic.textContent = "$24";
    sec9ContentPriceOptimal.textContent = "$64";
    sec9ContentPricePremium.textContent = "$98";
};

let priceYearly = () => {
    sec9ContentPriceBasic.textContent = "$20";
    sec9ContentPriceOptimal.textContent = "$62";
    sec9ContentPricePremium.textContent = "$94";
}


// Section 10 Swiper

const sec10Swiper = new Swiper('.sec10-swiper', {
    navigation: {
        nextEl: '.sec10-swiper-btn-next-custom',
        prevEl: '.sec10-swiper-btn-prev-custom'
    },
    slidesPerView: 1,
    centeredSlides: true,
    speed: 1200,
    spaceBetween: 40,
    loop: true
});



// Scroll top button

function scrollTopButton() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


// Burger menu (Mobile)


const burgerMenuButton = document.getElementById('burger-menu-btn');
const burgerMenu = document.getElementById('burger-menu');


burgerMenuButton.addEventListener('click', () => {
    burgerMenu.classList.toggle('active');
});



const sec9Swiper = new Swiper ('.sec9-swiper-mob', {
    slidesPerView: 3,
    centeredSlides: false,
    speed: 1200,
    loop: false,
    spaceBetween: 30,
    breakpoints: {
        1253: {
            slidesPerView: 3
        },
        835: {
            slidesPerView: 2
        },
        150: {
            slidesPerView: 1
        }
    }
});