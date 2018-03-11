<template lang="pug">
  tr.task-list
    th.task-item.task-item__name(
      v-show='name'
      @click='showForm(2)'
    ) {{ task.name }}
    th.task-form.task-item(
      v-show='changeName'
    )
      form(
        v-on:submit.prevent='showForm(1), requestForChangeName()'
        )
        input(
          type='text'
           value=''
           v-model='newName'
           )
        button(type='submit') save
    th.task-item {{ task.tags }}
    th.task-item {{ task.actual_effort }}
    th.task-item {{ task.estimated_effort }}
    th.task-item {{ task.due_date }}
    th.task-item {{ task.description }}
</template>
<script>
import Axios from 'axios'

export default {
  data() {
    return {
      newName: '',
      name: true,
      changeName: false
    }
  },
  props: {
    task: Object
  },
  methods: {
    showForm(num) {
      switch (num) {
        case 1:
          this.name = true
          this.changeName = false
          break
        case 2:
          this.name = false
          this.changeName = true
          break
        default:
          break
      }
    },
    requestForChangeName() {
      // отправка данных любой сервер
      Axios.put('http://ourserver', {
        body: this.task
      })
        .then(response => {
          this.task.name = this.newName
        })
        .catch(e => {
          console.log('server is not definded')
        })
    }
  },
  created() {

  }
}
</script>

<style lang="scss" src="../styles/components/editList.scss" scoped>

</style>
