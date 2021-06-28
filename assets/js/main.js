/* ==================== Menu Show ==================== */
const navToggle = document.getElementById('nav-toggle'),
    navMenu = document.getElementById('nav-menu'),
    header = document.getElementById('header')

if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('show-menu')
    })
}

/* ==================== Hide menu on outside click==================== */
window.addEventListener('click', (e) => {
    if (!e.target.matches('.nav_menu') && !e.target.matches('.nav_list') && !e.target.matches('.nav_toggle_icon')) {
        if (navMenu.classList.contains('show-menu'))
            navMenu.classList.remove('show-menu')
    }
}, true)


window.addEventListener('scroll', () => {
    /* ==================== Header Shadow ==================== */
    /* if (window.pageYOffset > 0) {
        header.classList.add('header_shadow')
    } else {
        if (header.classList.contains('header_shadow'))
            header.classList.remove('header_shadow')
    } */

    /* ==================== Hide menu on scroll==================== */
    if (navMenu.classList.contains('show-menu'))
        navMenu.classList.remove('show-menu')
})

/* ==================== Hide menu on clicking links ==================== */
const navLink = document.querySelectorAll('.nav_link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')

    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction));


/* ==================== Accordion Skills ==================== */
const skillContents = document.getElementsByClassName('skill_content'),
    skillHeaders = document.querySelectorAll('.skill_header')


function toggleSkills() {
    let itemClass = this.parentNode.className

    for (i = 0; i < skillContents.length; i++) {
        skillContents[i].className = 'skill_content skill_close'
    }
    if (itemClass === 'skill_content skill_close') {
        this.parentNode.className = 'skill_content skill_open'
    }
}

skillHeaders.forEach((el) => {
    el.addEventListener('click', toggleSkills)
})


/* ==================== Qualification Tabs ==================== */
const tabs = document.querySelectorAll('[data-target]'),
    tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent => {
            tabContent.classList.remove('qualification_active')
        })
        target.classList.add('qualification_active')

        tabs.forEach(tab => {
            tab.classList.remove('qualification_active')
        })
        tab.classList.add('qualification_active')
    })
})

/* ==================== Project Swiper ==================== */
let swiper = new Swiper(".project_swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-nxt",
        prevEl: ".swiper-button-pre",
    },
});