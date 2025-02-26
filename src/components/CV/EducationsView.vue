<template>
  <div class="education">
    <h1>EDUCATION</h1>
    <ul v-if="filteredEducations.length">
      <li v-for="education in filteredEducations" :key="education.id" class="education-item">
        <div class="education-body">
          <div class="education-image">
            <img 
              :src="education.image_url"
              :alt="education.title"
              class="education-image"
            />
          </div>
          <div class="education-content">
            <div class="education-header">
              <h2>{{ education.title }} - {{ education.institution }}</h2>
              <p>
                <span class="location">{{ education.location }}</span> - 
                {{ education.start_date }} - {{ education.end_date || 'Present' }}
              </p>
            </div>
            <ul>
              <li v-for="(description, index) in education.descriptions" :key="index" v-html="description.description">
              </li>
            </ul>
          </div>
        </div>
      </li>
    </ul>
    <p v-else>No education available.</p>
    <button v-if="education.length > 3" @click="toggleShowAll">{{ showAll ? 'Show Less' : 'Show All' }}</button>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';

const education = ref([]);
const showAll = ref(false);

const fetchEducation = async () => {
  try {
    const response = await fetch('https://tommella-general-storage-83d44de1134b.herokuapp.com/apps/cv/education/');
    education.value = await response.json();
  } catch (error) {
    console.error('Error fetching education data:', error);
  }
};

const filteredEducations = computed(() => {
  return showAll.value ? education.value : education.value.slice(0, 3);
});

const toggleShowAll = () => {
  showAll.value = !showAll.value;
};

onMounted(fetchEducation);
</script>

<style scoped>
.education {
  margin: 0 10%;
  padding: 1em;
}
  
.education-item {
  display: flex;
  align-items: flex-start;
  margin-bottom: 1em;
}

.education-body {
  display: flex;
  align-items: flex-start;
  gap: 1em;
  margin-bottom: 1em;
  width: 100%;
}

.education-image {
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 4px;
  border: 1px solid #ddd;
  flex-shrink: 0;
}

.education-content {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.education-header {
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
