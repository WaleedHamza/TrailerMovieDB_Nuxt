<template>
  <v-overlay v-model="loading">
    <v-progress-circular
      :size="70"
      width="7"
      color="purple"
      indeterminate
    />
  </v-overlay>
</template>

<script>
export default {
  name: 'LoadingItem'
  // props: {
  //   loading: {
  //     default: () => {
  //       return false
  //     },
  //     type: Boolean
  //   }
  // }
}
</script>
