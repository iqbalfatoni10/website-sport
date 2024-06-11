<script setup>
import ButtonComponent from '../components/ButtonComponent.vue';
</script>

<template>
  <div class="container-fluid">
    <div class="row d-flex justify-content-center align-items-center" style="height: 100vh">
      <div class="title col-6 text-center rounded p-3">
        <h1 class="text-light fw-bold">Love Your Body by Exercising</h1>
        <p class="text-light">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut labore omnis sed veritatis quo, eos pariatur asperiores. Debitis culpa, minus voluptas optio fugit consectetur laudantium. Ipsam ut excepturi assumenda voluptatibus
          asperiores iusto dolores explicabo et optio ab est cupiditate nesciunt perspiciatis esse, sunt facilis aut, laborum ex eius libero officiis.
        </p>
        <ButtonComponent variant="yellow" name="Learn More" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.container-fluid {
  background-image: url('../assets/img1.jpg');
  height: 100vh;
  background-size: cover;
}

.title {
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
