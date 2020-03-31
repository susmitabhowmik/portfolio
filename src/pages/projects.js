import Layout from "../components/layout";
import React from "react";
import SEO from "../components/seo";
import whatever from "../images/whatever.jpg";

export default () => (
  <Layout>
    <SEO title="Susmita Bhowmik" />
    <div class="wrapper">
      <h2 class="projects__header">Projects</h2>
      <iframe class="project" scrolling="no" title="Responsive Layout Restaurant Card" src="https://codepen.io/susmitabhowmik/embed/OJVvxBP?height=263&theme-id=dark&default-tab=css,result&editable=true" frameborder="no" allowtransparency="true" allowfullscreen="true">
        See the Pen <a href='https://codepen.io/susmitabhowmik/pen/OJVvxBP'>Responsive Layout Restaurant Card</a> by Susmita Bhowmik
        (<a href='https://codepen.io/susmitabhowmik'>@susmitabhowmik</a>) on <a href='https://codepen.io'>CodePen</a>.
      </iframe>

      <div class="project">
        <div class="project__item">
          <img src={whatever}></img>
        </div>
        <div class="project__item project__item--desc">
          <h3>Description</h3>
          <p>Whatever is an app for indecisive people. Decide what to do or where to eat near you by typing in your address, distance you are willing to travel, and date/time restrictions. This app was created as my capstone project for Actualize.</p>
          <h4>Technology Used</h4>
          <p><span class="project__item--title">Front End:</span> Vue.js, CSS, HTMl, MapBox API, JavaScript </p>
          <p><span class="project__item--title">Back End:</span> Ruby on Rails, Google Maps API, Ticketmaster API, Eventbrite API</p>

        </div>
      </div>
    </div>
  </Layout >
);

