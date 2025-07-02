<template>
  <div class="art-home">
    <NavbarView />
    <ParticlesBackgroundView />
    <h1 class="art-home-title">ART HOME</h1>
    <div class="art-image-container">
      <h2>CATEGORIES</h2>
      <div class="art-row">
        <div class="art-column">
			<p class="art-label">NERDY ARTWORKS</p>
			<router-link :to="{ name: 'Nerdy-View' }">
            <img
              :src="nerdyImage"
              alt="Nerdy Artworks"
              class="art-image"
            />
          </router-link>
        </div>

        <div class="art-column">
			<p class="art-label">GEOMETRIC ARTWORKS</p>
			<router-link :to="{ name: 'GeometricWorlds-View' }">
				<img
				:src="geometricImage"
				alt="Geometric Worlds Artworks"
				class="art-image"
				/>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import NavbarView from '../NavbarView.vue';
import ParticlesBackgroundView from '../ParticlesBackgroundView.vue';

export default {
  name: 'ArtHome-View',
  components: {
    NavbarView,
    ParticlesBackgroundView
  },
	data() {
	return {
		nerdyImage: 'https://tommella-website-storage.s3.eu-central-003.backblazeb2.com/art/geometric-worlds/rainbowHole.jpeg',
		geometricImage: 'https://tommella-website-storage.s3.eu-central-003.backblazeb2.com/art/nerdy/headache.jpeg'
	};
	}
}
</script>

<style scoped>
.art-home-title {
  text-align: center;
  color: #176219;
  font-size: 2.5em;
  margin-top: 100px;
}

.art-image-container {
  padding: 20px;
  text-align: center;
}

.art-row {
  display: flex;
  justify-content: center;
  gap: 40px; /* space between columns */
  flex-wrap: wrap; /* responsive on small screens */
}

.art-column {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.art-image {
  width: 500px;
  height: 400px;
  object-fit: contain; /* crop to fill box, no distortion */
  border-radius: 12px;
  background-color: rgba(255, 255, 255, 0.5);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); /* optional: for polish */
}

.art-label {
  margin-top: 12px;
  font-size: 1.2em;
  font-weight: bold;
  color: #333;
}
</style>


