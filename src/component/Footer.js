import React from "react";
import '../App.css';

function Footer(){
    return(
<footer class="footer py-4"  id="contact">
    <div class="container">
        <h2 class="section-heading text-uppercase">Наши контакты</h2>
        <br />
        <br />
        <div class="row align-items-center">
            <div class="col-lg-4 text-lg-start">2021 &copy; Global Garment швейная фабрика</div>
            <div class="col-lg-4 my-3 my-lg-0">
                <a class="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-instagram"></i></a>
                <a class="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-facebook-f"></i></a>
                <a class="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-whatsapp"></i></a>
                <a class="btn btn-dark btn-social mx-2" href="#!"><i class="fas fa-envelope"></i></a>
            </div>
            <div class="col-lg-4 text-lg-end">
                <a class="link-dark text-decoration-none me-3" href="#!">Связаться с нами</a>
                <a class="link-dark text-decoration-none me-3" href="#!">Мы будем рады</a>
                <a class="link-dark text-decoration-none" href="#!"><i class="fas fa-phone"></i> 0777 777 777</a>

            </div>
        </div>
    </div>
</footer>
        
    );
}
export default Footer;