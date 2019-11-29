<template>
  <div class="todo">
    <div class="todo__edit-toggle" @click="toggleEdit">
      Edit Me
    </div>
    <div class="todo__wrapper noselect"  v-if="!edit">
      <div class="todo__info">
        <div class="todo__title">
          <h1>
            {{ todo.title }}
          </h1>
        </div>
        <div class="todo__description">
          {{ todo.description }}
        </div>
      </div>
      <div class="todo__done-wrapper" @click="toggleDone">
        <div class="todo__done-content">
          <div class="todo__done-did" v-if="todo.done">
            &check;
          </div>
        </div>
      </div>
    </div>
    <ToDoForm v-if="edit" :todo="todo"></ToDoForm>
  </div>
</template>

<script>
import ToDoForm from '@/components/ToDoForm'

export default {
  name: 'ToDo',
  components: {
    ToDoForm
  },
  props: ['todo'],
  data() {
    return {
      edit: false
    }
  },
  methods: {
    toggleDone() {
      this.done = !this.done;
    },
    toggleEdit() {
      this.edit = !this.edit
    }
  },

}
</script>

<style  lang="scss">
$coolgrey: #e0e0e0;
$coolgreen: #42b983;
  .todo {
    &__wrapper {
      display: flex;
      align-items: stretch;
      justify-content: space-between;
      min-height: 10rem;
      width: 100%;

      border: 1px solid $coolgrey;
    }
    &__info {
      flex: 60%;

      border-right: 2px dashed $coolgrey;
      padding: 1rem;
      text-align: left;
    }
    &__description {
      min-height:  60px;
    }
    &__done-wrapper {
      flex: 10%;

      display: flex;
      align-items: center;
      justify-content: center;

      font-size: 5rem;

      cursor: pointer;
      &:hover {
        background: $coolgrey;
      }
    }
    &__done-content {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      width: 100%;
    }
    &__edit-toggle {
      color: $coolgreen;
      text-decoration: underline;
      cursor: pointer;
    }
  }
</style>