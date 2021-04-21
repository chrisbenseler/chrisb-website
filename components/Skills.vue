<template>
  <article id="skills">
    <h4><i class="fa fa-tools"></i>Skills</h4>

    <div>
      <div>
        <h5><i class="fa fa-desktop"></i>Frontend</h5>
        <ul>
          <li>Angular <SkillRate :rate="5" /></li>
          <li>HTML/CSS <SkillRate :rate="4" /></li>
          <li>jQuery <SkillRate :rate="5" /></li>
          <li>React <SkillRate :rate="3" /></li>
          <li>Vue <SkillRate :rate="3" /></li>
        </ul>
      </div>

      <div>
        <h5><i class="fa fa-cogs"></i>Backend</h5>
        <ul>
          <li>NodeJS <SkillRate :rate="5" /></li>
          <li>Go <SkillRate :rate="2" /></li>
          <li>PHP <SkillRate :rate="2" /></li>
          <li>Python <SkillRate :rate="2" /></li>
          <li>Ruby (on Rails)<SkillRate :rate="3" /></li>
        </ul>
      </div>

      <div>
        <h5><i class="fa fa-database"></i>Databases</h5>
        <ul>
          <li>Firebase <SkillRate :rate="3" /></li>
          <li>Mongo <SkillRate :rate="4" /></li>
          <li>MySQL <SkillRate :rate="3" /></li>
          <li>Postgree <SkillRate :rate="2" /></li>
          <li>SQL <SkillRate :rate="2" /></li>
        </ul>
      </div>

      <div>
        <h5><i class="fa fa-hammer"></i>Other</h5>
        <ul>
          <li>AWS <SkillRate :rate="3" /></li>
          <li>Docker <SkillRate :rate="4" /></li>
          <li>Flutter <SkillRate :rate="2" /></li>
          <li>Jenkins <SkillRate :rate="3" /></li>
          <li>Kubernetes <SkillRate :rate="1" /></li>
          <li>Linux <SkillRate :rate="3" /></li>
          <li>React Native <SkillRate :rate="1" /></li>
        </ul>
      </div>
    </div>
  </article>
</template>

<script>
import SkillRate from "./SkillRate";
export default {
  components: {
    SkillRate
  }
};
</script>

<style scoped>
#skills {
  padding: 0 1rem;
}
#skills h4 {
  font-size: 2rem;
  color: var(--fourth-color);
  border-bottom: 1px solid var(--fourth-color);
  padding-bottom: 0.5rem;
}
#skills h4 i {
  margin-right: 1rem;
}
#skills > div {
  display: grid;
  grid-template-columns: 50% 50%;
  color: var(--fifth-color);
}
#skills > div > div:nth-child(2n) {
  padding-left: 2rem;
}
#skills > div > div:nth-child(2n + 1) {
  padding-right: 2rem;
}
#skills > div > div h5 {
  margin: 2rem 0 1rem;
  font-size: 1.5rem;
}
#skills > div > div h5 i {
  margin-right: 1rem;
}
ul li {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 0.75rem;
}
@media (max-width: 768px) {
  #skills > div {
    display: flex;
    flex-direction: column;
  }
  #skills > div > div:nth-child(2n),
  #skills > div > div:nth-child(2n + 1) {
    padding: 0;
  }
}
</style>
