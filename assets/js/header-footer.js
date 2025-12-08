class header extends HTMLElement {
    connectedCallback() {
        this.innerHTML =
            `
            <header class="main-header header-style-one">
            <div class=header-top-style8>
                <div class=container>
                    <div class=outer-box>
                        <div class="container-fluid top-header">
                            <div class=row>
                                <div class=col-lg-6>
                                    <div class=left-container>
                                        <a class=top-banner-telephone-number href="tel:+91 7821021521"> <i
                                                class="fa fa-phone phone-icon-main-site"></i> +91 7821021521</a>
                                        <a href=""> <i class="fa fa-map-o"></i>
                                            Pune, India</a>
                                    </div>
                                </div>
                                <div class="col-lg-6 text-right">
                                    <div class=right-container>
                                        <div class=social-media>
                                            <a href=mailto:connect@valiantbusinesssolutions.com> <i
                                                    class="fa fa-envelope"></i>
                                                connect@valiantbusinesssolutions.com
                                            </a>
                                            <span title="Facebook"><a href=https://www.facebook.com/valiantbusinesssolution><i
                                            class="fa fa-facebook"></i></a></span>
                                            <span title="Instagram"><a href=https://www.instagram.com/valiantbusinesssolutions><i
                                            class="fa fa-instagram"></i></a></span>
                                            <span title="Linkedin"><a href=https://www.linkedin.com/company/valiant-business-solutions><i
                                            class="fa fa-linkedin"></i></a></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class=header>
                <div class=container>
                    <div class=outer-box>
                        <div class=header-left>
                            <div class=main-logo-box>
                                <a href="https://valiantbusinesssolutions.com">
                                    <img src="assets/images/logo/VBS FINAL LOGO-01.png" class=nav-logo alt="Awesome Logo">
                                </a>
                            </div>
                            <div class="nav-outer style1 clearfix">
                                <div class=mobile-nav-toggler>
                                    <div class=inner>
                                        <span class=icon-bar></span>
                                        <span class=icon-bar></span>
                                        <span class=icon-bar></span>
                                    </div>
                                </div>
                                <nav class="main-menu style1 navbar-expand-md navbar-light">
                                    <div class="collapse navbar-collapse show clearfix" id=navbarSupportedContent>
                                        <ul class="navigation clearfix">
                                            <li class=dropdown><a href="https://valiantbusinesssolutions.com"><span>Home</span></a>
                                            </li>
                                            <li class=dropdown><a href=about><span>About</span></a>
                                            </li>
                                            <li class=dropdown><a href="https://www.travolex.com"><span>Travel</span></a>
                                            </li>
                                            <li class=dropdown><a href="corporate-travel/index"><span>Corporate Travel</span></a>
                                            </li>
                                            <li class=dropdown><a href=services><span>Services</span></a>
                                            </li>
                                            <li class=dropdown><a href=blog><span>Blogs</span></a>
                                            </li>
                                            <li><a class="contact-btn" href=contact><span>Get In Touch</span></a>
                                            </li>
                                        </ul>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class=mobile-menu>
                <div class=menu-backdrop></div>
                <div class=close-btn><span class="icon fa fa-times-circle"></span></div>
                <nav class=menu-box>
                    <div class=nav-logo><a href="https://www.valiantbusinesssolutions.com"><img src="" alt=""></a></div>
                    <div class=menu-outer>
                    </div>
                </nav>
            </div>
        </header>
            `;
    }
}



class footer extends HTMLElement {
    connectedCallback() {
        this.innerHTML =
            `
            <footer class="footer-area">
                <div class="footer">
                    <div class="container">
                        <div class="row text-right-rtl">
                            <div class="col-xl-4 col-lg-6 col-md-5 col-sm-12">
                                <div class="single-footer-widget marbtm50">
                                    <div class="our-company-info">
                                        <div class="footer-logo">
                                            <a href="https://www.valiantbusinesssolutions.com">
                                                <img src="assets/images/logo/VBS FINAL LOGO white.png" class="footer-logo1 footer-logo-mobile" alt="">
                                            </a>
                                        </div>
                                        <div class="text-box">
                                            <p>
                                                VBS was established to introduce a new model built on strong relationships, offering a transparent platform that supports all travel and corporate travel requirements.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-2 col-lg-6 col-md-7 col-sm-12">
                                <div class="single-footer-widget footer-nav">
                                    <div class="title">
                                        <h3><span>Quick Links</span></h3>
                                    </div>
                                    <div class="footer-widget-links">
                                        <ul class="float-left left">
                                            <li><a href="about">About us</a></li>
                                            <li><a href="services">Services</a></li>
                                            <li><a href="contact">Contact Us</a></li>
                                            <li><a href="sitemap">Sitemap</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-2 col-lg-6 col-md-7 col-sm-12">
                                <div class="single-footer-widget footer-nav">
                                    <div class="title">
                                        <h3><span>Services</span></h3>
                                    </div>
                                    <div class="footer-widget-links">
                                        <ul class="float-left left">
                                            <li><a href="corporate-travel/index">Corporate Travel</a></li>
                                            <li><a href="https://www.travolex.com">Travel</a></li>
                                          
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-4 col-lg-12 col-md-12 col-sm-12">
                                <div class="single-footer-widget footer-nav">
                                    <div class="title title-for-mob">
                                        <h3><span>Contact Us</span></h3>
                                    </div>
                                    <div class="footer-widget-links">
                                        <ul class="float-left left">
                                            <li><a href="tel:+91 7821021521"> <i class="fa fa-phone"> </i> +91 782-102-1521
                                                </a></li>
                                            <li><a href="mailto:connect@valiantbusinesssolutions.com"> <i class="fa fa-envelope"></i>
                                                    connect@valiantbusinesssolutions.com</a>
                                            </li>
                                            <li><a href="https://goo.gl/maps/DKcGwE3LzeGxGKa36">
                                                    <i class="fa fa-map-marker"></i> Office 713/714, Clover
                                                    Hills Plaza, Undri, Pune, Maharashtra 411060
                                                    &nbsp;&nbsp;&nbsp;&nbsp; </a></li>
                                                    <li><a href="https://www.facebook.com/valiantbusinesssolution" class="ml-20"><i class="fa fa-facebook"></i></a><a href="https://www.instagram.com/valiantbusinesssolutions/" class="ml-20"><i class="fa fa-instagram"></i></a><a href="https://www.linkedin.com/company/valiant-business-solutions/"><i class="fa fa-linkedin"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="footer-bottom text-center">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="bottom-inner">
                                    <div class="copyright text-left">
                                        <p>Copyright © 2025 Valiant Business Soultions All
                                            Rights Reserved.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="bottom-inner">
                                    <div class="copyright text-right vstext-for-mob">
                                        <p>Desgined &amp; Developed By<a href="https://visionarybizz.com"> Visionary
                                            Services</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            `;
    }
}

customElements.define('header-element', header);
customElements.define('footer-element', footer);
