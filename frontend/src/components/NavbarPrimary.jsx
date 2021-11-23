function NavbarPrimary() {
    return(
        <nav>
          <li>
            <a href="/" className={"brand"}>DevConnector</a>
          </li>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/tour">Take a tour</a></li>
            <li><a href="/join">Join now</a></li>
          </ul>
        </nav>
    )
}

export default NavbarPrimary;