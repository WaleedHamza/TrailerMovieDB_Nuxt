<template>
  <v-container>
    {{ item }}
  </v-container>
</template>

<script>
export default {
  props: {
    item: {
      default: () => {
        return {}
      },
      type: Object
    }
  }
}
</script>

<style>

</style>
