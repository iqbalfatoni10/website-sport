<script>
import ButtonComponent from '../components/ButtonComponent.vue';

export default {
  components: {
    ButtonComponent, // komponen yang diimpor harus didaftarkan di sini
  },
  data() {
    return {
      activities: [
        { name: 'Lari Pagi', start: '07.00', end: '08.00', date: '2024-04-23', complete: false, id: 1 },
        { name: 'Badminton', start: '08.00', end: '09.00', date: '2024-04-23', complete: false, id: 2 },
        { name: 'Mini Soccer', start: '09.00', end: '10.00', date: '2024-04-23', complete: false, id: 3 },
      ],
      startTime: '',
      endTime: '',
      activity: '',
      dateTime: '',
      complete: false,
      updatingIndex: -1,
      editedActivity: { name: '', start: '', end: '', date: '' },
      nilai: false,
      searchActivity: '',
      OpenClose: false,
    };
  },
  methods: {
    CloseModal() {
      this.OpenClose = false;
    },
    addActivity() {
      const lastId = this.activities.length > 0 ? this.activities[this.activities.length - 1].id : 0;
      const newId = lastId + 1;
      const newActivity = {
        name: this.activity,
        start: this.startTime,
        end: this.endTime,
        date: this.dateTime,
        id: newId,
      };
      alert('Apakah anda yakin akan menambah aktivitas?');
      this.activities.push(newActivity);
      this.activity = '';
      this.startTime = '';
      this.endTime = '';
    },
    deleteActivity(index) {
      alert('Apakah anda yakin akan menghapus aktivitas?');
      this.activities.splice(index, 1);
    },
    openEditModal(index) {
      this.updatingIndex = index;
      this.editedActivity = { ...this.activities[index] };
      this.OpenClose = true;
    },
    submitUpdate() {
      const newName = this.editedActivity.name;
      const newStart = this.editedActivity.start;
      const newEnd = this.editedActivity.end;
      const newDate = this.editedActivity.date;
      if (newName && newStart && newEnd && newDate) {
        this.activities[this.updatingIndex].name = newName;
        this.activities[this.updatingIndex].start = newStart;
        this.activities[this.updatingIndex].end = newEnd;
        this.activities[this.updatingIndex].date = newDate;
        this.OpenClose = false;
      }
    },
  },
  computed: {
    filteredActivities() {
      return this.activities.filter((activity) => {
        return activity.name.toLowerCase().includes(this.searchActivity.toLowerCase());
      });
    },
  },
};
</script>

