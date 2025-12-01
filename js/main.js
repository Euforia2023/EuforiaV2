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

const handlePlayersStop = () => {
	playerBtnStart.style.display = 'block'
	playerBtnStop.style.display = 'none'
	audio.pause()
}
// PLAYER END

// NAV
const handlerNav = () => {
	nav.classList.toggle('nav--active')
	if (nav.classList.contains('nav--active')) {
		document.body.style.overflow = 'hidden'
	} else {
		document.body.style.overflow = 'visible'
	}
	allNavItems.forEach(item => {
		item.addEventListener('click', () => {
			nav.classList.remove('nav--active')
			document.body.style.overflow = 'visible'
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

function scrollStart() {
	document.body.scrollTop = 0
	document.documentElement.scrollTop = 0
}

// FOOTER YEAR
const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYera.innerText = year
}

// AUTUMN

// const createSnow = () => {
// 	let leafs = ['🍁', '🍂', '🍃']
// 	let leaf = leafs[Math.floor(Math.random() * leafs.length)]
// 	const snowflake = document.createElement('i')
// 	snowflake.classList.add('snowflake')
// 	snowflake.textContent = leaf

// 	snowflake.style.left = Math.random() * window.innerWidth + 'px'
// 	snowflake.style.animationDuration = Math.random() * 5 + 3 + 's'
// 	snowflake.style.opacity = Math.random()

// 	document.body.append(snowflake)

// 	setTimeout(() => {
// 		snowflake.remove()
// 	}, 8000)
// }

// setInterval(createSnow, 1000)

// const createSnow = () => {
// 	const snowflake = document.createElement('i')
// 	snowflake.classList.add('snowflake')
// 	snowflake.textContent = '❄️'

// 	snowflake.style.left = Math.random() * window.innerWidth + 'px'
// 	snowflake.style.animationDuration = Math.random() * 5 + 3 + 's'
// 	snowflake.style.opacity = Math.random()

// 	document.body.append(snowflake)

// 	setTimeout(() => {
// 		snowflake.remove()
// 	}, 8000)
// }

// setInterval(createSnow, 2000)

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
				someBox2.classList.remove('box--active')
				someBox3.classList.remove('box--active')
				someBox4.classList.remove('box--active')
				someBox5.classList.remove('box--active')
				someBox6.classList.remove('box--active')
				someBox7.classList.remove('box--active')
			} else if (el == tuesday) {
				someBox2.classList.toggle('box--active')
				someBox.classList.remove('box--active')
				someBox3.classList.remove('box--active')
				someBox4.classList.remove('box--active')
				someBox5.classList.remove('box--active')
				someBox6.classList.remove('box--active')
				someBox7.classList.remove('box--active')
			} else if (el == wendesday) {
				someBox3.classList.toggle('box--active')
				someBox.classList.remove('box--active')
				someBox2.classList.remove('box--active')
				someBox4.classList.remove('box--active')
				someBox5.classList.remove('box--active')
				someBox6.classList.remove('box--active')
				someBox7.classList.remove('box--active')
			} else if (el == thirsday) {
				someBox4.classList.toggle('box--active')
				someBox.classList.remove('box--active')
				someBox2.classList.remove('box--active')
				someBox3.classList.remove('box--active')
				someBox5.classList.remove('box--active')
				someBox6.classList.remove('box--active')
				someBox7.classList.remove('box--active')
			} else if (el == friday) {
				someBox5.classList.toggle('box--active')
				someBox.classList.remove('box--active')
				someBox2.classList.remove('box--active')
				someBox3.classList.remove('box--active')
				someBox4.classList.remove('box--active')
				someBox6.classList.remove('box--active')
				someBox7.classList.remove('box--active')
			} else if (el == saturday) {
				someBox6.classList.toggle('box--active')
				someBox.classList.remove('box--active')
				someBox2.classList.remove('box--active')
				someBox3.classList.remove('box--active')
				someBox4.classList.remove('box--active')
				someBox5.classList.remove('box--active')
				someBox7.classList.remove('box--active')
			} else if (el == sunday) {
				someBox7.classList.toggle('box--active')
				someBox.classList.remove('box--active')
				someBox2.classList.remove('box--active')
				someBox3.classList.remove('box--active')
				someBox4.classList.remove('box--active')
				someBox5.classList.remove('box--active')
				someBox6.classList.remove('box--active')
			}
		})
	})
}
dayChoser()

// CHRISTMAS
const close_christmas = document.querySelector('.p_close');
const chr_window = document.querySelector('.christmas_wrapper')

var current = 'On-line'
var montharray = new Array('Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec')
var zostalo = document.getElementById('zostalo')
function countdown(yr, m, d) {
	theyear = yr
	themonth = m
	theday = d
	var today = new Date()
	var todayy = today.getFullYear()
	if (todayy < 1000) todayy += 1900
	var todaym = today.getMonth()
	var todayd = today.getDate()
	var todayh = today.getHours()
	var todaymin = today.getMinutes()
	var todaysec = today.getSeconds()
	var todaystring = montharray[todaym] + ' ' + todayd + ', ' + todayy + ' ' + todayh + ':' + todaymin + ':' + todaysec
	futurestring = montharray[m - 1] + ' ' + d + ', ' + yr
	dd = Date.parse(futurestring) - Date.parse(todaystring)
	dday = Math.floor((dd / (60 * 60 * 1000 * 24)) * 1)
	dhour = Math.floor(((dd % (60 * 60 * 1000 * 24)) / (60 * 60 * 1000)) * 1)
	dmin = Math.floor((((dd % (60 * 60 * 1000 * 24)) % (60 * 60 * 1000)) / (60 * 1000)) * 1)
	dsec = Math.floor(((((dd % (60 * 60 * 1000 * 24)) % (60 * 60 * 1000)) % (60 * 1000)) / 1000) * 1)
	if (dday <= 0 && dhour <= 0 && dmin <= 0) {
		zostalo.innerText = current
		return
	} else if (dday <= 0 && dhour <= 0) {
		zostalo.innerText = dmin + ' minut, i ' + dsec + ' sekund'
		setTimeout('countdown(theyear,themonth,theday)', 1000)
	} else if (dday <= 0) {
		zostalo.innerText = dhour + ' godzin, ' + dmin + ' minut, i ' + dsec + ' sekund'
		setTimeout('countdown(theyear,themonth,theday)', 1000)
	} else {
		zostalo.innerText = dday + ' Dni, ' + dhour + ' godzin, ' + dmin + ' minut, i ' + dsec + ' sekund'
		setTimeout('countdown(theyear,themonth,theday)', 1000)
	}
}

window.document.addEventListener('DOMContentLoaded', countdown(2025, 12, 24))

// SCROLL UP ARROW END
handleCurrentYear()
navBtn.addEventListener('click', handlerNav)
playerBtnStart.addEventListener('click', buttonOnclick)
playerBtnStop.addEventListener('click', handlePlayersStop)
scrollUpArrow.addEventListener('click', scrollStart)
// daysBtn.addEventListener('click', handleDays)
// monday.addEventListener('click', dayChoser)
