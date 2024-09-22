const nav = document.querySelector('.nav')
const navBtn = document.querySelector('.burger-btn')
const allNavItems = document.querySelectorAll('.nav__item')
const playerBtnStart = document.querySelector('.fa-circle-play')
const playerBtnStop = document.querySelector('.fa-circle-pause')
const scrollUpArrow = document.querySelector('.fa-chevron-up')
const audioPlay = document.querySelector('.audio_play')
const pop = document.querySelector('.pop')

// POPUP WINDOW

function regards() {
	window.open('https://radioeuforia.panelradiowy.pl/embed.php?script=pozdrowienia', '_blank', 'width=400, height=250')
}

function ram() {
	window.open('https://radioeuforia.panelradiowy.pl/embed.php?script=ramowka', '_blank', 'widh=300')
}

function presenters() {
	window.open('https://radioeuforia.panelradiowy.pl/embed.php?script=ekipa', '_blank', 'widh=600, height=800')
}

function recrut() {
	window.open('https://radioeuforia.panelradiowy.pl/embed.php?script=rekrutacja', '_blank', 'widh=630, height=700')
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

function scrollUp() {
	if (scrollUpArrow.style.bottom == 0) {
		scrollUpArrow.style.display = 'flex'
	} else {
		scrollUpArrow.style.display = 'none'
	}
}

function scrollStart() {
	document.body.scrollTop = 0
	document.documentElement.scrollTop = 0
}
// SCROLL UP ARROW END
navBtn.addEventListener('click', handlerNav)
playerBtnStart.addEventListener('click', buttonOnclick)
playerBtnStop.addEventListener('click', handlePlayersStop)
scrollUpArrow.addEventListener('click', scrollStart)
