<template>
    <div class="w-[100vw] h-[100vh] relative flex items-center justify-center">
        <div class="main-container relative text-[15vmin]">
            <p id="sun" class="pointer-events-none">🌞</p>
            <p id="moon" class="pointer-events-none">🌚</p>
        </div>
        <p
            class="hide-text text-white absolute z-[0] bottom-[10vmin] font-black pointer-events-none"
        >
            {{ words[randomIndex] }}
        </p>
        <img
            src="~/assets/images/space.jpg"
            alt="우주"
            class="background absolute object-cover z-[-100] w-full h-full"
        />
    </div>
</template>

<script setup>
import "/style/style.scss";
const randomIndex = ref(0);

const words = [
    "오 안녕하세요?",
    "회사에서 심심해서 만들어봤어요",
    "배고파요 ㅠ___ㅠ",
    "오늘 점심 추천 받아요",
    "Javascript는 무적이에요",
    "Vue도 재밌고 React도 재밌어요",
    "오아리는 최고에요",
    "오아리는 키우는 강아지 이름이에요",
    "오아리는 갈색 푸들입니다",
    "아 졸리다 졸려",
    "^___^ b",
    "이 문구는 그냥 아무거나 넣었어요",
];

setInterval(() => {
    randomIndex.value = Math.floor(Math.random() * words.length + 1);
}, 10000);
</script>

<style lang="scss">
.main-container {
    /* overflow-x: hidden; */
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
            transform: translate(100%, -50%) scale(0.7);
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
