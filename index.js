var app = new Vue({
    el: '#app',
    data: {
        message: `Page loaded at ${new Date().toLocaleString()}`,
        todos: [
            {
                id: 1,
                text: 'lorem ipsum',
                isCompleted: false,
            },
            {
                id: 2,
                text: 'dolor sit amet',
                isCompleted: false,
            },
            {
                id: 3,
                text: 'consectetur adipiscing elit',
                isCompleted: true,
            },
            {
                id: 4,
                text: 'donec placerat auctor suscipit',
                isCompleted: false,
            },
        ],
        todoInput: '',
        addingTodo: false,
        addTodoFailed: false,
    },
    methods: {
        addTodo: function () {
            if (this.todoInput === '') {
                this.addTodoFailed = true;
                return setTimeout(() => {
                    this.addTodoFailed = false;
                }, 3000);
            }
            this.addingTodo = true;
            const getLastId = this.todos.length ? this.todos.slice(-1).pop().id : 0;
            this.todos.push({
                id: getLastId + 1 || 0,
                text: this.todoInput,
                isCompleted: false,
            });
            this.todoInput = '';
            setTimeout(() => {
                this.addingTodo = false;
            }, 1000);
        },
        removeTodo: function (id) {
            this.todos = this.todos.filter(todo => todo.id !== id);
        },
        toggleComplete: function (id) {
            this.todos = this.todos.map(todo => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        isCompleted: !todo.isCompleted,
                    }
                }
                return todo;
            });
        }
    },
});
