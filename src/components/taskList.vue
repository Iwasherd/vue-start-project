<template lang="pug">
tr.task-list
  th.task-item
     router-link.task-link(
      :to='task.name'
      :class='{priority: task.is_high_priority === true}'
      ) {{task.name}}
  th.task-item {{task.tags}}
  th.task-item {{task.actual_effort}}
  th.task-item {{task.estimated_effort}}
  th.task-item {{task.due_date}}

</template>
<script>
export default {
  props: {
    task: Object
  },
  methods: {
  },
  created() {
  }
}
</script>
<style lang="scss" src="../styles/components/taskList.scss" scoped></style>


