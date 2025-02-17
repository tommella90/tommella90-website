<template>
    <div>
        <h1>Home Page</h1>
		<NavbarView/>
    </div>
</template>

<script>
	import NavbarView from './NavbarView.vue';
	export default {
		name: 'Home-View',
		components: {
			NavbarView
		}
	}
</script>
