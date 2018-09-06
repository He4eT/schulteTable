<template>
  <div>
    <h1>
      {{ strings[`title`] }}
    </h1>
    <p class="text">
      {{ strings[`description`] }}
    </p>
    <button @click='nextLevel'>
      {{ strings[`startButton`] }}
    </button>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import { strings } from '../strings'

export default {
  name: 'Welcome',
  methods: {
    ...mapMutations([
      'nextLevel'
    ])
  },
  data () {
    return {
      strings
    }
  }
}
</script>

<style scoped>
</style>
