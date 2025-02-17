<template>
  <nav class="navbar">
    <ul class="nav-list">
      <li class="nav-item">
        <router-link to="/cv" class="nav-link">CV</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/about-me" class="nav-link">About Me</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/projects" class="nav-link">Projects</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'NavbarView',
};
</script>

<style scoped>
.navbar {
  background-color: #d1f9d1;
  padding: 1em 0; /* Removed horizontal padding */
  border: 2px solid #176219;
  background-color: rgb(197, 238, 221);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
}

.nav-list {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center; /* Center the items horizontally */
  align-items: center;
}

.nav-item {
  margin: 0 2em; /* Added more space between items */
}

.nav-link {
  text-decoration: none;
  color: rgb(18, 91, 72);
  font-size: 1.2em;
  font-weight: bold;
}

.nav-link:hover {
  color: #5d5d5d;
  background-color: #91f4b5;
  border-radius: 50px;
  padding: 0.5em 1em;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
</style>
