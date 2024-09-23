export let randomMonday = [
	'Gdy nie wiesz, do którego portu płyniesz, żaden wiatr nie jest dobry.',
	'Czy jest ktoś, kogo chciałbyś zmienić, poinstruować, ulepszyć? Świetnie! Jestem za! Ale dlaczego nie zaczniesz od siebie?',
	'Jeśli nie potrafisz robić wielkich rzeczy, rób małe rzeczy w wielki sposób.',
]

export let randomTuesday = [
	'Naszą największą słabością jest poddawanie się. Najpewniejszą drogą do sukcesu jest zawsze próbowanie jeden, kolejny raz. - Thomas Alva Edison',
	'Nic nie jest szczególnie trudne do zrobienia, jeśli tylko rozłożyć to na etapy. - Henry Ford',
]

export let randomWendesday = [
	'Nie znam klucza do sukcesu, ale kluczem do klęski jest próba zadowolenia wszystkich - Bill Cosby',
	'Jeśli w życiu brakuje miejsca na odwagę, to inne cnoty są bez znaczenia. - Winston Churchill',
	'Nie martw się porażkami, martw się szansami, które tracisz, gdy nawet nie próbujesz. - Jack Canfield'
]

export let randomThirsday = [
	'Początek jest najważniejszą częścią pracy. - Platon',
	'Bądź tak dobry, by nie mogli Cię dłużej ignorować. - Steve Martin',
	'Bądź wdzięczny za to, co masz, a będziesz miał tego więcej. Jeśli koncentrujesz się na tym, czego nie masz, nigdy nie będziesz miał wystarczająco dużo. - Oprah Winfrey'
]

export function randomTextMonday() {
	let runText = Math.floor(Math.random() * randomMonday.length)

	document.getElementById('ShowText').innerText = randomMonday[runText]
}

export function randomTextTuesday() {
	let runText = Math.floor(Math.random() * randomTuesday.length)

	document.getElementById('ShowText2').innerText = randomTuesday[runText]
}

export function randomTextWendesday() {
	let runText = Math.floor(Math.random() * randomWendesday.length)

	document.getElementById('ShowText3').innerText = randomWendesday[runText]
}

export function randomTextThirsday() {
	let runText = Math.floor(Math.random() * randomThirsday.length)

	document.getElementById('ShowText4').innerText = randomThirsday[runText]
}