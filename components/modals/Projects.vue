<template>
  <div>
    <Modal v-show="visible" @close="closeModal">
      <template v-slot:header>
        <i class="fas fa-project-diagram"></i> Projects
      </template>
      <template v-slot:body>
        <ul class="default-list">
          <li>
            <h5>BV Open</h5>
            <p>
              Developer's Portal; through it, developers can access the bank's
              open APIs. I have worked mainly on the frontend (Angular) and
              integration/architecture between the portal and several services
              (AIP Gateway, BFF, MFA providers).
            </p>
            <span class="badge">banco BV</span>
            <a
              href="https://www.bvopen.com.br/"
              class="link-project"
              target="_blank"
              rel="noopener"
              title="BV Open"
            >
              <i class="fas fa-link"></i> See
            </a>
          </li>

          <li>
            <h5>Infográfico - Os 75 melhores brinquedos do Ano</h5>
            <p>
              Frontend development (html5/css3/js) of infographic "Os 75
              melhores brinquedos do ano" for Revista Crescer
            </p>
            <span class="badge">Freelancer</span>
            <a
              href="https://revistacrescer.globo.com/Infograficos/Melhores-brinquedos/noticia/2014/08/os-75-melhores-brinquedos-do-ano-2014.html"
              class="link-project"
              target="_blank"
              rel="noopener"
              title="Infográfico - Os 75 melhores brinquedos do Ano"
            >
              <i class="fas fa-link"></i> See
            </a>
          </li>

          <li>
            <h5>Wiki-Glossário</h5>
            <p>Ruby on Rails webapp.</p>
            <span class="badge">MMCafé</span>
            <a
              href="https://www.mmcafe.com.br/glossario/"
              class="link-project"
              target="_blank"
              rel="noopener"
              title="Wiki-Glossário"
            >
              <i class="fas fa-link"></i> See
            </a>
          </li>

          <li>
            <h5>Snake game</h5>
            <p>Plain html + css + js</p>
            <span class="badge">Personal</span>
            <a
              href="https://chrisbenseler.github.io/snakeweb/"
              class="link-project"
              target="_blank"
              rel="noopener"
              title="Snake game"
            >
              <i class="fas fa-link"></i> See
            </a>
          </li>

          <li>
            <h5>Reserva de salas e equipamentos</h5>
            <p>Ruby on Rails webapp.</p>
            <span class="badge">MMCafé</span>
            <a
              href="https://www.mmcafe.com.br/reserva-de-salas-e-equipamentos/"
              class="link-project"
              target="_blank"
              rel="noopener"
              title="Reserva de salas e equipamentos"
            >
              <i class="fas fa-link"></i> See
            </a>
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
    Modal,
  },

  props: {
    visible: {
      type: Boolean,
      default: false,
    },
  },

  methods: {
    closeModal() {
      this.$emit("close");
    },
  },
};
</script>
