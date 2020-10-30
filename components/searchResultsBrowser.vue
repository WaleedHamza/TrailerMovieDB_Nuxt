<template>
  <v-container>
    {{ items }}
  </v-container>
</template>

<script>
export default {
  props: {
    items: {
      default: () => {
        return []
      },
      type: Array
    }
  }
}
</script>

<style>

</style>
