import React from "react";
import '../App.css';

function Vacancy(){
    return(
        <>
        <section class="page-section" id="vacancy">
    <div class="container">
        <div class="text-center">
            <h2 class="section-heading text-uppercase">Вакансии</h2>
            <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
        </div>
        <div class="row text-center">
            <div class="col-md-4">
                <span class="fa-stack fa-4x">
                    <i class="fas fa-circle fa-stack-2x text-primary"></i>
                    <i class="fas fa-- fa-stack-1x fa-inverse"></i>
                </span>
                <h4 class="my-3">Позиция</h4>
                <ol class="text-muted">
                  <li>Требование</li> 
                  <li>Обязанности</li>
                    <li>График работы</li> 
                </ol>
                <a href="./form.html" class="blog-post__cta">Регистрация</a>
            </div>
            <div class="col-md-4">
                <span class="fa-stack fa-4x">
                    <i class="fas fa-circle fa-stack-2x text-primary"></i>
                    <i class="fas fa- fa-stack-1x fa-inverse"></i>
                </span>
                <h4 class="my-3">Позиция</h4>
                <ol class="text-muted">
                  <li>Требование </li> 
                  <li>Обязанности</li>
                  <li>График работы</li> 
                </ol>
                <a href="./form.html" class="blog-post__cta">Регистрация</a>
            </div>
            <div class="col-md-4">
                <span class="fa-stack fa-4x">
                    <i class="fas fa-circle fa-stack-2x text-primary"></i>
                    
                    <i class="fas fa-seamstress fa-stack-1x fa-inverse"></i>
                </span>
                <h4 class="my-3">Позиция</h4>
                <ol class="text-muted">
                  <li>Требование</li> 
                  <li>Обязанности</li>
                    <li>График работы</li> 
                </ol>
                <a href="./form.html" class="blog-post__cta">Регистрация</a>
             </div>
        </div>
    </div>
</section>
        </>
    );
}
export default Vacancy;