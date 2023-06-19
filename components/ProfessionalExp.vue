<template>
  <section id="professionalexp">
    <h4><i class="fa fa-code-branch"></i>Professional Experience</h4>
    <article>
      <h5>Gympass</h5>

      <div>
        <h6>Software Engineer</h6>
        <span><i class="fa fa-calendar-alt"></i> Since <time datetime="2023-06">Jun 2023</time></span>
        <p>
          Corporate wellbeing platform 
        </p>
        <p>
          Software engineer in the Billing & Payment's team, focused on frontend.
        </p>
      </div>
    </article>

    <article>
      <h5>Farm Tech</h5>

      <div>
        <h6>Tech Lead - Frontend</h6>
       <span><i class="fa fa-calendar-alt"></i><time datetime="2021-04">Apr 2021</time>  to
          <time datetime="2023-05">Mai 2025</time></span>
        <p>
          Financial solutions for the Agribusiness' supply chain 
        </p>
        <p>
          Tech Lead of the frontend team.
        </p>
        <p>
          Main stack: VueJS
        </p>
      </div>
    </article>

    <article>
      <h5>banco BV</h5>

      <div>
        <h6>Fullstack Developer</h6>
        <span><i class="fa fa-calendar-alt"></i><time datetime="2018-07">Jul 2018</time>  to
          <time datetime="2021-04">Apr 2021</time></span>
        <p>
          Banco Votorantim (banco BV) is a mid-size bank from Brasil with strong
          presence in finance and loans.
        </p>
        <p>
          The main task as a full stack developer in the inovation laboratory is
          build, deploy and maintain web applications, both to integrate the
          bank environment with other companies/fintechs/partners and to serve
          internal areas.
        </p>
        <p>
          Main stack: Angular, Ionic, NodeJS and MongoDB.<br />
          Other technologies used and/or tested: Python, Ruby on Rails, React,
          Flutter.
        </p>
      </div>
    </article>

    <article>
      <h5>MMCafé</h5>

      <div>
        <h6>Frontend Engineer</h6>
        <span
          ><i class="fa fa-calendar-alt"></i> <time datetime="2010-01">Jan 2010</time> to
          <time datetime="2018-08">Jun 2018</time></span
        >
        <p>
          As a frontend engineer, my main task was to build, maintain, evolve
          and support the product, and also work with both product and UX team
          in the definitions related to the frontend of web projects.
        </p>
        <p>
          Main stack: Angular, Ionic, NodeJS, jQuery, Ruby on Rails, Velocity.<br />
          Other technologies: React, Vue, Java, PHP.
        </p>
      </div>

      <div>
        <h6>Frontend Developer</h6>
        <span
          ><i class="fa fa-calendar-alt"></i> <time datetime="2005-02">Feb 2005</time> to
          <time datetime="2010-01">Jan 2010</time></span
        >
        <p>
          As the senior frontend developer in the team, I was responsible for
          frontend from web applications (html/css/js) and also templates
          implementation. We were focused in performance, quality and
          maintainability, because the company built products with long life
          duration.
        </p>
      </div>
    </article>

    <article>
      <h5>Freelancer</h5>

      <div>
        <h6>Fullstack Developer</h6>
        <span><i class="fa fa-calendar-alt"></i> <time datetime="2007">2007</time> to
          <time datetime="2016">2016</time></span>
        <p>
          Fullstack developer; front and backend development for web projects.
        </p>
      </div>
    </article>

    <article>
      <h5>STS Print</h5>

      <div>
        <h6>Fullstack Developer</h6>
        <span><i class="fa fa-calendar-alt"></i> <time datetime="2003">2003</time> to
          <time datetime="2004">2004</time></span>
        <p>
          C++ Builder developer.
        </p>
      </div>
    </article>

  </section>
</template>

<script>
export default {
  components: {}
};
</script>

<style scoped>
#professionalexp {
  padding: 0 1rem;
}
h4 {
  font-size: 2rem;
  color: var(--fourth-color);
  border-bottom: 1px solid var(--fourth-color);
  padding-bottom: 0.5rem;
}
h4 i {
  margin-right: 1rem;
}
section#professionalexp {
    margin-top: 1rem;
}
section#professionalexp article {
    margin-left: 2rem;
    margin-top: 2rem;
    padding-bottom: 2rem;
    color: var(--first-color);
    border-bottom: 1px solid var(--first-color);
}
section#professionalexp article:last-child {
    border-bottom: none;
}
section#professionalexp article p {
    margin-top: 1rem;
}
h5 {
    font-size: 1.75rem;
    margin-bottom: 0.5rem;
}
h6 {
    font-size: 1.25rem;
    margin-top: 1rem;
}
span {
    font-size: 0.75rem;
}
</style>
