<script setup>
import { ref } from 'vue'
import SectionMenu from './components/SectionMenu.vue'
import Menu from './menu.json'
const lasagnas = ref(Menu.main)
const extras = ref(Menu.extras)
</script>

<template>
  <main
    class="w-full h-screen flex flex-col place-content-center p-3 bg-primary">
    <header class="w-full flex flex-col place-content-center mb-2">
      <h1 class="page_title">Polyn's lasagne</h1>
      <p class="font-sans text-center text-black">
        La mejor lasagna que probaras en tu vida
      </p>
    </header>
    <SectionMenu name="Lasañas" :elements="lasagnas" />
    <SectionMenu name="Extras" :elements="extras" />

    <footer class="flex flex-row-reverse place-items-end justify-between mt-6">
      <img
        class="w-20 h-20 align-self-end animate-bounce"
        src="https://firebasestorage.googleapis.com/v0/b/cat-album-58844.appspot.com/o/lasagna.png?alt=media&token=d0a5afcb-2db8-43a5-994e-e1d9baa751c0"
        alt="Vite Logo" />
      <div class="text-black">
        <a
          href="https://www.instagram.com/polyns_lasagne/"
          class="flex flex-row place-items-end"
          ><img
            src="https://firebasestorage.googleapis.com/v0/b/cat-album-58844.appspot.com/o/instagram.png?alt=media&token=bb8ab77f-8c89-45ba-b1b1-0224dcc37f88"
            alt="instagram"
            class="h-8 w-8 ml-0 m-2" />
          <p class="mb-1">@polyns_lasagne</p>
        </a>
        <p class="">Viernes a domingo de 4pm a 22pm</p>
      </div>
    </footer>
  </main>
</template>

<style scoped>
.page_title {
  text-stroke: 3px #000000;
  -webkit-text-stroke: 3px #000000;
  text-shadow: 5px 5px 0px #000000;

  font-family: 'Bungee';
  color: #98e0ff;
  font-size: 2.4rem;
  text-transform: uppercase;
}
@keyframes bounce {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
}
</style>
