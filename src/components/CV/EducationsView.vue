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

          <!-- Wrap the education content -->
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
    <button v-if="!showAll && educations.length > 3" @click="showAll = true">Show All</button>
  </div>
</template>


  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        educations: [],
        showAll: false,
      };
    },
    created() {
      this.fetchEducations();
    },
    computed: {
      filteredEducations() {
        return this.showAll ? this.educations : this.educations.slice(0, 3);
      }
    },
    methods: {
      async fetchEducations() {
        console.log('VUE_APP_API_URL:', process.env.VUE_APP_API_URL);

        try {
          const response = await axios.get("https://tommella-general-storage-83d44de1134b.herokuapp.com/education");
          this.educations = response.data;
        } catch (error) {
          console.error(error);
        }
      }
    }
  };
  </script>
  

  <style scoped>
.education {
  margin: 0 10%;
  padding: 1em;
  }
  
.education-item {
  display: flex; /* Create a flex container */
  align-items: flex-start; /* Align items at the start (top-aligned) */
  margin-bottom: 1em;
}

/* Flex container for image and content */
.education-body {
  display: flex; /* Horizontal alignment of child elements */
  align-items: flex-start; /* Align items to the top */
  gap: 1em; /* Space between the image and text */
  margin-bottom: 1em; /* Space between experience items */
  width: 100%; /* Ensure the container takes the full width */
}

.education-image {
  width: 150px; /* Set a fixed width for the image */
  height: 150px; /* Set a fixed height for the image box */
  object-fit: cover; /* Crop the image to fit the box while maintaining aspect ratio */
  border-radius: 4px; /* Optional: rounded corners */
  border: 1px solid #ddd; /* Optional: border around the image */
  flex-shrink: 0; /* Prevent the image from shrinking */
}

/* Text Content Styling */
.education-content {
  flex-grow: 1; /* Allow the text content to take remaining space */
  display: flex;
  flex-direction: column; /* Stack the content vertically */
  justify-content: flex-start; /* Align content to the top */
}

/* Header Styling */
.education-header {
  margin-bottom: 0.5em; /* Space below the header */
}

  
.location {
  font-weight: bold;
}
  
/* Main title styling */
/* Add list styles for descriptions */
ul {
  list-style-type: disc;
  margin-left: 1em;
}

/* List item styling for experience entries */
li {
  margin-bottom: 0.5em;
  padding: 0.5em;
  border: 1px solid #ddd;
  border-radius: 4px;
  text-align: left;
}

/* Sub-list styling for descriptions */
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

/* Sub-title styling */
h2 {
  font-size: 1.4em;
  margin-bottom: 0.25em;
  text-align: left;
}

/* Paragraph styling */
p {
  margin: 0.25em 0;
  text-align: left;
}

/* Button styling */
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
