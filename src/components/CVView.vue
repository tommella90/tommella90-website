<template>
	<div class="cv">
		<NavbarView/>
		<AboutView/>
        <ExperiencesView/>
        <EducationsView/>
        <ParticlesBackgroundView/>
    </div>
</template>
     
<script>
	import NavbarView from './NavbarView.vue';
	import AboutView from './CV/AboutView.vue';
	import EducationsView from './CV/EducationsView.vue';
	import ExperiencesView from './CV/ExperiencesView.vue';
	import ParticlesBackgroundView from './ParticlesBackgroundView.vue';

	export default {
		name: 'CV-View',
		components: {
			NavbarView,
			AboutView,
			ExperiencesView,
			EducationsView,
			ParticlesBackgroundView,
		}
	}
</script>

<style scoped>
.cv {
    padding: 20px;
}

.cv p {
    color: blue;
    font-size: 18px;
}
</style>
