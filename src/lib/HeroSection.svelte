<script>
	import Badge from "./Badge.svelte";
	import Button from "./Button.svelte";

</script>

<main class='overflow-hidden ml-6 h-full'>
    <div class='absolute top-0 right-0 w-2/4 h-2/4 bg-grayBlue-100 rounded-bl-3xl -z-10'></div>
    <div class='my-6 mb-16 relative w-full'>
        <img src='illustration-devices.svg' alt='phone and laptop illustration' class='h-full w-full' />
    </div>
    <div class='h-full'>
        <div class='mb-4'>
            <Badge>NEW</Badge>
            <h3 class='text-grayBlue-500 inline-block tracking-[0.4rem] ml-3'>MONOGRAPH DASHBOARD</h3>
        </div>
        <div class='mr-6 mb-6'>
            <h1 class='text-darkBlue font-bold text-4xl mb-4'>POWERFUL INSIGHTS INTO YOUR TEAM</h1>
            <p class='text-grayBlue-500 text-xl'>Project planning and time tracking for agile teams</p>
        </div>
        <div>
            <Button>SCHEDULE A DEMO</Button>
            <p class='text-grayBlue-500 font-condensed tracking-widest inline-block ml-4'>TO SEE A PREVIEW</p>
        </div>
    </div>
</main>