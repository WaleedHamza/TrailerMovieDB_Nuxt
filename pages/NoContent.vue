<template>
  <v-sheet color="error">
    {{ message }}{{ title }}
  </v-sheet>
</template>

<script>
export default {
  props: {
    content: {
      type: Array,
      default: () => {
        return []
      }
    },
    title: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      message: 'Sorry we are unable to find what you looking for'
    }
  }

}
</script>

<style>

</style>
