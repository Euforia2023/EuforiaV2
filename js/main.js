const nav = document.querySelector('.nav')
const navBtn = document.querySelector('.burger-btn')
const allNavItems = document.querySelectorAll('.nav__item')
const playerBtnStart = document.querySelector('.fa-circle-play')
const playerBtnStop = document.querySelector('.fa-stop')

// const closePlayerBox = document.querySelector('.fa-xmark')
const playerBox = document.querySelector('.player_box')

const handlerNav = () => {
	nav.classList.toggle('nav--active')

	allNavItems.forEach(item => {
		item.addEventListener('click', () => {
			nav.classList.remove('nav--active')
		})
	})

	handleNavItemAnimation()
}

const handlePlayersStart = () => {
	playerBtnStart.style.display = 'none'
	playerBtnStop.style.display = 'block'
}

const handlePlayersStop = () => {
	playerBtnStart.style.display = 'block'
	playerBtnStop.style.display = 'none'
}

// const handlerPlayerBox = () => {
// 	playerBox.classList.add('player_box--active')

// 	closePlayerBox.addEventListener('click', () => {
// 			playerBox.classList.remove('player_box--active')
// 		})
// }

const handleNavItemAnimation = () => {
	let delayTime = 0

	allNavItems.forEach(item => {
		item.classList.toggle('nav-items-animation')
		item.style.animationDelay = '.' + delayTime + 's'
		delayTime++
	})
}

navBtn.addEventListener('click', handlerNav)
// playerBtn.addEventListener('click', handlerPlayerBox)
playerBtnStart.addEventListener('click', handlePlayersStart)
playerBtnStop.addEventListener('click', handlePlayersStop)
