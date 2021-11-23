function NavbarPrimary() {
    return(
        <nav>
          <li>
            <a href="/" className={"brand"}>DevConnector</a>
          </li>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/developers">Devs presentation</a></li>
            <li><a href="/about">Take a tour</a></li>
            <li><a href="/join">Join now</a></li>
          </ul>
        </nav>
    )
}

export default NavbarPrimary;