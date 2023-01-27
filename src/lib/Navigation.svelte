<script lang='ts'>
    let navMenuOpened: boolean = false;
    let hamburgerTransitionFinished: boolean = false;

    function handleHamburgerIcon(): void {
        navMenuOpened = !navMenuOpened;
    }
    function handleClosedIcon(): void {
        hamburgerTransitionFinished = false;
    }

    function spin(node: any, { duration }: any) {
        return {
            duration,
            css: (t: any) => {
                return `
                    transform: rotate(${t * -180}deg);
                `
            }
        }
    }
</script>

<main>
    <nav class='relative'>
        <div class='flex justify-between p-8 items-center bg-transparent'>
            <div>
                <img src='/logo.svg' alt='logo' />
            </div>
            <div>
                {#if !navMenuOpened}
                    <img src='/icon-hamburger.svg' alt='hamburger menu icon' transition:spin={{duration: 150}} on:click={handleHamburgerIcon} on:keypress={handleHamburgerIcon} on:outroend={() => hamburgerTransitionFinished = true}/>
                {/if}
                {#if hamburgerTransitionFinished}
                    <img src='/icon-close.svg' alt='hamburger menu closed icon' transition:spin={{duration: 150}} on:click={handleClosedIcon} on:keypress={handleClosedIcon} on:outroend={() => navMenuOpened = false} />
                {/if}
            </div>
        </div>
        {#if navMenuOpened}
            <div class='absolute right-1/2 w-screen'>
                <div class='bg-white text-darkBlue relative p-6 rounded-lg z-10 -right-2/4 w-4/5 mx-8 drop-shadow-xl flex flex-col gap-8 items-center'>
                    <div class='text-center font-bold text-lg tracking-wider'>
                        <p class='mb-4'>PRODUCT</p>
                        <p class='mb-4'>FEATURES</p>
                        <p>PRICING</p>
                    </div>
                    <div class='bg-grayBlue-500 h-px w-full'></div>
                    <div>
                        <p class='text-grayBlue-500 font-bold text-lg tracking-wider'>LOGIN</p>
                    </div>
                </div>
            </div>
        {/if}
    </nav>
</main>