import React from "react";
import '../App.css';
function Clients(){
    return(
        <>
        <section class="page-section" id="services">
    <div class="container">
        <div class="text-center">
            <h2 class="section-heading text-uppercase">Наши клиенты</h2>
            <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
        </div>
        
         <div class="py-5">
            <div class="container">
                <div class="row align-items-center">
                    
                    <div class="col-md-3 col-sm-6 my-5">
                        <a href="#!"><img class="img-fluid img-brand d-block mx-auto" src={require('../assets/img/logos/google.svg').default} alt="..." /></a>
                    </div>
                    <div class="col-md-4 col-sm-6 my-5">
                        <a href="#!"><img class="img-fluid img-brand d-block mx-auto"  src={require('../assets/img/logos/5x.png').default} alt="..." /></a>
                    </div>
                    <div class="col-md-5 col-sm-6 my-3">
                        <a href="#!"><img class="img-fluid img-brand d-block mx-auto"  src={require('../assets/img/logos/logo-fix-price.png').default} alt="..." /></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
        </>
    );
}
export default Clients