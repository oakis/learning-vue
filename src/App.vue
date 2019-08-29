<template>
  <div id="app">
    <AddTodoFail :addTodoFailed="addTodoFailed" />
    <h1>Vuet ToDo</h1>
    <AddTodo :todos="todos" @add-todo-failed="bool => addTodoFailed = bool" />
    <TodoList :todos="todos" @remove-todo="list => todos = list" @complete-todo="list => todos = list" />
    <CompletedAllTasks :isAllCompleted="isAllCompleted" />
    <footer>{{ message }}</footer>
  </div>
</template>

<script>
import AddTodo from "./components/AddTodo.vue";
import AddTodoFail from "./components/AddTodoFail.vue";
import CompletedAllTasks from './components/CompletedAllTasks.vue';
import TodoList from "./components/TodoList.vue";

export default {
  name: "app",
  components: {
    AddTodo,
    AddTodoFail,
    CompletedAllTasks,
    TodoList,
  },
  data: function() {
    return {
      addTodoFailed: false,
      message: `Page loaded at ${new Date().toLocaleString()}`,
      todos: [
        {
          id: 1,
          text: "lorem ipsum",
          isCompleted: false
        },
        {
          id: 2,
          text: "dolor sit amet",
          isCompleted: false
        },
        {
          id: 3,
          text: "consectetur adipiscing elit",
          isCompleted: true
        },
        {
          id: 4,
          text: "donec placerat auctor suscipit",
          isCompleted: false
        }
      ],
    };
  },
  computed: {
    isAllCompleted() {
      return this.todos.length && !this.todos.map(todo => todo.isCompleted).includes(false);
    }
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/icon?family=Material+Icons");
@import url("https://fonts.googleapis.com/css?family=Abril+Fatface|Caveat|Roboto&display=swap");

body {
  margin: 0;
  padding: 0;
  font-family: "Roboto";
}

#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-right: 15%;
  padding-left: 15%;
  margin: 0;
}

/* Components */
h1 {
  font-family: "Abril Fatface";
  font-size: 4em;
}

button {
  cursor: pointer;
}

button:focus,
input:focus {
  outline: none;
}

footer {
  position: absolute;
  bottom: 5px;
  right: 5px;
}

/* Classes */
.button-cta {
  width: 48px;
  height: 48px;
  border: 0;
  margin: 0;
  color: cornflowerblue;
}

.button-cta i {
  font-size: 48px;
}

.icon-stacked-small {
  position: absolute;
  height: 24px;
  width: 24px;
  top: -12px;
  left: -12px;
}

.icon-stacked-large {
  position: absolute;
  height: 48px;
  width: 48px;
  top: -25px;
  left: -25px;
}

.button-complete {
  color: yellowgreen;
  border: 0px;
  background-color: transparent;
}

.button-animated {
  position: relative;
  height: 24px;
  width: 24px;
}

/* Animations */
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(30px);
  opacity: 0;
}

.slide-fade-zoom-enter-active {
  transition: all .3s ease-in;
}
.slide-fade-zoom-leave-active {
  transition: all .3s ease-out;
}
.slide-fade-zoom-enter {
  transform: scale(10);
}
.slide-fade-zoom-enter,
.slide-fade-zoom-leave-to {
  opacity: 0;
}

.toggle-icon-enter-active {
  transition: all 0.3s ease;
}
.toggle-icon-leave-active {
  transition: all 0.3s ease;
}
.toggle-icon-enter,
.toggle-icon-leave-to {
  opacity: 0;
}

.rotate-icon-enter-active {
  transition: all 200ms cubic-bezier(0.4, 0, 0.2, 1);
}
.rotate-icon-leave-active {
  transition: all 200ms cubic-bezier(0.4, 0, 0.2, 1);
}
.rotate-icon-enter {
  transform: rotate(360deg);
  opacity: 0;
}
.rotate-icon-leave-to {
  transform: rotate(225deg);
  opacity: 0;
}

.fade-in-bottom-enter-active {
  transition: all 0.2s ease;
}
.fade-in-bottom-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.fade-in-bottom-enter,
.fade-in-bottom-leave-to {
  transform: translateY(100px);
  opacity: 0;
}
</style>
