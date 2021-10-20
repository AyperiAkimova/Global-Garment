import React from 'react';
import logo from '../assets/img/logo.png' // relative path to image 
import '../App.css';
function Navbar() {
  // Scripts
// 

window.addEventListener('DOMContentLoaded', (event) => {
  // Navbar shrink function
  const navbarShrink = function() {
    const navbarCollapsible = document.body.querySelector('#mainNav');
    if (!navbarCollapsible) {
      return;
    }
    if (window.scrollY === 0) {
      navbarCollapsible.classList.remove('navbar-shrink');
    } else {
      navbarCollapsible.classList.add('navbar-shrink');
    }
  };

  // Shrink the navbar 
  navbarShrink();

  // Shrink the navbar when page is scrolled
  document.addEventListener('scroll', navbarShrink);

  // Activate Bootstrap scrollspy on the main nav element
  const mainNav = document.body.querySelector('#mainNav');
  if (mainNav) {
    // eslint-disable-next-line no-undef
    new bootstrap.ScrollSpy(document.body, {
      target: '#mainNav',
      offset: 74,
    });
  };

  // Collapse responsive navbar when toggler is visible
  const navbarToggler = document.body.querySelector('.navbar-toggler');
  const responsiveNavItems = [].slice.call(
      document.querySelectorAll('#navbarResponsive .nav-link'),
  );
  // eslint-disable-next-line array-callback-return
  responsiveNavItems.map(function(responsiveNavItem) {
    responsiveNavItem.addEventListener('click', () => {
      if (window.getComputedStyle(navbarToggler).display !== 'none') {
        navbarToggler.click();
      }
    });
  });
});
    return (
      <>
      {/* Navigation */}
     <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
      <div class="container">
        <a href="#page-top">
            <img  class="img-fluid img-brand d-block" src={logo} alt={"logo"} /></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
              Menu
              <i class="fas fa-bars ms-1"></i>
          </button>
          <div class="collapse navbar-collapse" id="navbarResponsive">
              <ul class="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
                  
                  <li class="nav-item"><a class="nav-link" href="#about">О НАС</a></li>
                  <li class="nav-item"><a class="nav-link" href="#portfolio">НАША ПРОДУКЦИЯ</a></li>
                  <li class="nav-item"><a class="nav-link" href="#team">Команда</a></li>
                  <li class="nav-item"><a class="nav-link" href="#vacancy">Вакансии</a></li>
                  <li class="nav-item"><a class="nav-link" href="#contact">Контакты</a></li>
                  
                 
              </ul>
          </div>
      </div>
  </nav>

  {/* Head */}
  <header class="masthead">
    <div class="container">
        <div class="masthead-subheading">
          Добро пожаловать в нашу компанию!</div>
        <div class="masthead-heading text-uppercase">
          Человек не делает ничего, если цели нет и не делает ничего великого, если цель ничтожна.</div>


        <a class="btn btn-primary btn-xl text-uppercase" href="#services">Больше информации</a>
    </div>
</header>
      </>
    );
}
export default Navbar;