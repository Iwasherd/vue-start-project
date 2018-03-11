<template lang='pug'>
  .edit
    table.table
      tr.name-list
        th.name-item Name
        th.name-item Tags
        th.name-item Actual effort
        th.name-item Estimated effort
        th.name-item Due date
        th.name-item Description
      edit-List(
        v-for='task in tasks'
        :task='task'
        key='task.id'
        v-if='task.name === url'
      )
</template>
<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  data() {
    return {
      url: this.$route.params.name
    }
  },
  computed: {
    ...mapGetters(['tasks'])
  },
  methods: {
    ...mapActions(['fetchTasks'])
    // ...mapMutations(['mutationTaskName'])
  },
  created() {
    this.fetchTasks()
  },
  components: {
    editList: require('./editList')
  }
}
</script>

<style lang="scss" src="../styles/components/edit.scss" scoped>

</style>


