const nav = document.querySelector('.nav')
const navBtn = document.querySelector('.burger-btn')
const allNavItems = document.querySelectorAll('.nav__item')
const playerBtnStart = document.querySelector('.fa-circle-play')
const playerBtnStop = document.querySelector('.fa-circle-pause')
const scrollUpArrow = document.querySelector('.fa-chevron-up')
const audioPlay = document.querySelector('.audio_play')

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
	if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
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
