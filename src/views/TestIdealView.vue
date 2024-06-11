<script>
export default {
  data() {
    return {
      berat: 0,
      tinggi: 0,
      hasil: 0,
      kategori: '',
    };
  },
  computed: {
    Hasil() {
      this.hasil = this.berat / (this.tinggi * this.tinggi);
      return this.hasil.toFixed(1);
    },
    Kategori() {
      if (this.hasil >= 18.5 && this.hasil < 25) {
        return (this.kategori = 'Normal');
      } else if (this.hasil > 25) {
        return (this.kategori = 'Gemuk');
      } else if (this.hasil < 18) {
        return (this.kategori = 'Kurus');
      } else {
        return (this.kategori = '');
      }
    },
  },
};
</script>

<template>
  <div class="container-fluid" style="height: 100vh">
    <div class="row justify-content-center">
      <div class="col-4 mt-5 text-center">
        <i class="fa-solid fa-people-robbery" style="font-size: 100px; color: #e88a1a"></i>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-4 mt-5 bg-gray rounded">
        <h4 class="fw-bold text-center">Proses Hitung</h4>
        <form class="mb-3">
          <div class="mb-3">
            <label class="form-label">Berat Badan (kg)</label>
            <input type="number" class="form-control" v-model="berat" />
          </div>
          <div class="mb-3">
            <label class="form-label">Tinggi Badan (m)</label>
            <input type="number" class="form-control" v-model="tinggi" />
          </div>
        </form>
        <hr />

        <h4 class="fw-bold text-center">Hasil</h4>
        <p>Berat : {{ berat }} kg</p>
        <p>Tinggi : {{ tinggi }} m</p>
        <p>Hasil : {{ Hasil }}</p>
        <p>Kategori : {{ Kategori }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container-fluid {
  background-color: #141414;
}

.bg-gray {
  background-color: #d9d9d9;
}

input {
  border: solid #211951;
  background-color: #d9d9d9;
}
</style>
