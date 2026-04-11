<template>
  <div>
    <Modal v-show="visible" @close="closeModal">
      <template v-slot:header>
        <i class="fa fa-chalkboard-teacher"></i> Courses
      </template>
      <template v-slot:body>
        <ul class="default-list">
          <li>
            AWS Serverless APIs & Apps - A Complete Introduction
            <span class="badge">Udemy</span>
          </li>
          <li>Borland C++ Builder <span class="badge">Senai</span></li>
          <li>Dart - Beginners Course <span class="badge">Udemy</span></li>
          <li>
            Desenvolvimento Ágil Ruby on Rails 3
            <span class="badge">Caelum</span> Course numberRR-71
          </li>
          <li>
            Developing Applications with GCP: App Deployment, Debugging, and
            Performance <span class="badge">Coursera</span>
          </li>
          <li>
            Developing Applications with GCP: Getting Started With Application
            Development <span class="badge">Coursera</span>
          </li>
          <li>
            Developing Applications with GCP: Securing and Integrating
            Components of your Application <span class="badge">Coursera</span>
          </li>
          <li>Flutter - Advanced <span class="badge">Udemy</span></li>
          <li>Flutter - Intermediate <span class="badge">Udemy</span></li>
          <li>
            Google Cloud Platform Fundamentals: Core Infrastructure
            <span class="badge">Coursera</span>
          </li>
          <li>
            GraphQL Apollo Server with Node.js, MongoDB
            <span class="badge">Udemy</span>
          </li>
          <li>
            How to design & develop REST microservices in Golang / Go
            <span class="badge">Udemy</span>
          </li>
          <li>
            JAVA e Orientação a Objetos <span class="badge">Caelum</span> Course
            numberFJ-11
          </li>
          <li>
            Mastering Visual Basic 6.0 Development
            <span class="badge">KA Solutions</span>
          </li>
          <li>Modern Erlang for Beginners <span class="badge">Udemy</span></li>
          <li>Mongo DB : All About MongoDB <span class="badge">Udemy</span></li>
          <li>
            NestJS Zero to Hero - Modern TypeScript Back-end Development
            <span class="badge">Udemy</span>
          </li>
          <li>PHP Essentials <span class="badge">Senac</span></li>
          <li>React Styled Components <span class="badge">Udemy</span></li>
          <li>
            Redis Bootcamp for Beginners: Get Hands On with Redis 5
            <span class="badge">Udemy</span>
          </li>
          <li>
            Securing Applications in Node.js <span class="badge">Udemy</span>
          </li>
          <li>
            The Complete Flutter App Development Course for Android, iOS
            <span class="badge">Udemy</span>
          </li>
          <li>
            The Go Programming Language Tutorial - Volume 1
            <span class="badge">Udemy</span>
          </li>
          <li>
            Ultimate Kubernetes Fast-Track Beginner to Advanced
            <span class="badge">Udemy</span>
          </li>
        </ul>
      </template>
    </Modal>
  </div>
</template>

<script>
import Modal from "../Modal.vue";
export default {
  components: {
    Modal
  },

  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },

  methods: {
    closeModal() {
      this.$emit("close");
    }
  }
};
</script>
