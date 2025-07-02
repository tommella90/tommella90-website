<template>
  <nav :class="['navbar', { rainbow }]">
    <ul class="nav-list">
      <li class="nav-item">
        <router-link to="/cv" class="nav-link">CV</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/about-me" class="nav-link">About Me</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/art" class="nav-link">My art</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'NavbarView',
  props: {
    rainbow: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style scoped>
.navbar {
  background-color: rgb(197, 238, 221);
  padding: 1em 0;
  border: 2px solid #176219;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  transition: background 0.5s ease;
}

.nav-list {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.nav-item {
  margin: 0 2em;
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

/* Rainbow style toggle */
.rainbow {
  background: linear-gradient(90deg, red, orange, yellow, green, blue, indigo, violet);
  background-size: 600% 100%;
  animation: rainbowMove 10s linear infinite;
  border-color: transparent; /* optional to remove border */
}

@keyframes rainbowMove {
  0% {
    background-position: 0% 0%;
  }
  100% {
    background-position: 100% 0%;
  }
}
</style>
