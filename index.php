<!DOCTYPE html>
<html lang="pl">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <script src="https://kit.fontawesome.com/9cd6a9c545.js" crossorigin="anonymous"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Playwrite+CU:wght@100..400&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Concert+One&display=swap" rel="stylesheet">

    <link rel="stylesheet" href="./css/main.css">
    <link rel="stylesheet" href="./php/stats.php">

</head>

<body>
    <i class="fa-solid fa-chevron-up"></i>
    <!-- <audio class="audio_play" src="https://s3.slotex.pl/shoutcast/7510/stream?sid=1" autoplay></audio> -->

    <button class="burger-btn">
        <div class="burger-btn__box">
            <div class="burger-btn__bars"></div>
        </div>
    </button>

    <div class="player_btn">
        <i class="fa-regular fa-circle-play player_btn-set btn1"></i>
        <i class="fa-regular fa-circle-pause player_btn-set btn2"></i>
    </div>
    <div class="player_box">
        <marquee class="user_play" direction="left" width="150" height="30" behavior="scroll" style="border:none">Gra
            dla was: <?php include 'stats.php';?>
        </marquee>
    </div>

    <!-- <div class="player_box">
        <i class="fa-solid fa-xmark"></i>

        <iframe marginheight="0" marginwidth="0"
            src="https://staty.portalradiowy.pl/statystyki/player-online/player1.php?na=&sl=&ip=ap3.slotex.pl&po=7296&kp=7934B1&ks=FFFFFF&kc=FFFFFF&tl=24&li=0&au=0&time=60&sslplayer=https%3A%2F%2Fs3.slotex.pl%2Fshoutcast%2F7510%2Fstream%3Fnocache%3D1726403151"
            frameborder="0" scrolling="yes" width="100%" height="220"></iframe>
    </div> -->

    <nav class="nav">

        <div class="nav__items">
            <a href="#" class="nav__item">Strona główna</a>
            <a href="https://radioeuforia.panelradiowy.pl/radio.php?script" target="_blank" rel="noopener"
                class="nav__item">Słuchaj nas w playerze</a>
            <a href="https://radioeuforia.panelradiowy.pl/embed.php?script=pozdrowienia" target="_blank" rel="noopener"
                class="nav__item">Pozdrowienia</a>
            <a href="https://radioeuforia.panelradiowy.pl/embed.php?script=ramowka" target="_blank" rel="noopener"
                class="nav__item">Ramówka</a>
            <a href="https://radioeuforia.panelradiowy.pl/embed.php?script=ekipa" target="_blank" rel="noopener"
                class="nav__item">Prezenterzy</a>
            <a href="https://radioeuforia.panelradiowy.pl/embed.php?script=rekrutacja" target="_blank" rel="noopener"
                class="nav__item">Rekrutacja</a>
        </div>

    </nav>

    <header class="header section">
        <h1 class="header__heading">Radio Euforia</h1>
        <!-- <iframe marginheight="0" marginwidth="0"
                src="https://staty.portalradiowy.pl/statystyki/player-online/player1.php?na=&sl=&ip=ap3.slotex.pl&po=7296&kp=7934B1&ks=FFFFFF&kc=FFFFFF&tl=24&li=0&au=0&time=60&sslplayer=https%3A%2F%2Fs3.slotex.pl%2Fshoutcast%2F7510%2Fstream%3Fnocache%3D1726403151"
                frameborder="0" scrolling="no" width="100%" height="220"></iframe> -->
        <!-- <audio controls muted class="audio_player">
            <source src="https://s3.slotex.pl/shoutcast/7510/stream?nocache=1726321496">
        </audio> -->
        <p class="header__text">Najlepsze Radio w sieci!</p>
        <a href="https://polfan.pl/app/" target="_blank" rel="noopener"
            class="header__btn btn-special-animation">Więcej</a>
        <div class="white-block white-block-left"></div>
    </header>

    <main class="main">

        <section class="presenters section-padding section white-section">

            <div class="wrapper">

                <h2 class="section-heading">Prezenterzy</h2>

                <div class="presenters__box">

                    <div class="presenters__box-img">
                        <img src="./img/gradient.png" alt="Przyładowy obrazek" class="presenters__img">
                    </div>

                    <div class="presenters__box-text">
                        <h3 class="presenters__title">Jan Kowalski</h3>
                        <p class="presenters__text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non,
                            dolore beatae dicta vel in perferendis eveniet suscipit minima voluptates accusamus totam
                            numquam ratione porro sunt laudantium sed eaque reiciendis assumenda.</p>
                    </div>

                </div>

                <div class="presenters__box">

                    <div class="presenters__box-img presenters__box-img--right">
                        <img src="./img/gradient.png" alt="Przyładowy obrazek" class="presenters__img">
                    </div>

                    <div class="presenters__box-text presenters__box-text--righ">
                        <h3 class="presenters__title">Jan Kowalski</h3>
                        <p class="presenters__text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non,
                            dolore beatae dicta vel in perferendis eveniet suscipit minima voluptates accusamus totam
                            numquam ratione porro sunt laudantium sed eaque reiciendis assumenda.</p>
                    </div>

                </div>

                <div class="presenters__box">

                    <div class="presenters__box-img">
                        <img src="./img/gradient.png" alt="Przyładowy obrazek" class="presenters__img">
                    </div>

                    <div class="presenters__box-text">
                        <h3 class="presenters__title">Jan Kowalski</h3>
                        <p class="presenters__text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non,
                            dolore beatae dicta vel in perferendis eveniet suscipit minima voluptates accusamus totam
                            numquam ratione porro sunt laudantium sed eaque reiciendis assumenda.</p>
                    </div>

                </div>

            </div>

        </section>

        <section class="hero-img section">

            <div class="white-block white-block-left"></div>
            <div class="white-block white-block-right"></div>
            <p class="hero-img__title">Radio Euforia</p>
            <hr>
            <p class="hero-img__text">Jedyne takie radio w sieci!</p>
            <hr>


        </section>

    </main>

    <footer class="footer">
        <div class="wrapper">

            <div class="footer__boxes">

                <div class="footer__box">
                    <h3 class="footer__box-title">Radio Euforia</h3>
                    <p>Nowoczesne Radio Internetowe, stworzone przez ludzi, dla ludzi. Zapraszamy do wspólnej zabawy,
                        dołącz do nas już dziś!</p>
                    <div class="footer__logo-box">

                        <img src="./img/logo.png" alt="Logo Raria Euforia" class="footer__logo-img">
                    </div>
                    <!-- <div class="footer__box-social">
                        <a href="" class="footer__box-link"><i class="fa-brands fa-facebook-f"></i></a>
                        <a href="" class="footer__box-link"><i class="fa-solid fa-sun"></i></a>
                    </div> -->
                </div>



                <div class="footer__box footer__box-desktop">
                    <h3 class="footer__box-title">Menu</h3>
                    <ul class="footer__box-list">
                        <li class="footer__box-list-item"><a href="#">Strona główna</a></li>
                        <li class="footer__box-list-item"><a href="#">Słuchaj nas w playerze</a></li>
                        <li class="footer__box-list-item"><a href="#">Pozdrowienia</a></li>
                        <li class="footer__box-list-item"><a href="#">Ramówka</a></li>
                        <li class="footer__box-list-item"><a href="#">Prezenterzy</a></li>
                        <li class="footer__box-list-item"><a href="#">Rekrutacja</a></li>
                    </ul>
                </div>

                <div class="footer__box footer__box-zaiks">
                    <h3 class="footer__box-title footer__box-title-zaiks">We've got this</h3>
                    <p>zaiks</p>
                </div>
            </div>
        </div>
        <hr>
        <p class="footer__bottom-text">&copy; <span class="footer__year"></span> Radio Euforia </p>
    </footer>

    <script src="./js/main.js"></script>
</body>

</html>