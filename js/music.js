const audio = document.getElementById('stream')
const playBtn = document.getElementById('playBtn')
const volumeSlider = document.getElementById('volume')

// <<< ZMIEŃ NA SWÓJ LINK DO STREAMU >>>
audio.src = 'https://s3.slotex.pl/shoutcast/7510/stream?sid=1'

audio.load() // Na wszelki wypadek

// Kliknięcie tylko na przycisk play/pause
playBtn.onclick = e => {
	e.stopPropagation() // Zabezpieczenie

	if (audio.paused) {
		audio
			.play()
			.then(() => {
				playBtn.classList.add('playing')
			})
			.catch(err => {
				console.error('Błąd odtwarzania:', err)
				alert('Nie można odtworzyć – sprawdź link do streamu lub odblokuj dźwięk w przeglądarce.')
			})
	} else {
		audio.pause()
		playBtn.classList.remove('playing')
	}
}

// Zmiana głośności – BEZ wpływu na odtwarzanie
volumeSlider.oninput = () => {
	audio.volume = volumeSlider.value
}

// WAŻNE: Zatrzymaj propagację kliknięcia z suwaka, żeby nie aktywował przycisku
volumeSlider.onclick = e => {
	e.stopPropagation()
}

// Dodatkowe zabezpieczenie – dla zdarzeń mousedown/mousemove na suwaku
volumeSlider.onmousedown = e => {
	e.stopPropagation()
}

// Diagnostyka błędów streamu
audio.onerror = () => {
	console.error('Błąd streamu – nieprawidłowy adres?')
	alert('Błąd połączenia ze streamem. Sprawdź link w script.js.')
}
