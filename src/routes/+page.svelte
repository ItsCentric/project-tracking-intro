<script>
	import HeroSection from "$lib/HeroSection.svelte";
	import Navigation from "$lib/Navigation.svelte";

</script>

<main class='h-screen flex flex-col pb-24'>
	<div class='flex-initial'>
		<Navigation />
	</div>
	<div class='flex-1'>
		<HeroSection />
	</div>
</main>