<template>
  <main>
    <h1>Task Board</h1>
    <p>Create a list of tasks</p>
    <p>{{ message }}</p>

    <div class="create-new">
      <input type="text" v-model="newTask" placeholder="Add a new task" @keypress.enter="addTask" />
      <button @click="addTask">Add</button>
    </div>

    <div class="tasks">
      <Task v-for="(task, i) in $store.state.tasks" :key="i" :task="task" />
    </div>

  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { invoke } from '@tauri-apps/api';
import { isTauri } from '@/utils/tauri';

export default defineComponent({
  data() {
    return {
      message: '',
      newTask: ''
    }
  },
  async mounted() {
    if (isTauri()) {
      this.message = await invoke('greet');
    }
  },
  methods: {
    addTask() {
      if (this.newTask) {
        this.$store.commit('ADD_TASK', this.newTask);
        this.newTask = '';
      }
    }
  }
});

</script>
