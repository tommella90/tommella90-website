<template>
	<div class="projects-home">
		<NavbarView/>
		<ParticlesBackgroundView/>
	</div>
	<h1 class="projects-home-title">Projects</h1>
	<h2 class="projects-home">WIP</h2>
</template>



<script>
import NavbarView from '../NavbarView.vue';
import ParticlesBackgroundView from '../ParticlesBackgroundView.vue';
  
export default {
	name: 'ProjectsHome-View',
	components: {
		NavbarView,
		ParticlesBackgroundView
	}
}
</script>

<style scoped>

.projects-home-title {
	font-size: 2em;
	padding: 1em;
	margin-top: 20px;
	color: #333;
	margin: 20px;
}

.projects-home {
	font-size: 1em;
	color: #333;
	margin: 20px;
	}
</style>
  