<template>
  <div class="home">
    <div v-for="todo in todos" :key="todo.id" class="todos__wrapper">
      <ToDo
        :todo="todo"></ToDo>
    </div>

    <AddAToDo></AddAToDo>

    <button @click="fetchTodos">
      Fetch TODOS from the db
    </button>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import AddAToDo from '@/components/AddAToDo.vue'
import ToDo from '@/components/ToDo.vue'

export default {
  name: 'home',
  components: {
    AddAToDo,
    ToDo
  },
  computed: {
    ...mapState(['todos'])
  },
  methods: {
    fetchTodos() {
      this.$store.dispatch('getAllTodos')
      .catch((err) => {
        console.error({err})
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .todos {
    &__wrapper {
      padding: 1rem 0;
    }
  }
</style>