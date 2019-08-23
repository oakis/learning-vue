var app = new Vue({
    el: '#app',
    data: {
        message: `Page loaded at ${new Date().toLocaleString()}`,
        todos: [],
        todoInput: '',
    },
    methods: {
        addTodo: function () {
            this.todos.push({
                id: this.todos.length + 1,
                text: this.todoInput,
            });
        },
    },
});
