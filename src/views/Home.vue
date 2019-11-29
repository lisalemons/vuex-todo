<template>
  <div class="home">
    <div v-for="todo in todos" :key="todo" class="todos__wrapper">
      <ToDo
        :title="todo.title"
        :description="todo.description"
        :done="todo.done"></ToDo>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ToDo from '@/components/ToDo.vue'

export default {
  name: 'home',
  data() {
    return {
      todos: [
        {
          title: 'This is an example to do item',
          description: 'This is the optional desription of the todo',
          done: true
        },
                {
          title: 'This is an example to do item',
          description: 'This is the optional desription of the todo. This is the optional desription of the todo. This is the optional desription of the todo. This is the optional desription of the todo.',
          done: true
        }
      ]
    }
  },
  components: {
    ToDo
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