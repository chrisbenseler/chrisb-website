<template>
  <article id="social-networks">
    <h4><i class="fas fa-fire-alt"></i>Find me</h4>

    <div>
      <a
        href="https://github.com/chrisbenseler"
        rel="noopener"
        target="_blank"
        title="GitHub"
      >
        <i class="fab fa-github"></i>
        /chrisbenseler
      </a>

      <a
        href="https://twitter.com/chrisbenseler"
        rel="noopener"
        target="_blank"
        title="Twitter"
      >
        <i class="fab fa-twitter"></i>
        /chrisbenseler
      </a>

      <a
        href="https://medium.com/@chrisbenseler"
        rel="noopener"
        target="_blank"
        title="Medium"
      >
        <i class="fab fa-medium"></i>
        /@chrisbenseler
      </a>

      <a
        href="https://instagram.com/chrisbenseler"
        rel="noopener"
        target="_blank"
        title="Instagram"
      >
        <i class="fab fa-stack-overflow"></i>
        /users/640053/christian-benseler
      </a>

      <a
        href="https://instagram.com/chrisbenseler"
        rel="noopener"
        target="_blank"
        title="Instagram"
      >
        <i class="fab fa-instagram"></i>
        /chrisbenseler
      </a>

      <a
        href="https://www.linkedin.com/in/christian-benseler-84732334/"
        rel="noopener"
        target="_blank"
        title="Linked In"
      >
        <i class="fab fa-linkedin-in"></i>
        /christian-benseler-84732334
      </a>
    </div>
  </article>
</template>

<script>
export default {};
</script>

<style scoped>
#social-networks {
  margin: 2rem 0 1rem;
  padding: 0 1rem;
}
#social-networks h4 {
  font-size: 2rem;
  color: var(--fourth-color);
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
  #social-networks a {
    width: calc(100% / 2);
  }
}
</style>
