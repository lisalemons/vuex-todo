<template>
  <div class="todo" v-if="!add" @click="toggleAdd">
    <div class="todo__wrapper noselect">
      <div class="todo__info">
        <h1 class="todo__title">
          Add a TODO
        </h1>
        <div class="todo__description">
        </div>
      </div>
      <div class="todo__done-wrapper" @click="toggleAdd">
        <div class="todo__done-content">
          <div class="todo__done-did" v-if="!add">
            &plus;
          </div>
        </div>
      </div>
    </div>
    <ToDoForm v-if="add" :todo="todo"></ToDoForm>
  </div>

</template>

<script>
import ToDoForm from '@/components/ToDoForm'

export default {
  name: 'AddAToDo',
  components: {
    ToDoForm
  },
  data () {
    return {
      add: false,
      todo: {
        title: '',
        description: '',
        done: false
      }
    }
  },
  methods: {
    toggleAdd() {
      console.log('toggleAdd',  { add:  this.add })
      this.add = !this.add
      console.log('toggleAdd',  { add:  this.add })
    },
  }
}
</script>

<style scoped lang="scss">
.todo {
  cursor: pointer;

  :hover {
    background: #e0e0e0;
    border-color: white;
  }
}
</style>