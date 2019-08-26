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
            const getLastId = this.todos.length ? this.todos.slice(-1).pop().id : 0;
            this.todos.push({
                id: getLastId + 1 || 0,
                text: this.todoInput,
            });
            this.todoInput = '';
        },
        removeTodo: function (id) {
            this.todos = this.todos.filter(todo => todo.id !== id);
        },
    },
});
