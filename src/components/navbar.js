import '../App.css'
function Navbar(){
    return(
        <>
        <div class="navbar" wrap="wrap" align="center" justify="space-between">
        <div class="logo1">
        <h1 class="logo11"><a href='/'>George Lin</a></h1>
        </div>
        <div class="TopLink">
            <a href='/blog' class="top-link">Blog</a>
            <a href='/source' class="top-link">Source</a>
            <a href='/app' class="top-link">App</a>
        </div>
        <div align="right" class="linkicon">
        <div class="Linkmobile">
        <button type="button" class="menubutton" aria-label="Options" id="menu-button-navbar-menu" aria-expanded="false" aria-haspopup="menu" aria-controls="menu-list-navbar-menu">
            <svg viewBox="0 0 24 24" focusable="false" class="menu-icon" aria-hidden="true"><path fill="currentColor" d="M 3 5 A 1.0001 1.0001 0 1 0 3 7 L 21 7 A 1.0001 1.0001 0 1 0 21 5 L 3 5 z M 3 11 A 1.0001 1.0001 0 1 0 3 13 L 21 13 A 1.0001 1.0001 0 1 0 21 11 L 3 11 z M 3 17 A 1.0001 1.0001 0 1 0 3 19 L 21 19 A 1.0001 1.0001 0 1 0 21 17 L 3 17 z"></path></svg>
        </button>
        </div>
        </div>
        </div>
        </>
    );
}

export default Navbar;