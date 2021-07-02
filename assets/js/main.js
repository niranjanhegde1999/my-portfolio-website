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


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active_link')
        } else {
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active_link')
        }
    })
}
window.addEventListener('scroll', scrollActive)


/*==================== SHOW SCROLL TOP ====================*/
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    if (this.scrollY >= 560) scrollUp.classList.add('show-scroll-up'); else scrollUp.classList.remove('show-scroll-up')
}
window.addEventListener('scroll', scrollUp)


/*==================== DARK LIGHT THEME ====================*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
    // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})


/*==================== Form Control ====================*/

const contactFormName = document.getElementById('name'),
    contactFormPhone = document.getElementById('phone')

let previousValue = contactFormName.value

contactFormName.addEventListener('input', (e) => {
    console.log(e)
    let key_ = e.data;

    if (e.inputType === 'insertText') {
        contactFormName.value = ''
        if ((key_ >= 'a' && key_ <= 'z') || (key_ >= 'A' && key_ <= 'Z') || key_ == ' ') {
            previousValue += key_
        }
        contactFormName.value = previousValue
    } else if (e.inputType === 'deleteContentBackward' || e.inputType === 'deleteContentForward' || e.inputType === 'deleteByCut') {
        previousValue = contactFormName.value
    }
})

contactFormPhone.addEventListener('keypress', (e) => {
    e.preventDefault()

    let key_ = e.key;

    if ((key_ >= '0' && key_ <= '9'))
        contactFormPhone.value += key_
})