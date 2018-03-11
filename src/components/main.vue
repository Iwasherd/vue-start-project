<template lang="pug">
    .main
      table.table
        tr.name-list
          th.name-item Name
          th.name-item Tags
          th.name-item Actual effort
          th.name-item Estimated effort
          th.name-item Due date
        task-List(
          v-for='task in tasks'
          :task='task'
          :key='task.id'
          v-if='task.obj_status === "active"'
        )
</template>
<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  data() {
    return {
    }
  },
  computed: {
    ...mapGetters(['tasks'])
  },
  methods: {
    ...mapActions(['fetchTasks'])
  },
  created() {
    this.fetchTasks()
  },
  components: {
    taskList: require('./taskList')
  }
}
</script>

<style lang="scss" src="../styles/components/main.scss" scoped>

</style>
