<template>
  <div class='container'>
    <div class='board'>
      <Tile v-for="tile in tiles"
        :key='tile'
        :id='tile'
        :details='displayTile(tile)'
        :hint='hint'
        :current='progress'
        :onclick='tileClick' />
    </div>
    <div class='info'>
      <div class='time'>
        {{ toMMSS(time) }}
      </div>
      <Progress :percent='percent'/>
      <div class='step'>
        {{ strings[`step`] }}
        {{ this.progress }}
        {{ strings[`from`] }}
        {{ this.last + 1 }}
      </div>
      <button class='hint' @click='getHint'>
        {{ strings[`hint`] }}
      </button>
      <div class="description">
        {{ strings[`brief_${level}`] }}
      </div>
    </div>
  </div>
</template>

<style scoped>
body {
  align-items: center;
}
.container {
  display: flex;
  flex-direction: row;
  justify-content: center;

  user-select: none;
}

.board {
  display: flex;
  flex-flow: row wrap;

  height: 630px;
  width: 630px;
}

.info {
  width: 200px;
  margin-left: 50px;
  padding-top: 25px;
}

.time {
  font-size: 2em;
  margin-bottom: 50px;
}

.step {
  margin-bottom: 50px;
}

.hint {
  margin-bottom: 50px;
}

.description {
  line-height: 1.5;
  color: #9E9E9E;
}

</style>

<script>
import { mapState, mapActions } from 'vuex'
import {
  now,
  toMMSS,
  dateToSeconds
} from '../utils'
import { strings } from '../strings'

import Tile from './Tile.vue'
import Progress from './Progress.vue'

export default {
  name: 'Game',
  components: {
    Tile,
    Progress
  },
  mounted () {
    setInterval(() => {
      this.now = now()
    }, 1000)
  },
  computed: {
    time () {
      let delta = this.now - this.startTime
      let seconds = dateToSeconds(delta)
      return seconds
    },
    percent () {
      return (this.progress / (this.last + 1)) * 100
    },
    ...mapState([
      'level',
      'tiles',
      'displayTile',
      'startTime',
      'progress',
      'last',
      'hint'
    ])
  },
  methods: {
    toMMSS,
    ...mapActions([
      'tileClick',
      'getHint'
    ])
  },
  data () {
    return {
      now: now(),
      strings
    }
  }
}
</script>
