<template>
  <form v-on:submit.prevent class="form">
    <input v-model="todoInput" placeholder="What needs to be done?" autofocus />
    <button @click="addTodo" class="button-cta">
      <transition-group name="rotate-icon" mode="out-in" class="button-animated">
        <i v-if="!addingTodo" class="material-icons icon-stacked-large" :key="'isAdding'">add_circle</i>
        <i
          v-if="addingTodo"
          class="material-icons icon-stacked-large"
          :key="'isNotAdding'"
        >check_circle</i>
      </transition-group>
    </button>
  </form>
</template>

<script>
export default {
  name: "AddTodo",
  props: ['todos'],
  data: function() {
    return {
      todoInput: '',
      addingTodo: false,
    };
  },
  methods: {
    addTodo: function() {
      if (this.todoInput === "") {
        console.log('emit true');
        this.$emit('add-todo-failed', true);
        return setTimeout(() => {
          console.log('emit false');
          this.$emit('add-todo-failed', false);
        }, 3000);
      }
      this.addingTodo = true;
      const getLastId = this.todos.length ? this.todos.slice(-1).pop().id : 0;
      this.todos.push({
        id: getLastId + 1 || 0,
        text: this.todoInput,
        isCompleted: false
      });
      this.todoInput = "";
      setTimeout(() => {
        this.addingTodo = false;
      }, 1000);
    },
  }
};
</script>

<style scoped>
form {
  display: flex;
  justify-content: center;
  width: 60%;
}

input {
  flex: 1;
  font-family: "Caveat";
  font-size: 2em;
  padding: 4px;
  border: 0;
  border-bottom: 1px dotted #999;
}
</style>
