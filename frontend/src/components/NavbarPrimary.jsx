function NavbarPrimary() {
    return(
        <nav class="navbar" role="navigation" aria-label="main navigation" style={{background:"#ccc"}}>
        <div class="navbar-brand">
          <a class="navbar-item" href="/" style={{fontSize:'20px', color:'#000'}}>
            DevConnector
          </a>

          <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" class="navbar-menu">

          <div class="navbar-end">
            <div class="navbar-item">
              <div class="buttons">
                <a class="button is-primary">
                  <strong>Sign up</strong>
                </a>
                <a class="button is-light">
                  Log in
                </a>
              </div>
            </div>
          </div>
        </div>
    </nav>
    )
}

export default NavbarPrimary;