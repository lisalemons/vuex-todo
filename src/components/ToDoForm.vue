<template>
  <form @submit.prevent="createToDo" class="todo__wrapper noselect">
    <div class="todo__info">
      <div class="todo__title">
        <input type="text" placeholder="Title of todo" v-model="todo.title">
      </div>
      <div class="todo__description">
        <textarea v-model="todo.description"></textarea>
      </div>
    </div>
    <div class="todo__done-wrapper" @click="toggleDone">
      <div class="todo__done-content">
        <div class="todo__done-did" v-if="todo.done">
          &check;
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import ToDoService from '@/services/ToDoService'

export default {
  props: ['todo'],
  methods: {
    createToDo() {
      this.$store.dispatch('createToDo', this.todo)
      .catch(err => console.error(err))
    },
    toggleDone() {
      this.done = !this.done;
    },
    clearForm() {
      this.todo = {}
    }
  }
}
</script>

<style scoped lang="scss">


.todo {
  &__title input, &__description textarea {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  font-size: 1rem;
  border: 1px solid #e0e0e0;
  color: #2c3e50;
  width: 100%;
}
  &__title input {
    display: block;
    font-size: 2em;
    margin-block-start: 0.67em;
    margin-block-end: 0.67em;
    font-weight: bold;
  }
  &__description textarea {
    resize: vertical;
  }
}
</style>