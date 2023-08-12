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
let i;

for (i = 0; i < accdn.length; i++) {
    accdn[i].addEventListener("click", function () {

        this.classList.toggle("active");

        let content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
};



const swiper = new Swiper('.swiper', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    slidesPerView: 3,
    centeredSlides: true,
    spaceBetween: 30,
});