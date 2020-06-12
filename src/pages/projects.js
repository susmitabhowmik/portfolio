import Layout from "../components/layout"
import React from "react"
import SEO from "../components/seo"

export default () => (
  <Layout>
    <SEO title="Susmita Bhowmik Projects" />
    <div class="main-content">
      <div class="project-grid">
        <div class="wrapper project">
          <h1>Sparkeats</h1>
          <p>
            Sparkeats is a restaurant review site where Sparkboxers review
            restaurants. During my time at Sparkbox, I worked as part of a team
            utilizing agile methodology to implement a redesign for the site on
            the frontend. I also worked on the backend to refactor legacy code,
            write tests, and fix bugs.
          </p>
          <p class="project__tech-stack">
            Node.js, Sails.js, SQL, Ramda.js, Mocha, Chai, Sinon, HTML, SCSS,
            BEM
          </p>
          <a class="button" href="https://eats.seesparkbox.com/refresh">
            Redesigned Sparkeats Site
          </a>
        </div>

        <div class="wrapper project">
          <h1>Whatever</h1>
          <p>
            Whatever is an app for indecisive people. I created it as my
            capstone project for Actualize. It helps users decide what to do or
            where to eat by choosing a random event or a restaurant based on the
            given address, radius, and date/time restrictions. Users are also
            able to filter their search results by price, and view directions to
            their destination.
          </p>
          <p class="project__tech-stack">
            Vue.js, CSS, HTML, MapBox API, JavaScript, Ruby on Rails, Google
            Maps API, Ticketmaster API
          </p>
          <a class="button" href="https://whatever-app.herokuapp.com/">
            Whatever Site
          </a>
        </div>

        <div class="wrapper project">
          <h1>Responsive Grid</h1>
          <p>
            As part of the Full Stack Apprenticeship at Sparkbox, I collaborated
            with a designer to bring their mockup to life, creating an
            accessible card with semantic HTML and BEM naming conventions.
          </p>
          <p class="project__tech-stack">HTML, CSS, SCSS, BEM</p>
          <a
            class="button"
            href="https://codepen.io/susmitabhowmik/pen/OJVvxBP"
          >
            Responsive Grid Codepen
          </a>
        </div>

        <div class="wrapper project">
          <h1>Ant vs. Doodlebug</h1>
          <p>
            This was a project I created for a homework assignment through NYU.
            It is a predator-prey simulation created in C++ to showcase my
            understanding of object-oriented programming and pointers.
          </p>
          <p class="project__tech-stack">C++</p>
          <a
            class="button"
            href="https://github.com/susmitabhowmik/ant-vs-doodlebug"
          >
            Ant vs. Doodlebug GitHub
          </a>
        </div>

        <div class="wrapper project">
          <h1>UFO Game</h1>
          <p>
            This is a terminal based game written in Ruby. Aliens are invading
            and it is up to you to stop them by guessing the codeword in time!
          </p>
          <p class="project__tech-stack">Ruby, RSpec</p>
          <a class="button" href="https://github.com/susmitabhowmik/UFO_Game">
            UFO Game GitHub
          </a>
        </div>
      </div>
    </div>
  </Layout>
)
