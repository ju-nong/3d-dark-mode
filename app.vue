<template>
    <div class="w-[100vw] h-[100vh] relative flex items-center justify-center">
        <div class="main-container text-6xl relative">
            <p id="sun">🌞</p>
            <p id="moon">🌚</p>
        </div>
        <p class="hide-text text-white absolute z-[0] bottom-[30%] font-black">
            오 안녕하세요?
        </p>
        <img
            src="images/space.jpg"
            alt="우주"
            class="background absolute object-cover z-[-100] w-full h-full"
        />
    </div>
</template>

<script setup>
import "/style/style.scss";
const count = ref(0);
</script>

<style lang="scss">
.main-container {
    p {
        position: absolute;

        top: 50%;
        left: 50%;

        &#sun {
            transform: translate(-50%, -50%);
            text-shadow: 0px 0px 20px yellow;
            z-index: 2;
        }

        &#moon {
            transform: translate(100%, -50%) scale(0.8);
            z-index: 3;

            animation-name: Moon;
            animation-duration: 10s;
            animation-iteration-count: infinite;
            animation-timing-function: linear;
        }
    }
}

.background {
    filter: contrast(200%);
    animation-name: Space;
    animation-duration: 10s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
}
</style>
