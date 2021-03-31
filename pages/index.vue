<template>
  <section id="container">
    <header class="outline">
      <h1>Christian Benseler</h1>
      <h2>
        Fullstack developer, passionate sports practitioner, 80/90's rock fan
      </h2>
    </header>

    <article id="overview">
      <img src="face.jpeg" alt="Christian Benseler" />

      <div>
        <p>
          Hi! I'm a fullstack developer - based in São Paulo, Brazil - and I
          have been working with software development focused on internet since
          2005.
        </p>
        <p>
          For me, technology is one of many tools used to achieve a greater
          goal: deliver a good user experience through software. I also like to
          take part in the research & discovery of a new product or service, in
          its architecture process and also in its mantainence and evolution.
        </p>
        <p>
          In all those years I have worked with many technologies from front and
          back end and also many other correlated, such as those for devOps.
        </p>
        <p>
          I am also passionate about sports: love to watch and practice,
          specially running.
        </p>
      </div>
    </article>

    <SocialNetworks />

    <Skills />

    <ProfessionalExp />

    <div id="actions">
      <button
        @click="
          () => {
            showModal('courses');
          }
        "
        title="Courses"
      >
        <i class="fa fa-chalkboard-teacher"></i> Courses
      </button>
      <button
        @click="
          () => {
            showModal('projects');
          }
        "
        title="Projects"
      >
        <i class="fas fa-project-diagram"></i> Projects
      </button>
    </div>

    <CoursesModal
      v-bind:visible="isModalVisible.courses"
      @close="
        () => {
          closeModal('courses');
        }
      "
    />
    <ProjectsModal
      v-bind:visible="isModalVisible.projects"
      @close="
        () => {
          closeModal('projects');
        }
      "
    />

    <article id="comingsoon" class="outline">
      <h3>Want more? Coming soon...</h3>
    </article>

    <article id="runningquote">
      <blockquote>
        "If you don’t have answers to your problems after a four-hour run, you
        ain’t getting them. <span> - Christopher McDougall</span>"
      </blockquote>
    </article>
  </section>
</template>

<script>
import SocialNetworks from "../components/SocialNetworks";
import Skills from "../components/Skills";
import ProfessionalExp from "../components/ProfessionalExp";
import CoursesModal from "../components/modals/Courses.vue";
import ProjectsModal from "../components/modals/Projects.vue";
export default {
  components: {
    SocialNetworks,
    Skills,
    ProfessionalExp,
    CoursesModal,
    ProjectsModal
  },
  data() {
    return {
      isModalVisible: {
        courses: false,
        projects: false
      }
    };
  },
  methods: {
    showModal(key) {
      this.isModalVisible[key] = true;
    },
    closeModal(key) {
      this.isModalVisible[key] = false;
    }
  },
  mounted() {
    if (
      window.location &&
      window.location.toString().indexOf("http://localhost") >= 0
    )
      return;
    window.dataLayer = window.dataLayer || [];

    function gtag() {
      dataLayer.push(arguments);
    }
    gtag("js", new Date());
    gtag("config", "G-Q0BYEJF81T");
  }
};
</script>

<style>
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
  margin-top: 2rem;
  text-align: center;
}
#runningquote {
  margin-top: 2rem;
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

#actions {
  padding: 2rem 1rem 0;
  border-top: 3px solid var(--second-color);
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
#actions button i {
  font-size: 1.5rem;
}
#actions button {
  cursor: pointer;
  border-color: var(--fourth-color);
  color: var(--fourth-color);
  font-size: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 4rem;
  width: 8rem;
  height: 8rem;
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
