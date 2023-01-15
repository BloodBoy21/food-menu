<script setup>
defineProps({
  name: String,
  elements: Array
})
</script>
<template>
  <main
    class="w-full flex flex-col justify-items-center mb-5 text-black font-righteous">
    <h1 class="text-xl">{{ name }}</h1>
    <section class="w-full pl-2 pr-2 font-sofiaSerif">
      <ul class="w-full">
        <li
          v-for="(element, index) in elements"
          :key="index"
          class="flex justify-between gap-2">
          <div class="flex flex-col items-start w-4/5">
            <p>{{ element.name }}</p>
            <p class="mt-1 ml-2">{{ element.description || '' }}</p>
          </div>
          <div>
            <p class="font-semibold">${{ element.price }}</p>
          </div>
        </li>
      </ul>
    </section>
  </main>
</template>

<script>
export default {}
</script>

<style></style>
