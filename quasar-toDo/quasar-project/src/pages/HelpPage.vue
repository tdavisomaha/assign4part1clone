/* eslint-disable vue/multi-word-component-names */
<template>
  <q-page class="q-pa-lg">
    <h5 class="q-mt-none">Help</h5>
    <p>
      Hello - this is a simple 'todo' list application.<br>
      Click 'Todo' to view and add items<br>
    </p>
  </q-page>
</template>

<script>
  import { defineComponent } from 'vue'

  export default defineComponent({
    name: 'HelpPage', // Add this to explicitly name the component
  })
</script>
