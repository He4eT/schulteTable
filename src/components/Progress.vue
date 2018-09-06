<template>
  <div class="progress">
    <div
      class="bar"
      v-bind:style="{ width: percent + '%' }">
    </div>
  </div>
</template>

<style>
.progress {
  position: relative;
  height: 4px;
  display: block;
  width: 100%;
  background-color: #C8E6C9;
  background-clip: padding-box;
  margin: 0.5rem 0 1rem 0;
  overflow: hidden;
}

.progress .bar {
  position: absolute;
  background-color: inherit;
  top: 0;
  bottom: 0;
  background-color: #4CAF50;
  transition: width .3s linear;
}
</style>

<script scoped>
export default {
  name: 'Progress',
  props: {
    percent: Number
  }
}
</script>
