let homeLink = "index.html";
let myWorkLink = "index.html#myWork";
let aboutmeLink = "aboutme.html"

let header_div = `<header class="header header-sticky header-light">
      <div class="container">
        <nav class="navbar navbar-expand-lg navbar-light">
          <a href="${homeLink}" class="navbar-brand d-flex align-items-center">
              <img src="assets/images/ARIcon.svg" alt="">
              <h4 class="ml-1 display-5">Arpit Rajawat</h4>
          </a>

          <button class="navbar-toggler burger" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item dropdown dropdown-hover">
                <a class="nav-link header-link nav-link-hover" href="${aboutmeLink}" id="" role="button"  aria-haspopup="true" aria-expanded="false">
                  About me
                </a>
              </li>
              <li class="nav-item dropdown dropdown-hover">
                <a class="nav-link header-link nav-link-hover" href="${myWorkLink}" id="" role="button" aria-haspopup="true" aria-expanded="false">
                  Work
                </a>
              </li>
              <li class="nav-item dropdown dropdown-hover">
                <a class="nav-link header-link nav-link-hover" href="assets/Arpit Rajawat_ Resume_2022.pdf" id="arpitResume" role="button" aria-haspopup="true" aria-expanded="false" download>
                  <i class="fa fa-arrow-down"></i> Download Resume
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>`;

$("#headerDiv").html(header_div);