<template>
  <div>
    <h1>
      {{ strings[`block`] }}
      #{{ level }}
    </h1>
    <p class="text">
      {{ strings[`brief_${level}`] }}
    </p>
    <button @click='startNextGame'>
      {{ strings[`applyButton`] }}
    </button>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import { strings } from '../strings'

export default {
  name: 'Brief',
  computed: mapState([
    'level'
  ]),
  methods: {
    ...mapMutations([
      'startNextGame'
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
