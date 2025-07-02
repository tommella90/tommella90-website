<template>
  <div>
    <NavbarView />
    <h1>GEOMETRIC ARTWORK</h1>

    <div class="art-grid">
      <div v-for="image in images" :key="image.id" class="art-card">
        <img
          :src="image.image_url"
          :alt="image.title"
          class="art-image"
          @click="openModal(image)"
        />
        <p class="art-title">{{ image.title }}</p>
      </div>
    </div>

    <!-- Modal for zoomed image -->
    <div v-if="selectedImage" class="modal" @click="closeModal">
      <div class="modal-content">
        <img :src="selectedImage.image_url" :alt="selectedImage.title" class="modal-image" />
      </div>
    </div>
  </div>
</template>

<script>
import NavbarView from '../../NavbarView.vue';

export default {
  name: 'GeometricWorldsView',
  components: {
    NavbarView
  },
  data() {
    return {
      images: [],
      selectedImage: null
    };
  },
  methods: {
    openModal(image) {
      this.selectedImage = image;
    },
    closeModal() {
      this.selectedImage = null;
    }
  },
  mounted() {
    fetch('https://tommella-general-storage-83d44de1134b.herokuapp.com/apps/art/artwork/')
      .then(response => response.json())
      .then(data => {
        this.images = data.filter(image => image.category === 'geometric_worlds');
      })
      .catch(error => {
        console.error('Failed to load images:', error);
      });
  }
};
</script>

<style scoped>
h1 {
  text-align: center;
  color: #000000;
  font-size: 2em;
  margin-top: 50px;
}

.art-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
  padding: 20px;
}

.art-card {
  text-align: center;
  margin: 0 auto;
}

.art-image {
  width: 100%;
  height: auto;
  object-fit: contain;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  cursor: pointer;
}

.art-title {
  margin-top: 10px;
  font-weight: bold;
}

/* Modal styles */
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  max-width: 95%;
  max-height: 90%;
}

.modal-image {
  max-width: 100%;
  max-height: 70vh;
  display: block;
  margin: auto;
}

/* Responsive adjustments */
@media (min-width: 768px) {
  .art-card {
    width: 300px;
  }

  .art-image {
    height: 200px;
  }

  h1 {
    font-size: 2.5em;
    margin-top: 100px;
  }
}

@media (max-width: 767px) {
  .art-card {
    width: 100%;
    max-width: 300px;
  }

  .art-image {
    height: auto;
  }
}
</style>
