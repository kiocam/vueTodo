const app = Vue.createApp({
  data () {
    return {
      todos: [],
      userInput: ''
    }
  },
  methods: {
    addTodo () {
      this.todos.push(this.userInput)
    },

    removeTodo(idx) {
      this.todos.splice(idx, 1)
    }
  }
})

app.mount('#app')