# Free Personal HTML Template
**Gulp**, **PUG**, **SASS**

**Install**
```sh
npm install
```
**Development**
```sh
make dev
```
**Build**
```sh
make build
```

## Description

***

1.  [HTML structure](#html)
2.  [Fonts](#fonts)
3.  [CSS styles & plugins](#css)
4.  [JS scripts & plugins](#js)
5.  [Icons](#icons)
6.  [Dark theme](#dark)
7.  [Color scheme](#scheme)
8.  [Form](#form)
9.  [reCAPTCHA](#recaptcha)

### 1. HTML structure
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <!-- === META (BEGIN)-->
        ...
        <!-- === META (END)-->
    
        <!-- === FAVICONS (BEGIN)-->
        ...
        <!-- === FAVICONS (END)-->
    
        <!-- === STYLES (BEGIN)-->
        ...
        <!-- === STYLES (END)-->
    </head>
    <body class="default-template">
    <!-- === PRELOADER (BEGIN)-->
    <div class="bnd-preloader" id="js-preloader"></div>
    <!-- === PRELOADER (END)-->
    
    <!-- === MAIN CONTAINER (BEGIN)-->
    <div class="bnd-container" id="js-container">
        <!-- === HEADER (BEGIN)-->
        <header class="bnd-header bnd-header-1">
            ...
        </header>
        <!-- === HEADER (END)-->
    
        <!-- === OVERLAY (BEGIN)-->
        <div class="bnd-overlay" id="js-overlay"></div>
        <!-- === OVERLAY (END)-->
    
        <!-- === SIDENAV (BEGIN)-->
        <nav class="bnd-sidenav" id="js-sidenav">
            ...
        </nav>
        <!-- === SIDENAV (END)-->
    
        <!-- === MAIN CONTENT (BEGIN)-->
        <main class="bnd-main" id="js-main">
            ...
        </main>
        <!-- === MAIN CONTENT (END)-->
    
        <!-- === FOOTER (BEGIN)-->
        <footer class="bnd-footer bnd-footer-1">
            ...
        </footer>
        <!-- === FOOTER (END)-->
    </div>
    <!-- === MAIN CONTAINER (END)-->
    
    <!-- === SCRIPTS (BEGIN)-->
    ...
    <!-- === SCRIPTS (END)-->
    </body>
    </html>
* * *

### 2. Fonts

#### [Jost](https://fonts.google.com/specimen/Jost?query=Jost)
*   400 (Regular)
*   500 (Medium)
*   600 (Semibold)

#### [FontAwesome 5 Free](https://fontawesome.com/)
*   Brand
*   Solid

* * *

### 3. CSS styles & plugins

#### [Bootstrap 4](https://getbootstrap.com/docs/4.6/getting-started/introduction/)

    <!-- === BOOTSTRAP-->
    <link rel="stylesheet" href="plugins/bootstrap/bootstrap-reboot.min.css">
    <link rel="stylesheet" href="plugins/bootstrap/bootstrap-grid.min.css">
    

#### [FontAwesome 5 Free](https://fontawesome.com/)

    <!-- === FONTAWESOME BRANDS-->
    <link rel="stylesheet" href="plugins/fontawesome/css/fontawesome.min.css">
    <link rel="stylesheet" href="plugins/fontawesome/css/brands.min.css">
    <link rel="stylesheet" href="plugins/fontawesome/css/solid.min.css">
    

#### [Splide](https://splidejs.com/)

    <!-- === SPLIDE-->
    <link rel="stylesheet" href="plugins/splide/splide.min.css">
    

#### [AOS](https://michalsnik.github.io/aos/)

    <!-- === AOS-->
    <link rel="stylesheet" href="plugins/aos/aos.css">
    

#### [Notyf](https://github.com/caroso1222/notyf)

    <!-- === NOTYF-->
    <link rel="stylesheet" href="plugins/notyf/notyf.min.css">
    

#### Template

    <!-- === DARK-->
    <link rel="stylesheet" href="css/dark.css">
    <!-- === MAIN-->
    <link rel="stylesheet" href="css/style.css">
    <!-- === SCHEMA. ONE OF turquoise, nephritis, peterriver, belizehole, wisteria, carrot, alizarin, pomegranate-->
    <link rel="stylesheet" href="css/wisteria.css">
    

* * *

### 4. JS scripts & plugins

#### [jQuery](https://jquery.com/)

    <!-- === JQUERY-->
    <script src="plugins/jquery/jquery.min.js"></script>
    

#### [Micromodal](https://micromodal.vercel.app/)

    <!-- === MICROMODAL-->
    <script src="plugins/micromodal/micromodal.min.js"></script>
    

#### [Waypoints](http://imakewebthings.com/waypoints/)

    <!-- === WAYPOINTS-->
    <script src="plugins/waypoints/jquery.waypoints.min.js"></script>
    

#### [Anime](https://animejs.com/)

    <!-- === ANIME-->
    <script src="plugins/anime/anime.min.js"></script>
    

#### [Typed](https://github.com/mattboldt/typed.js/)

    <!-- === TYPED-->
    <script src="plugins/typed/typed.min.js"></script>
    

#### [Shuffle](https://vestride.github.io/Shuffle/)

    <!-- === SHUFFLE-->
    <script src="plugins/shuffle/shuffle.min.js"></script>
    

#### [Splide](https://splidejs.com/)

    <!-- === SPLIDE-->
    <script src="plugins/splide/splide.min.js"></script>
    

#### [AOS](https://michalsnik.github.io/aos/)

    <!-- === AOS-->
    <script src="plugins/aos/aos.js"></script>
    

#### [Notyf](https://github.com/caroso1222/notyf)

    <!-- === NOTYF-->
    <script src="plugins/notyf/notyf.min.js"></script>
    

#### Template

    <!-- === INIT SCRIPTS-->
    <script src="js/script.js"></script>
    

* * *

### 5. Icons

#### [Heroicons](https://heroicons.dev/)

* * *

### 6. Dark theme

Insure you have included `css/dark.css` css file in the head section and after main `css/style.css`.

    <!-- === MAIN-->
    <link rel="stylesheet" href="css/style.css">
    <!-- === DARK-->
    <link rel="stylesheet" href="css/dark.css">
    

Add `dark` class to the `body` element.

    <body class="!OTHER CLASSES! dark">
    

* * *

### 7. Color schemes

Insure you have included `css/<name>.css` css file with your chosen color scheme in the head section and after main `css/style.css`.

    <!-- === MAIN-->
    <link rel="stylesheet" href="css/style.css">
    <!-- === SCHEME. CHOSE ONE OF turquoise, nephritis, peterriver, belizehole, wisteria, carrot, alizarin, pomegranate-->
    <link rel="stylesheet" href="css/turquoise.css">
    <link rel="stylesheet" href="css/nephritis.css">
    <link rel="stylesheet" href="css/peterriver.css">
    <link rel="stylesheet" href="css/belizehole.css">
    <link rel="stylesheet" href="css/wisteria.css">
    <link rel="stylesheet" href="css/carrot.css">
    <link rel="stylesheet" href="css/alizarin.css">
    <link rel="stylesheet" href="css/pomegranate.css">
    

* * *

### 8. Form

**Step 1:** Find in your `index.html` next piece of code

    <!-- === Hidden Required Fields (BEGIN)-->
    <input type="hidden" name="site_name" value="BOND"> 
    <input type="hidden" name="admin_email" value="bond@mail.com">
    

You need to change 2 values:

1.  **BOND** - Site name
2.  **bond@mail.com** - You'll receive messages on this mail address

* * *

### 9. reCAPTCHA

**Step 1:** Register a new site in reCAPTCHA [admin console](https://www.google.com/recaptcha/admin)

**Step 2:** Insure you have included `https://www.google.com/recaptcha/api.js` at the bottom of `index.html`

    <!-- === GOOGLE RECAPTCHA-->
    <script src="https://www.google.com/recaptcha/api.js?render=YOU_RECAPTCHA_SITE_KEY" id="recaptcha-v3"></script>
    

**Step 3:** Copy your **SITE KEY** after `https://www.google.com/recaptcha/api.js?render=`

*Example:*

    <!-- === GOOGLE RECAPTCHA-->
    <script src="https://www.google.com/recaptcha/api.js?render=xxxxxxxxxxxxxxxxxxxxxxx" id="recaptcha-v3"></script>
    

**Step 4:** Copy your **SECRET KEY** in mail.php

    define('RECAPTCHA_V3_SECRET_KEY', 'YOU_RECAPTCHA_SECRET_KEY');
    

*Example:*

    define('RECAPTCHA_V3_SECRET_KEY', 'xxxxxxxxxxxxxxxxxxxxxxx');
    

**Done** 🙂
