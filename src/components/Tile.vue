<template>
  <div class='tile'
    @click='onclick(id)'
    v-bind:class='[details.color, { hinted: hinted }]'>
      {{ details.label }}
  </div>
</template>

<script>
export default {
  name: 'Tile',
  props: {
    id: Number,
    details: Object,
    onclick: Function,
    hint: Boolean,
    current: Number
  },
  computed: {
    hinted () {
      return this.hint && (this.id === this.current)
    }
  }
}
</script>

<style scoped>
.tile {
  cursor: pointer;

  width: 84px;
  height: 84px;
  margin: 3px;

  box-sizing: border-box;
  font-size: 1.5em;
  color: #fff;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
}

.tile:hover {
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  opacity: 0.7;
}

.tile.black {
  background-color: #424242;
}

.tile.red {
  background-color: #F44336;
}

.tile.hinted {
  animation: blink 1s linear infinite;
}

@keyframes blink {
  0% { opacity: 1; }
  50% { opacity: 0.5; }
  100% { opacity: 1; }
}
</style>
