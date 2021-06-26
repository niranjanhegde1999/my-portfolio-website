/* ==================== Menu Show ==================== */
const navToggle = document.getElementById('nav-toggle'),
    navMenu = document.getElementById('nav-menu'),
    navClose = document.getElementById('nav-close');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/* ==================== Menu Hide ==================== */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/* ==================== Menu Hide Onclick ==================== */
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
