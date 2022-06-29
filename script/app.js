window.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('.nav'),
    navList = document.querySelectorAll('li'),
    totlaNavList = navList.length,
    allSection = document.querySelectorAll('.section'),
    totalSection = allSection.length
  for (let i = 0; i < totlaNavList; i++) {
    const a = navList[i].querySelector('a')
    a.addEventListener('click', function () {
      for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove('active')
      }
      for (let j = 0; j < totlaNavList; j++) {
        if (navList[j].querySelector('a').classList.contains('active')) {
          allSection[j].classList.add('back-section')
        }
        navList[j].querySelector('a').classList.remove('active')
      }
      a.classList.add('active')
      showSection(this)
      if (window.innerWidth < 1200) {
        asideSectionTogglerBtn()
      }
    })
  }

  function showSection(element) {
    for (let i = 0; i < totalSection; i++) {
      allSection[i].classList.remove('active')
    }
    const target = element.getAttribute('href').split('#')[1]
    document.querySelector('#' + target).classList.add('active')
  }

  function updateNav(element) {
    for (let i = 0; i < totlaNavList; i++) {
      navList[i].querySelector('a').classList.remove('active')
      const target = element.getAttribute('href').split('#')[1]
      if (
        target ===
        navList[i].querySelector('a').getAttribute('href').split('#')[i]
      ) {
        navList[i].querySelector('a').classList.add('active')
      }
    }
  }

  document.querySelector('.hire-me').addEventListener('click', function () {
    const sectionIndex = this.getAttribute('data-section-index')
    showSection(this)
    updateNav(this)
  })

  const navTogglerBtn = document.querySelector('.nav-toggler'),
    aside = document.querySelector('.aside-container')
  navTogglerBtn.addEventListener('click', () => {
    asideSectionTogglerBtn()
  })
  function asideSectionTogglerBtn() {
    aside.classList.toggle('open')
    navTogglerBtn.classList.toggle('open')
    for (let i = 0; i < totalSection; i++) {
      allSection[i].classList.toggle('open')
    }
  }

  const toggler = document.querySelector('.style-switcher-toggler'),
    switcher = document.querySelector('.style-switcher'),
    turn = document.querySelector('.day-night')

  toggler.addEventListener('click', () => {
    switcher.classList.toggle('open')
  })

  const dayNight = document.querySelector('.day-night')

  dayNight.addEventListener('click', () => {
    // dayNight.querySelector('i').classList.toggle('fa-sun')
    dayNight.querySelector('i').classList.toggle('fa-moon')
    document.body.classList.toggle('dark')
  })

  window.addEventListener('load', () => {
    if (document.body.classList.contains('dark')) {
      dayNight.querySelector('i').classList.add('fa-sun')
    } else {
      dayNight.querySelector('i').classList.add('fa-moon')
    }
  })
})
