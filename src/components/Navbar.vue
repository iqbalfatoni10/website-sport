<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-gray bg-gray">
    <div class="container">
      <RouterLink to="/" class="navbar-brand fw-bold"><span class="text-yellow">Go</span>Sport.</RouterLink>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <RouterLink to="/" class="nav-link fw-bold">Home</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/sport" class="nav-link fw-bold">Sport</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/list" class="nav-link fw-bold">List Activity</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/testideal" class="nav-link fw-bold">Ideal Check</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar-gray,
.bg-gray {
  background-color: #d9d9d9;
}

.text-yellow {
  color: #e88a1a;
}
</style>
