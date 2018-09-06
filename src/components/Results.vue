<template>
  <div class='results'>
    <div class='resultsInfo'>
      <h1>
        {{ strings[`blockResults`] }}
        #{{ level }}
      </h1>
      <p class='text'>
        {{ strings[`resultsText`] }}
      </p>
      <button @click='nextLevel'>
        {{ strings[`continueButton`] }}
      </button>
    </div>
    <div class='controls'>
      <div>
        {{ strings[`time`] }}
      </div>
      <h2>
        {{ toMMSS(dateToSeconds(time)) }}
      </h2>
      <div>
        {{ strings[`mistakes`] }}
      </div>
      <h2>
        {{ mistakes }}
      </h2>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import {
  dateToSeconds,
  toMMSS
} from '../utils'
import { strings } from '../strings'

export default {
  name: 'Brief',
  computed: mapState([
    'level',
    'time',
    'mistakes'
  ]),
  methods: {
    toMMSS,
    dateToSeconds,
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.results {
  display: flex;
  flex-direction: row;
}

.resultsInfo {
  flex-grow: 1;
}

.controls {
  margin-top: 30px;
  margin-left: 50px;
  min-width: 300px;
}
</style>
