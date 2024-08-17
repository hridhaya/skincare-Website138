// function call -- fixed header
class FixedHeader extends HTMLElement {
  connectedCallback() {
    // content of the header
    this.innerHTML = `
        <header class="header-class">
                <div class="menu-bar">
                     <a href="index.html" class="logo">Skin@Care</a>
                    <ul id="navLinks">    
                    <!-- nav bar -- close --- responsive-->
                    <b onclick="hideMenu()">x</b>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="aboutSkinType.html">Skin Type</a>
                        </li>
                        <li><a href="#">Skincare Routine</a>
                            <div class="dropdown-menu">
                                <ul>
                                    <li><a href="aboutSkincareRoutine.html" class="dropdown-link">Basic Routine</a></li>
                                    <li><a href="#">By Skin Type</a>
                                        <div class="dropdown-menu1">
                                            <ul>
                                                <li><a href="skincareOily.html" >Oily</a></li>
                                                <li><a href="skincareNormal.html" >Normal</a> </li>
                                                <li><a href="skincareSensitive.html" >Sensitive</a></li>
                                                <li><a href="skincareDry.html" >Dry</a></li>
                                                <li><a href="skincareCombination.html" >Combination</a></li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li><a href="aboutActives.html">Skincare Actives</a>
                                    <li><a href="skinConcerns.html">Skincare Concerns</a>
                                </ul>
                            </div>
                        </li>
                        <li><a href="contactUs.html">Contact Us</a></li>

                    </ul>
                    <!-- nav bar -- show --- responsive -->
                    <b onclick="showMenu()">=</b> 
                </div>
        </header>
        `;
  }
}
// function call -- fixed footer
class FixedFooter extends HTMLElement {
  connectedCallback() {
    // content of the footer
    this.innerHTML = `
        <footer class="footer-class" id="contact">
            <div class="footer-div">
                <p class="logo"><span>Skin@Care</span></p>
                
                <h3 class="follow-Us">Follow Us</h3>
                <div class="follow-Us">
                        <a href="https://www.facebook.com/" class="follow" target="_blank">FaceBook</a>
                        <a href="https://x.com/?lang=en" class="follow" target="_blank">X</a>
                        <a href="https://www.instagram.com/" class="follow" target="_blank">Instagram</a>
                        <a href="https://www.pinterest.com/" class="follow" target="_blank">Pinterest</a>
                    </div>
            </div>
        </footer>
        `;
  }
}
customElements.define("fixed-header", FixedHeader);
customElements.define("fixed-footer", FixedFooter);
// code for close and show menus(resposive)
var navLinks = document.getElementById("navLinks");
function showMenu() {
  navLinks.style.right = "0";
}
function hideMenu() {
  navLinks.style.right = "-200px";
}
