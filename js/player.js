function loadPrezenter() {
            fetch('https://api.allorigins.win/raw?url=' + encodeURIComponent('https://s3.slotex.pl:7510/stats?sid=1'))
                .then(response => response.text())
                .then(data => {
                    const parser = new DOMParser();
                    const xml = parser.parseFromString(data, 'text/xml');
                    
                    let prezenter = 'EUFORIA';
                    
                    const serverGenre = xml.querySelector('SERVERGENRE');
                    if (serverGenre && serverGenre.textContent.trim() !== '') {
                        prezenter = serverGenre.textContent.trim();
                    }
                    
                    const element = document.getElementById('prezenter');
                    if (element) {
                        element.textContent = prezenter;
                    }
                })
                .catch(error => {
                    console.error('Błąd pobierania:', error);
                    const element = document.getElementById('prezenter');
                    if (element) {
                        element.textContent = 'EUFORIA';
                    }
                });
        }

        loadPrezenter();
        setInterval(loadPrezenter, 30000); // aktualizacja co 30 sekund
