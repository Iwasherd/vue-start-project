const tasks = {
  state: {
    tasksArr: []
  },
  getters: {
    tasks: ({ tasksArr }) => tasksArr
  },
  // mutations: {
  //   mutationTaskName(state, name) {
  //     state.tasksArr = state.tasksArr.name
  //   }
  // },
  actions: {
    fetchTasks({ state, rootGetters }) {
      const { $http } = rootGetters
      $http.get('/tasks.json').then(response => {
        state.tasksArr = response.body
        console.log(state.tasksArr)
      }, response => {
        console.error(response)
      })
    }
    // // changeTaskName(state, name, rootGetters) {
    // //   const { $http } = rootGetters
    // //   $http.put('/tasks.json').then(responce => {
    // //     state.tasksArr = state.tasksArr.name
    // //   })
    // }
  }
}

export default tasks
