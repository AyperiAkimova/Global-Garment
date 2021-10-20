import React from "react";
import '../App.css';
function About (){
    return(
<>
    <section class="page-section" id="about">
      <div class="container">
          <div class="text-center">
              <h2 class="section-heading text-uppercase">О нас</h2>
              <h3 class="section-subheading text-muted">Швейная фабрика Global Garment. </h3>
          </div>
          <ul class="timeline">
              <li>
                  <div class="timeline-image">
                    <img class="rounded-circle img-fluid" src={require('../assets/img/about/about1.jpeg').default} alt="..." /></div>
                  <div class="timeline-panel">
                      <div class="timeline-heading">
                          <h4>2019-2021</h4>
                          <h4 class="subheading">ОсОО "Глобал Гармент" фабрикасы</h4>
                      </div>
                      <div class="timeline-body"><p class="text-muted">2019-ж 
                        3-октябрь айында негизделип, 
                        Баткен облусунун Кызыл-Кыя шаарында ачылган жана ондурууну
                         24.03.2020 кунунон баштаган.</p></div>
                  </div>
              </li>
              <li class="timeline-inverted">
                  <div class="timeline-image"><img class="rounded-circle img-fluid" src={require('../assets/img/about/about2.jpeg').default} alt="..." /></div>
                  <div class="timeline-panel">
                      <div class="timeline-heading">
                          <h4>2020-жыл</h4>
                          <h4 class="subheading">"Глобал Гармент" фабрикасынын ондуруу колому</h4>
                      </div>
                      <div class="timeline-body"><p class="text-muted">"Глобал Гармент" фабрикасынын продукция ондуруу
                        колому орто эсеп менен 
                       айына 25-30 тонна кездеме колдонулат б.а. 500000 
                       даана кийим ондурулот.</p></div>
                  </div>
              </li>
              <li>
                  <div class="timeline-image"><img class="rounded-circle img-fluid" src={require('../assets/img/about/about5.jpg').default} alt="..." /></div>
                  <div class="timeline-panel">
                      <div class="timeline-heading">
                          <h4>December 2015</h4>
                          <h4 class="subheading">Transition to Full Service</h4>
                      </div>
                      <div class="timeline-body"><p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div>
                  </div>
              </li>
              <li class="timeline-inverted">
                  <div class="timeline-image">
                    <img class="rounded-circle img-fluid" src={require('../assets/img/about/4.jpeg').default} alt="..." /></div>
                  <div class="timeline-panel">
                      <div class="timeline-heading">
                          <h4>July 2020</h4>
                          <h4 class="subheading">Phase Two Expansion</h4>
                      </div>
                      <div class="timeline-body"><p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
                    </div>
                  </div>
              </li>
              <li class="timeline-inverted">
                  <div class="timeline-image">
                      <h4>
                          Be Part
                          <br />
                          Of Our
                          <br />
                          Story!
                      </h4>
                  </div>
              </li>
          </ul>
      </div>
  </section>
</>
    );
}
export default About;