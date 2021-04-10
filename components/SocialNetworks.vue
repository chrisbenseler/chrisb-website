<template>
  <article id="social-networks">
    <h4><i class="fas fa-fire-alt"></i>Find me</h4>

    <div>
      <a
        v-for="item in networks"
        :key="item.url"
        rel="noopener"
        target="_blank"
        :href="item.url"
      >
        <i :class="item.icon"></i>
        /{{ item.label }}
      </a>
    </div>
  </article>
</template>

<script>
export default {
  data() {
    return {
      networks: [
        {
          url: "https://github.com/chrisbenseler",
          title: "GitHub",
          icon: "fab fa-github",
          label: "/chrisbenseler"
        },
        {
          url: "https://twitter.com/chrisbenseler",
          title: "Twitter",
          icon: "fab fa-twitter",
          label: "@chrisbenseler"
        },
        {
          url: "https://medium.com/@chrisbenseler",
          title: "Medium",
          icon: "fab fa-medium",
          label: "/@chrisbenseler"
        },
        {
          url: "https://stackoverflow.com/users/640053/christian-benseler",
          title: "Stack Overflow",
          icon: "fab fa-stack-overflow",
          label: "/users/640053/christian-benseler"
        },
        {
          url: "https://instagram.com/chrisbenseler",
          title: "Instagram",
          icon: "fab fa-instagram",
          label: "/chrisbenseler"
        },
        {
          url: "https://www.linkedin.com/in/christian-benseler-84732334",
          title: "Linked In",
          icon: "fab fa-linkedin-in",
          label: "/in/christian-benseler-84732334"
        }
      ]
    };
  }
};
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
