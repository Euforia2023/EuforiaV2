//import {
//randomMonday,
//randomTuesday,
//=randomTextMonday,
//randomTextTuesday,
//randomTextWendesday,
//randomTextThirsday,
//} from './components.js'

const nav = document.querySelector('.nav')
const navBtn = document.querySelector('.burger-btn')
const allNavItems = document.querySelectorAll('.nav__item')
const playerBtnStart = document.querySelector('.fa-circle-play')
const playerBtnStop = document.querySelector('.fa-circle-pause')
const scrollUpArrow = document.querySelector('.fa-angles-up')
const audioPlay = document.querySelector('.audio_play')
const pop = document.querySelector('.pop')
const textShow = document.querySelector('.ShowText')
const footerYera = document.querySelector('.footer__year')
const closeDays = document.querySelector('.fa-x')
const daysLinks = document.querySelectorAll('.presenters__box-link')
const daysBtn = document.querySelector('.presenters__btn-days')
const monday = document.querySelector('.day-one')
const tuesday = document.querySelector('.day-two')
const wendesday = document.querySelector('.day-three')
const thirsday = document.querySelector('.day-four')
const friday = document.querySelector('.day-five')
const saturday = document.querySelector('.day-six')
const sunday = document.querySelector('.day-seven')
const someBox = document.querySelector('.pon')
const someBox2 = document.querySelector('.wt')
const someBox3 = document.querySelector('.sr')
const someBox4 = document.querySelector('.czw')
const someBox5 = document.querySelector('.pt')
const someBox6 = document.querySelector('.sob')
const someBox7 = document.querySelector('.nied')
const allDays = document.querySelectorAll('.item')
// const randFile = await import('./random')

// POPUP WINDOW

function regards() {
	window.open('https://radioeuforia.panelradiowy.pl/embed.php?script=pozdrowienia', '_blank', 'width=400, height=250')
}

function ram() {
	window.open('https://radioeuforia.panelradiowy.pl/embed.php?script=ramowka', '_blank', 'widh=300')
}

function presenters() {
	window.open('https://radioeuforia.panelradiowy.pl/embed.php?script=ekipa', '_blank', 'height=800')
}

function recrut() {
	window.open('https://radioeuforia.panelradiowy.pl/embed.php?script=rekrutacja', '_blank', 'height=700')
}

function listp() {
	window.open('https://radioeuforia.panelradiowy.pl/embed.php?script=lista', '_blank', 'widh=630, height=700')
}
// PLAYER
const audio = new Audio('https://s3.slotex.pl/shoutcast/7510/stream?sid=1')
const btnPlay = document.querySelector('.btn1')
const btnStop = document.querySelector('.btn2')

const buttonOnclick = () => {
	playerBtnStart.style.display = 'none'
	playerBtnStop.style.display = 'block'
	audio.play()

	// handlePlayersStart()
}
// const handlePlayersStart = () => {
// 	playerBtnStart.style.display = 'none'
// 	playerBtnStop.style.display = 'block'
// }

const handlePlayersStop = () => {
	playerBtnStart.style.display = 'block'
	playerBtnStop.style.display = 'none'
	audio.pause()
}
// PLAYER END

// NAV
const handlerNav = () => {
	nav.classList.toggle('nav--active')

	allNavItems.forEach(item => {
		item.addEventListener('click', () => {
			nav.classList.remove('nav--active')
		})
	})

	handleNavItemAnimation()
}

const handleDays = () => {
	daysBox.classList.toggle('presenters__box-link--active')

	daysLinks.forEach(item => {
		item.addEventListener('click', () => {
			daysBox.classList.remove('presenters__box-link--active')
		})
	})
	handleDaysItemAnimation()
}

const handleDaysItemAnimation = () => {
	let delayTime = 0

	daysLinks.forEach(item => {
		item.classList.toggle('nav-item-animation')
		item.style.animationDelay = '.' + delayTime + 's'
		delayTime++
	})
}

const handleNavItemAnimation = () => {
	let delayTime = 0

	allNavItems.forEach(item => {
		item.classList.toggle('nav-items-animation')
		item.style.animationDelay = '.' + delayTime + 's'
		delayTime++
	})
}
// NAV END

// SCROLL UP ARROW
window.onscroll = function () {
	scrollUp()
}

// function scrollUp() {
// 	if (scrollUpArrow.style.bottom == 0) {
// 		scrollUpArrow.style.display = 'flex'
// 	} else {
// 		scrollUpArrow.style.display = 'none'
// 	}
// }

function scrollStart() {
	document.body.scrollTop = 0
	document.documentElement.scrollTop = 0
}

// RANDOM TEXT
// onload = function () {
// 	randomTextMonday(), randomTextTuesday(), randomTextWendesday(), randomTextThirsday()
// }

// FOOTER YEAR
const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYera.innerText = year
}

// AUTUMN

const createSnow = () => {
	let leafs = ['🍁', '🍂', '🍃']
	let leaf = leafs[Math.floor(Math.random() * leafs.length)]
	const snowflake = document.createElement('i')
	snowflake.classList.add('snowflake')
	snowflake.textContent = leaf

	snowflake.style.left = Math.random() * window.innerWidth + 'px'
	snowflake.style.animationDuration = Math.random() * 5 + 3 + 's'
	snowflake.style.opacity = Math.random()

	document.body.append(snowflake)

	setTimeout(() => {
		snowflake.remove()
	}, 8000)
}

setInterval(createSnow, 1000)

// LIST
$(document).ready(function () {
	$('.dropdown').click(function () {
		$('.menu').toggleClass('showMenu')
		$('.menu > li').click(function () {
			$('.dropdown > p').html($(this).html())
			$('.menu').removeClass('showMenu')
		})
	})
})

const dayChoser = () => {
	allDays.forEach(el => {
		el.addEventListener('click', function () {
			if (el == monday) {
				someBox.classList.toggle('box--active')
			} else if (el == tuesday) {
				someBox2.classList.toggle('box--active')
			} else if (el == wendesday) {
				someBox3.classList.toggle('box--active')
			} else if (el == thirsday) {
				someBox4.classList.toggle('box--active')
			} else if (el == friday) {
				someBox5.classList.toggle('box--active')
			} else if (el == saturday) {
				someBox6.classList.toggle('box--active')
			} else if (el == sunday) {
				someBox7.classList.toggle('box--active')
			}
		})
	})

	// choseDay.addEventListener('click', () => {
	// 	someBox.classList.remove('presenters__ram-box--active')
	// })
	// console.log('Works')
}
dayChoser()

// const dayChoserV2 = () => {
// 	const daysTab = [monday]

// 	if ()
// }
// SCROLL UP ARROW END
handleCurrentYear()
navBtn.addEventListener('click', handlerNav)
playerBtnStart.addEventListener('click', buttonOnclick)
playerBtnStop.addEventListener('click', handlePlayersStop)
scrollUpArrow.addEventListener('click', scrollStart)
// daysBtn.addEventListener('click', handleDays)
// monday.addEventListener('click', dayChoser)
