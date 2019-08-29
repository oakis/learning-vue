<template>
  <transition-group name="slide-fade" mode="out-in" tag="div" class="todo-list">
    <div v-for="todo in todos" :key="todo.id" class="todo-list-item">
      <span :class="{ 'todo-list-item-complete': todo.isCompleted }">{{ todo.text }}</span>
      <div class="todo-list-item-toolbar">
        <button @click="toggleComplete(todo.id)" class="button-complete">
          <transition-group name="toggle-icon" mode="out-in" class="button-animated">
            <i
              v-if="todo.isCompleted"
              class="material-icons icon-stacked-small"
              :key="'isComplete'"
            >check_box</i>
            <i
              v-if="!todo.isCompleted"
              class="material-icons icon-stacked-small"
              :key="'isNotComplete'"
            >check_box_outline_blank</i>
          </transition-group>
        </button>
        <button @click="removeTodo(todo.id)" class="button-remove">
          <i class="material-icons">delete_forever</i>
        </button>
      </div>
    </div>
  </transition-group>
</template>

<script>
export default {
  name: "TodoList",
  props: ["todos"],
  methods: {
    removeTodo: function(id) {
      this.$emit('remove-todo', this.todos.filter(todo => todo.id !== id));
    },
    toggleComplete: function(id) {
      this.$emit('complete-todo', this.todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            isCompleted: !todo.isCompleted
          };
        }
        return todo;
      }));
    }
  }
};
</script>

<style scoped>
.todo-list {
  width: 60%;
  display: flex;
  flex-direction: column;
  margin: 16px 0px;
}

.todo-list-item {
  width: calc(100% - 10px); /* 100% minus padding times two */
  display: flex;
  justify-content: space-between;
  padding: 5px;
  font-family: "Caveat";
  font-size: 1.5em;
}

.todo-list-item:nth-child(odd) {
  background-color: #eee;
}

.todo-list-item:nth-child(even) {
  background-color: #fefefe;
}

.todo-list-item-complete {
  text-decoration: line-through;
}

.todo-list-item-toolbar {
  height: 30px;
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
}

.button-remove {
  color: orangered;
  border: 0px;
  background-color: transparent;
}
</style>
