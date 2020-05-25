import React from "react"

const Header = ({ siteTitle }) => (
  <header>
    <div class="header__links">
      <a href="/" class="header__link header__link--home">
        Home
      </a>
      <a href="/projects/" class="header__link">
        {" "}
        Projects
      </a>
      <a href="/blogIndex/" class="header__link">
        {" "}
        Blog
      </a>
    </div>
  </header>
)

export default Header
