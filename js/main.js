const tabs = document.querySelectorAll('.tab-section .tabs .tab');
const tabSection = document.querySelector('.tab-content-section');
const tabContents = document.querySelectorAll('.tab-content');
const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");
// const banner = document.querySelector('.banner');
// const stickHeader = document.querySelector('.header-fixed');
// window.addEventListener('scroll',()=>{
//     const bannerBottom = banner.getBoundingClientRect().bottom;
//     if (bannerBottom<=0) {
//         stickHeader.style.display = 'block';
//     } else {
//         stickHeader.style.display = 'none';        
//     }
// });

$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    responsive: {
        0: {
            items: 1
        },
        360: {
            items: 2
        },
        768: {
            items: 3
        },
        1024: {
            items: 4
        }
    }
});
window.addEventListener('resize', () => {
    if (window.innerWidth <= 480) {
        tabSection.style.display = 'none';
    } else {
        tabSection.style.display = 'block';
    }
});
window.addEventListener('DOMContentLoaded', () => {
    if (window.innerWidth <= 480) {
        tabSection.style.display = 'none';
    } else {
        tabSection.style.display = 'block';
    }
});
tabs.forEach(tab => {
    tab.addEventListener('click', function () {
        tabs.forEach(tb => {
            tb.classList.remove('active');
        });
        this.classList.add('active');
        if (tabs[0].classList.contains('active')) {
            tabSection.style.background = 'url(\'../images/tab-content-1.png\') no-repeat left center / cover';
            tabContents.forEach(tabContent => {
                tabContent.classList.remove('show');
            });
            tabContents[0].classList.add('show');
        } else {
            tabSection.style.background = 'url(\'../images/tab-content-2.png\') no-repeat left center / cover';
            tabContents.forEach(tabContent => {
                tabContent.classList.remove('show');
            });
            tabContents[1].classList.add('show');
        }
    })
});
accordionItemHeaders.forEach(accordionItemHeader => {
    accordionItemHeader.addEventListener("click", () => {
        const currentlyActiveAccordionItemHeader = document.querySelector(".accordion-item-header.active");
        if (currentlyActiveAccordionItemHeader && currentlyActiveAccordionItemHeader !== accordionItemHeader) {
            currentlyActiveAccordionItemHeader.classList.toggle("active");
            currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
        }
        accordionItemHeader.classList.toggle("active");
        const accordionItemBody = accordionItemHeader.nextElementSibling;
        if (accordionItemHeader.classList.contains("active")) {
            accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
        }
        else {
            accordionItemBody.style.maxHeight = 0;
        }
    });
});