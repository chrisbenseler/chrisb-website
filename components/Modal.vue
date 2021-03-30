<template>
  <div class="modal-backdrop">
    <div class="modal">
      <header class="modal-header">
        <slot name="header">
          This is the default title!
        </slot>
        <button type="button" class="btn-close" @click="close">
          x
        </button>
      </header>

      <section class="modal-body">
        <slot name="body">
          This is the default body!
        </slot>
      </section>

      <footer class="modal-footer">
        <slot name="footer"> </slot>
        <button type="button" @click="close">
          <i class="fa fa-close"></i> Close
        </button>
      </footer>
    </div>
  </div>
</template>

<style scoped>
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background: #ffffff;
  box-sizing: border-box;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  max-height: 100%;
}

.modal-header,
.modal-footer {
  padding: 1rem;
  display: flex;
}

.modal-header {
  position: relative;
  border-bottom: 1px solid #eeeeee;
  color: var(--second-color);
  justify-content: flex-start;
}
.modal-header i {
  margin-right: 1rem;
}
.modal-footer {
  border-top: 1px solid #eeeeee;
  flex-direction: column;
  justify-content: flex-end;
}

.modal-body {
  position: relative;
  padding: 2rem;
}

.btn-close {
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  font-size: 1.5rem;
  padding: 0;
  margin-right: 1rem;
  margin-top: 0.5rem;
  cursor: pointer;
  font-weight: bold;
  color: var(--second-color);
  background: transparent;
}
.btn-close:hover {
  opacity: 0.8;
}

.modal-footer button {
  color: white;
  background: var(--second-color);
  border: 1px solid var(--first-color);
  border-radius: 2px;
  padding: 0.5rem 0;
}
ul.default-list {
  list-style-type: disc;
  margin-left: 2rem;
  line-height: 1.5rem;
}
span.badge {
  color: white;
  background: var(--second-color);
  border: 1px solid var(--first-color);
  border-radius: 1rem;
  padding: 0.1rem 0.5rem;
  font-size: 0.6rem;
}
</style>

<script>
export default {
  name: "Modal",
  methods: {
    close() {
      this.$emit("close");
    }
  }
};
</script>
