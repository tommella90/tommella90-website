<template>
  <div class="experience">
    <h1>EXPERIENCES</h1>
    <ul v-if="filteredexperiences.length">
      <li v-for="experience in filteredexperiences" :key="experience.id" class="experience-item">
        <div class="experience-body">
          <div class="experience-image">
            <img 
              :src="experience.image_url"
              :alt="experience.title"
              class="experience-image"
            />
          </div>
          <div class="experience-content">
            <div class="experience-header">
              <h2>{{ experience.title }} - {{ experience.institution }}</h2>
              <p>
                <span class="location">{{ experience.location }}</span> - 
                {{ experience.start_date }} - {{ experience.end_date || 'Present' }}
              </p>
            </div>
            <ul>
              <li v-for="(description, index) in experience.descriptions" :key="index" v-html="description.description">
              </li>
            </ul>
          </div>
        </div>
      </li>
    </ul>
    <p v-else>No experience available.</p>
    <button v-if="experience.length > 3" @click="toggleShowAll">{{ showAll ? 'Show Less' : 'Show All' }}</button>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';

const experience = ref([]);
const showAll = ref(false);

const fetchexperience = async () => {
  try {
    const response = await fetch('https://tommella-general-storage-83d44de1134b.herokuapp.com/apps/cv/experience/');
    experience.value = await response.json();
  } catch (error) {
    console.error('Error fetching experience data:', error);
  }
};

const filteredexperiences = computed(() => {
  return showAll.value ? experience.value : experience.value.slice(0, 3);
});

const toggleShowAll = () => {
  showAll.value = !showAll.value;
};

onMounted(fetchexperience);
</script>

<style scoped>
.experience {
  margin: 0 10%;
  padding: 1em;
}
  
.experience-item {
  display: flex;
  align-items: flex-start;
  margin-bottom: 1em;
}

.experience-body {
  display: flex;
  align-items: flex-start;
  gap: 1em;
  margin-bottom: 1em;
  width: 100%;
}

.experience-image {
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 4px;
  border: 1px solid #ddd;
  flex-shrink: 0;
}

.experience-content {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.experience-header {
  margin-bottom: 0.5em;
}
  
.location {
  font-weight: bold;
}
  
ul {
  list-style-type: disc;
  margin-left: 1em;
}

li {
  margin-bottom: 0.5em;
  padding: 0.5em;
  border: 1px solid #ddd;
  border-radius: 4px;
  text-align: left;
}

li ul {
  list-style-type: disc;
  margin-left: 1em;
  padding: 0;
}

li ul li {
  margin-bottom: 0.25em;
  border: none;
  padding: 0;
}

h2 {
  font-size: 1.4em;
  margin-bottom: 0.25em;
  text-align: left;
}

p {
  margin: 0.25em 0;
  text-align: left;
}

button {
  margin-top: 0.5em;
  padding: 0.5em 1em;
  background-color: #ced9e6;
  color: rgb(0, 0, 0);
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9em;
}

button:hover {
  background-color: #fbfbfb;
}
</style>
