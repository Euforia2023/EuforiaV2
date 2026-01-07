const canvas = document.getElementById('snow');
        const ctx = canvas.getContext('2d');

        // Dostosuj rozmiar canvas do okna
        function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        // Tablica płatków śniegu
        let snowflakes = [];
        const maxSnowflakes = 150; // Liczba płatków – zwiększ dla gęstszego śniegu

        function createSnowflake() {
            return {
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height - canvas.height, // Start powyżej ekranu
                radius: Math.random() * 4 + 1, // Rozmiar płatka
                speedY: Math.random() * 2 + 1, // Prędkość opadania
                speedX: Math.random() * 1 - 0.5, // Lekki dryf w bok
                opacity: Math.random() * 0.5 + 0.5,
                swayAmplitude: Math.random() * 20 + 10, // Amplituda kołysania
                swaySpeed: Math.random() * 0.02 + 0.01
            };
        }

        // Inicjalizacja płatków
        for (let i = 0; i < maxSnowflakes; i++) {
            snowflakes.push(createSnowflake());
        }

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            snowflakes.forEach(flake => {
                // Kołysanie (sinusoida)
                flake.x += Math.sin(flake.y * flake.swaySpeed) * 0.5 + flake.speedX;

                // Opadanie
                flake.y += flake.speedY;

                // Rysowanie płatka
                ctx.beginPath();
                ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 255, 255, ${flake.opacity})`;
                ctx.fill();

                // Reset, gdy płatek spadnie poniżej ekranu
                if (flake.y > canvas.height) {
                    flake.y = -10;
                    flake.x = Math.random() * canvas.width;
                }
            });

            requestAnimationFrame(animate);
        }

        animate();

// /******************************************
//         * Snow Effect Script- By Altan d.o.o. (http://www.altan.hr/snow/index.html)
//         * Visit Dynamic Drive DHTML code library (http://www.dynamicdrive.com/) for full source code
//         * Last updated Nov 9th, 05' by DD. This notice must stay intact for use
//         ******************************************/
//         const wh = document.getElementById('#wh');
//         function openwindow() {
//             window.open("autumn_effect.htm", "", "width=350,height=500")
//         }

//         //Configure below to change URL path to the snow image
//         var snowsrc = "./img/snow.gif"
//         // var snowsrc = "./img/snow.gif"
//         // Configure below to change number of snow to render
//         var no = 10;
//         // Configure whether snow should disappear after x seconds (0=never):
//         var hidesnowtime = 0;
        
//         // Configure how much snow should drop down before fading ("windowheight" or "pageheight")
        
//         var snowdistance = "windowheight";
//         // var snowdistance = 846 + 'px';

//         ///////////Stop Config//////////////////////////////////

//         var ie4up = (document.all) ? 1 : 0;
//         var ns6up = (document.getElementById && !document.all) ? 1 : 0;

//         function iecompattest() {
//             return (document.compatMode && document.compatMode != "BackCompat") ? document.documentElement : document.wh
//         }

//         var dx, xp, yp;    // coordinate and position variables
//         var am, stx, sty;  // amplitude and step variables
//         var i, doc_width = 800, doc_height = 600;

//         if (ns6up) {
//             doc_width = self.innerWidth;
//             doc_height = self.innerHeight;
//         } else if (ie4up) {
//             doc_width = iecompattest().clientWidth;
//             doc_height = iecompattest().clientHeight;
//         }

//         dx = new Array();
//         xp = new Array();
//         yp = new Array();
//         am = new Array();
//         stx = new Array();
//         sty = new Array();
//         snowsrc = (snowsrc.indexOf("dynamicdrive.com") != -1) ? "snow.gif" : snowsrc
//         for (i = 0; i < no; ++i) {
//             dx[i] = 0;                        // set coordinate variables
//             xp[i] = Math.random() * (doc_width - 50);  // set position variables
//             yp[i] = Math.random() * doc_height;
//             am[i] = Math.random() * 20;         // set amplitude variables
//             stx[i] = 0.02 + Math.random() / 10; // set step variables
//             sty[i] = 0.7 + Math.random();     // set step variables
//             if (ie4up || ns6up) {
//                 if (i == 0) {
//                     document.write("<div id=\"dot" + i + "\" style=\"POSITION: absolute; Z-INDEX: " + i + "; VISIBILITY: visible; TOP: 15px; LEFT: 15px;\"><a href=\"http://dynamicdrive.com\"><img src='" + snowsrc + "' border=\"0\"><\/a><\/div>");
//                 } else {
//                     document.write("<div id=\"dot" + i + "\" style=\"POSITION: absolute; Z-INDEX: " + i + "; VISIBILITY: visible; TOP: 15px; LEFT: 15px;\"><img src='" + snowsrc + "' border=\"0\"><\/div>");
//                 }
//             }
//         }

//         function snowIE_NS6() {  // IE and NS6 main animation function
//             doc_width = ns6up ? window.innerWidth - 10 : iecompattest().clientWidth - 10;
//             doc_height = (window.innerHeight && snowdistance == "windowheight") ? window.innerHeight : (ie4up && snowdistance == "windowheight") ? iecompattest().clientHeight : (ie4up && !window.opera && snowdistance == "pageheight") ? iecompattest().scrollHeight : iecompattest().offsetHeight;
//             if (snowdistance == "windowheight") {
//                 doc_height = window.innerHeight || iecompattest().clientHeight
//             }
//             else {
//                 doc_height = iecompattest().scrollHeight
//             }
//             for (i = 0; i < no; ++i) {  // iterate for every dot
//                 yp[i] += sty[i];
//                 if (yp[i] > doc_height - 50) {
//                     xp[i] = Math.random() * (doc_width - am[i] - 30);
//                     yp[i] = 0;
//                     stx[i] = 0.02 + Math.random() / 10;
//                     sty[i] = 0.7 + Math.random();
//                 }
//                 dx[i] += stx[i];
//                 document.getElementById("dot" + i).style.top = yp[i] + "px";
//                 document.getElementById("dot" + i).style.left = xp[i] + am[i] * Math.sin(dx[i]) + "px";
//             }
//             snowtimer = setTimeout("snowIE_NS6()", 10);
//         }

//         function hidesnow() {
//             if (window.snowtimer) clearTimeout(snowtimer)
//             for (i = 0; i < no; i++) document.getElementById("dot" + i).style.visibility = "hidden"
//         }


//         if (ie4up || ns6up) {
//             snowIE_NS6();
//             if (hidesnowtime > 0)
//                 setTimeout("hidesnow()", hidesnowtime * 1000)
//         }

//         updateSize()
//         window.addEventListener("resize", updateSize);
