<template>
  <section id="container">
        <header class="outline">
            <h1>Christian Benseler</h1>
            <h2>Fullstack developer, passionate sports practitioner, 80/90's rock fan</h2>
        </header>

        <article id="overview">
            <img src="face.jpeg" alt="Christian Benseler" />

            <div>
                <p>
                    Hi! I'm a fullstack developer - based in São Paulo, Brazil - and I have been working with software
                    development focused on internet since 2005.
                </p>
                <p>
                    For me, technology is one of many tools used to achieve a greater goal: deliver a good user
                    experience through software. I also like to take part in the research & discovery of a new product
                    or service,
                    in its architecture process and also in its mantainence and evolution.</p>
                <p>In all those years I have worked with many technologies from front and back end and also many
                    other correlated, such as those for devOps.</p>
                <p>
                    I am also passionate about sports: love to watch and practice, specially running.
                </p>
            </div>
        </article>

        <article id="social-networks">

            <h4>
                <i class="far fa-address-card"></i>Find me
            </h4>

            <div>
                <a href="https://github.com/chrisbenseler" rel="noopener" target="_blank" title="GitHub">
                    <i class="fab fa-github"></i>
                    /chrisbenseler
                </a>

                <a href="https://twitter.com/chrisbenseler" rel="noopener" target="_blank" title="Twitter">
                    <i class="fab fa-twitter"></i>
                    /chrisbenseler
                </a>

                <a href="https://medium.com/@chrisbenseler" rel="noopener" target="_blank" title="Medium">
                    <i class="fab fa-medium"></i>
                    /@chrisbenseler
                </a>

                <a href="https://instagram.com/chrisbenseler" rel="noopener" target="_blank" title="Instagram">
                    <i class="fab fa-stack-overflow"></i>
                    /users/640053/christian-benseler
                </a>

                <a href="https://instagram.com/chrisbenseler" rel="noopener" target="_blank" title="Instagram">
                    <i class="fab fa-instagram"></i>
                    /chrisbenseler
                </a>

                <a href="https://www.linkedin.com/in/christian-benseler-84732334/" rel="noopener" target="_blank"
                    title="Linked In">
                    <i class="fab fa-linkedin-in"></i>
                    /christian-benseler-84732334
                </a>
            </div>

        </article>

        <article id="comingsoon" class="outline">
            <h3>Want more? Coming soon...</h3>
        </article>

        <article id="runningquote">
            <blockquote>
                "If you don’t have answers to your problems after a four-hour run, you ain’t getting them. <span> -
                    Christopher McDougall</span>"
            </blockquote>
        </article>

    </section>
</template>

<script>
export default {
  mounted() {
    window.dataLayer = window.dataLayer || [];
        function gtag() { dataLayer.push(arguments); }
        gtag('js', new Date());

        gtag('config', 'G-Q0BYEJF81T');
  }
}
</script>

<style>

* {
  font-family: "Lexend", sans-serif;
  font-size: 16px;
  box-sizing: border-box;
}

:root {
  --first-color: #051e3e;
  --second-color: #251e3e;
  --third-color: #451e3e;
  --fourth-color: #651e3e;
  --fifth-color: #851e3e;
}

section#container {
  font-family: "Lexend", sans-serif;
  width: 768px;
  margin: 1rem auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 1rem;
  -webkit-box-shadow: -2px 0px 10px 0px rgba(0, 0, 0, 0.33);
  -moz-box-shadow: -2px 0px 10px 0px rgba(0, 0, 0, 0.33);
  box-shadow: -2px 0px 10px 0px rgba(0, 0, 0, 0.33);
}

header {
  text-align: center;
}

header h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

article#overview {
  margin: 2rem;
  display: flex;
  flex-direction: row;
  align-items: center;
}
article#overview img {
  width: 12rem;
  height: 12rem;
  border-radius: 6rem;
}
article#overview div {
  color: var(--third-color);
  margin-left: 2rem;
}
article#overview div p {
  line-height: 1.3rem;
  margin-top: 1rem;
}

.outline {
  background-color: var(--third-color);
  padding: 1rem 2rem;
  color: white;
}

#comingsoon {
  text-align: center;
}
#runningquote {
  margin-top: 5rem;
}
#runningquote blockquote {
  color: var(--second-color);
  text-align: center;
  font-style: italic;
  font-size: 1.2rem;
}
#runningquote span {
  font-size: 0.8rem;
  color: #999999;
  margin-top: 1rem;
}

#social-networks {
  margin: 2rem 0 1rem;
}
#social-networks h4 {
    font-size: 2rem;
    color: var(--fourth-color);
    margin-left: 1rem;
    border-bottom: 1px solid var(--fourth-color);
    padding-bottom: 0.5rem;
}
#social-networks h4 i {
    margin-right: 1rem;
}
#social-networks div {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 2rem 0 1rem;
  flex-wrap: wrap;
}
#social-networks a {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--third-color);
  text-decoration: none;
  font-size: 0.7rem;
  width: calc(100% / 3);
  margin-bottom: 2rem;
}
#social-networks a:hover {
  color: var(--fifth-color);
}
#social-networks a i {
  font-size: 2rem;
  margin-bottom: 1rem;
}

@media (max-width: 768px) {
  *,
  html {
    font-size: 14px;
  }
  section#container {
    margin: 0;
    width: 100%;
  }
  article#overview img {
    width: 6rem;
    height: 6rem;
    border-radius: 3rem;
  }
  article#overview {
    flex-direction: column;
  }
  article#overview div {
    margin-left: 0;
  }

  #social-networks a {
    width: calc(100% / 2);
  }
}

</style>
