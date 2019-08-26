var app = new Vue({
    el: '#app',
    data: {
        message: `Page loaded at ${new Date().toLocaleString()}`,
        todos: [
            {
                id: 1,
                text: 'lorem ipsum'
            },
            {
                id: 2,
                text: 'dolor sit amet'
            },
            {
                id: 3,
                text: 'consectetur adipiscing elit'
            },
            {
                id: 4,
                text: 'donec placerat auctor suscipit'
            },
        ],
        todoInput: '',
    },
    methods: {
        addTodo: function () {
            this.todos.push({
                id: this.todos.length + 1,
                text: this.todoInput,
            });
            this.todoInput = '';
        },
        removeTodo: function (id) {
            this.todos = this.todos.filter(todo => todo.id !== id);
        },
    },
});
