<template>
  <div class="todo__wrapper noselect">
    <div class="todo__info">
      <div class="todo__title">
        <h1>
          {{ title }}
        </h1>
      </div>
      <div class="todo__description">
        {{ description }}
      </div>
    </div>
    <div class="todo__done-wrapper" @click="toggleDone">
      <div class="todo__done-content">
        <div class="todo__done-did" v-if="done">
          &check;
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ToDo',
  props: [
    'title',
    'description',
    'done'
  ],
  methods: {
    toggleDone() {
      console.log('i am being called', {done: this.done})
      this.done = !this.done;
    }
  }
}
</script>

<style scoped lang="scss">
$coolgrey: #e0e0e0;

  .todo {
    &__wrapper {
      display: flex;
      align-items: stretch;
      justify-content: space-between;
      min-height: 8rem;
      width: 100%;

      border: 1px solid $coolgrey;
    }
    &__info {
      height: 100%;
      flex: 60%;

      border-right: 2px dashed $coolgrey;
      padding: 1rem;
      text-align: left;
    }
    &__done-wrapper {
      height: auto;
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
  }
</style>