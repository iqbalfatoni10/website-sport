<script>
import axios from 'axios';
export default {
  data() {
    return {
      items: [],
      userInput: '',
    };
  },
  methods: {
    searchData() {
      const apiKey = '+hryAywvZByrpuXI1/imlg==AC8HMBgq6wNJAGOz';
      const activity = this.userInput;

      axios
        .get(`https://api.api-ninjas.com/v1/caloriesburned?activity=${activity}`, {
          headers: {
            'X-Api-Key': apiKey,
          },
        })
        .then((response) => {
          this.items = response.data;
        })
        .catch((error) => {
          console.log('Error fetching data: ', error);
        });
    },
  },
  mounted() {
    this.searchData();
  },
};
</script>

<template>
  <body>
    <div class="container-fluid">
      <div class="row mb-5 justify-content-center">
        <div class="col-4">
          <div class="input-group mt-5">
            <input type="text" class="form-control" placeholder="Input Olahraga Dalam B.Inggris..." v-model="userInput" />
            <button class="btn btn-yellow" type="button" @click="searchData">Button</button>
          </div>
        </div>
      </div>
      <div class="row px-5">
        <transition-group name="dataSport">
          <div class="col-md-4 my-3" v-for="item in items" :key="item.id">
            <div class="card">
              <div class="card-header fw-bold text-center">{{ item.name }}</div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item"><strong>Kalori Perjam : </strong>{{ item.calories_per_hour }}</li>
                <li class="list-group-item"><strong>Durasi Permenit : </strong>{{ item.duration_minutes }}</li>
                <li class="list-group-item"><strong>Total Kalori : </strong>{{ item.total_calories }}</li>
              </ul>
            </div>
          </div>
        </transition-group>
      </div>
    </div>
  </body>
</template>

<style scoped>
body {
  background-color: #141414;
  height: 100vh;
}

.container-fluid {
  background-color: #141414;
}

.card {
  background-color: #e88a1a;
}

.card-header,
li {
  color: #211951;
}

.dataSport-enter-active,
.dataSport-leave-active {
  transition: all 0.7s ease;
}

.dataSport-enter-from,
.dataSport-leave-to {
  opacity: 0;
}

.btn-yellow {
  background-color: #e88a1a;
  color: #f0f3ff;
}

.btn-yellow:hover {
  background-color: #d87700;
  color: #f0f3ff;
}
</style>
