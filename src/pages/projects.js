import Layout from "../components/layout"
import React from "react"
import SEO from "../components/seo"
import ArrowSVG from "../images/arrow.svg"

export default () => (
  <Layout>
    <SEO title="Susmita Bhowmik" />
    <div class="main-content">
      <div class="project-grid">
        <div class="wrapper project">
          <h3>Sparkeats</h3>
          <p>
            Sparkeats is a restaurant review site where Sparkboxers review
            restaurants. During my time at Sparkbox, I worked as part of a team
            utilizing agile methodology to inplement a redesign for the site on
            the frontend. I also worked on the backend to refactor legacy code,
            write tests, and fix bugs.
          </p>
          <p>
            Node.js, Sails.js, SQL, Ramda.js, Mocha, Chai, Sinon, HTML, SCSS,
            BEM
          </p>
          <a class="button" href="https://eats.seesparkbox.com/refresh">
            <img
              alt="View responsive grid project"
              class="project__image"
              src={ArrowSVG}
            ></img>
            View Project
          </a>
        </div>

        <div class="wrapper project">
          <h3>Whatever</h3>
          <p>
            Whatever is an app for indecisive people. I created it as my
            capstone project for Actualize. It helps users decide what to do or
            where to eat by choosing a random event or a restaurant based on the
            given address address, radius, and date/time restrictions. Users are
            also able to filter their search results by price, and view
            directions to their destination.
          </p>
          <p>
            Vue.js, CSS, HTMl, MapBox API, JavaScript, Ruby on Rails, Google
            Maps API, Ticketmaster API
          </p>
          <a class="button" href="https://whatever-app.herokuapp.com/">
            <img
              alt="View responsive grid project"
              class="project__image"
              src={ArrowSVG}
            ></img>
            View Project
          </a>
        </div>

        <div class="wrapper project">
          <h3>Responsive Grid</h3>
          <p>
            As part of the Full Stack Apprenticeship at Sparkbox, I collaborated
            with a designer to bring their mockup to life, creating an
            accessible card with semantic HTML and BEM naming conventions.
          </p>
          <p>HTML, CSS, SCSS, BEM</p>
          <a
            class="button"
            href="https://codepen.io/susmitabhowmik/pen/OJVvxBP"
          >
            <img
              alt="View responsive grid project"
              class="project__image"
              src={ArrowSVG}
            ></img>
            View Project
          </a>
        </div>

        <div class="wrapper project">
          <h3>Ant vs. Doodlebug</h3>
          <p>
            This was a project I created for a homework assignment through NYU.
            It is a predator-prey simulation created in C++ to showcase my
            understanding of object-oriented programming and pointers.
          </p>
          <p>C++</p>
          <a
            class="button"
            href="https://github.com/susmitabhowmik/ant-vs-doodlebug"
          >
            <img
              alt="View responsive grid project"
              class="project__image"
              src={ArrowSVG}
            ></img>
            View Project
          </a>
        </div>

        <div class="wrapper project">
          <h3>UFO Game</h3>
          <p>
            This is a terminal based game written in Ruby. Aliens are invading
            and it is up to you to stop them by guessing the codeword in time!
          </p>
          <p>Ruby, RSpec</p>
          <a class="button" href="https://github.com/susmitabhowmik/UFO_Game y">
            <img
              alt="View responsive grid project"
              class="project__image"
              src={ArrowSVG}
            ></img>
            View Project
          </a>
        </div>
      </div>
    </div>
  </Layout>
)