<template>
  <body>
    <div class="container-fluid">
      <!-- Awal Modal -->
      <transition name="modal-effect">
        <div v-if="OpenClose" class="modal fade show" tabindex="-1" aria-labelledby="editModalLabel" aria-modal="true" role="dialog" style="display: block">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title fw-bold" id="editModalLabel">Update Activity</h5>
                <button type="button" class="btn-close" @click="CloseModal()" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <form @submit.prevent="submitUpdate">
                  <div class="mb-3">
                    <label for="editActivity" class="form-label">Date Time</label>
                    <input type="date" class="form-control" id="editActivity" v-model="editedActivity.date" />
                  </div>
                  <div class="mb-3">
                    <label for="editActivity" class="form-label">Activity</label>
                    <input type="text" class="form-control" id="editActivity" v-model="editedActivity.name" />
                  </div>
                  <div class="mb-3">
                    <label for="editStartTime" class="form-label">Start Time</label>
                    <input type="text" class="form-control" id="editStartTime" v-model="editedActivity.start" />
                  </div>
                  <div class="mb-3">
                    <label for="editEndTime" class="form-label">End Time</label>
                    <input type="text" class="form-control" id="editEndTime" v-model="editedActivity.end" />
                  </div>
                  <button type="submit" class="btn btn-custom">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </transition>
      <!-- Awal Modal -->

      <div class="row justify-content-center">
        <div class="col-9 mt-5">
          <div class="row">
            <div class="col-2">
              <input type="date" id="date" class="form-control" v-model="dateTime" />
            </div>
            <div class="col-2">
              <input type="text" id="startTime" class="form-control" placeholder="Start time" v-model="startTime" />
            </div>
            <div class="col-2">
              <input type="text" id="endTime" class="form-control" placeholder="End time" v-model="endTime" />
            </div>
            <div class="col-4">
              <input type="text" id="activity" class="form-control" placeholder="New activity" v-model="activity" />
            </div>
            <div class="col-2">
              <button class="btn btn-custom form-control" @click="addActivity">Add</button>
            </div>
          </div>
        </div>
      </div>

      <!-- Fitur Cari -->
      <div class="row justify-content-center mt-5">
        <div class="col-5">
          <input type="text" id="search" class="form-control" placeholder="Search Activities..." v-model="searchActivity" />
        </div>
      </div>

      <div class="row justify-content-center">
        <section class="aktivitas col-7 mt-5 pb-3 rounded text-secondary mb-5" v-show="activities.filter((a) => !a.complete).length">
          <h2 class="mt-3 text-center fw-bold">Aktivitasku</h2>
          <!-- Transition -->
          <transition-group name="dataActivity">
            <div v-for="(activity, index) in filteredActivities.filter((a) => !a.complete)" :key="activity.id" class="p-3 d-flex align-items-center" style="border-bottom: solid 1px #211951">
              <div class="col-8 me-5">
                <input class="me-3" type="checkbox" v-model="activity.complete" />
                <span class="fw-bold">| {{ activity.date }} : {{ activity.start }} - {{ activity.end }} : {{ activity.name }}</span>
              </div>
              <div>
                <ButtonComponent variant="outline-danger me-3" name="Delete" @click="deleteActivity(index)" />
                <ButtonComponent variant="success me-3" name="Update" @click="openEditModal(index)" />
              </div>
            </div>
          </transition-group>
        </section>

        <section class="aktivitas-selesai col-7 mt-5 pb-3 rounded text-secondary mb-5" v-show="activities.filter((a) => a.complete).length">
          <h2 class="mt-3 text-center fw-bold">Aktivitas Selesai</h2>
          <!-- Transition -->
          <transition-group name="dataActivity">
            <div v-for="(activity, index) in filteredActivities.filter((a) => a.complete)" :key="activity.id" class="p-3 d-flex align-items-center" style="border-bottom: solid 1px #211951">
              <div class="col-8 me-5">
                <input class="me-3" type="checkbox" v-model="activity.complete" />
                <span class="fw-bold text-denger">| {{ activity.date }} : {{ activity.start }} - {{ activity.end }} : {{ activity.name }}</span>
              </div>
              <div>
                <ButtonComponent variant="outline-danger me-3" name="Delete" @click="deleteActivity(index)" />
                <ButtonComponent variant="success me-3" name="Update" @click="openEditModal(index)" />
              </div>
            </div>
          </transition-group>
        </section>
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

input {
  background-color: #d9d9d9;
  border: solid #211951;
}

.btn-custom {
  background-color: #e88a1a;
  color: #f0f3ff;
}

.btn-custom:hover {
  background-color: #d87700;
  color: #f0f3ff;
}

.aktivitas,
.modal-content,
.aktivitas-selesai {
  background-color: #d9d9d9;
}

.aktivitas span {
  color: #211951;
}

.text-denger {
  color: red;
  text-decoration: line-through;
}

.modal-title {
  color: #211951;
}

.dataActivity-enter-active,
.dataActivity-leave-active,
.modaleffect-enter-active,
.modaleffect-leave-active {
  transition: all 0.7s ease;
}

.dataActivity-enter-from,
.dataActivity-leave-to,
.modal-effect-enter-from,
.modal-effect-leave-to {
  opacity: 0;
}
</style>
