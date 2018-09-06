<template>
    <div id="app">
      <template v-if="level === LEVEL_START">
        <Welcome/>
      </template>
      <template v-if="level === LEVEL_QUANTITY">
        <div>
          <h1>
            {{ strings[`finish`] }}
          </h1>
          <p class='text'>
            {{ strings[`finishText`] }}
          </p>
          <a class='button' href='/'>
            {{ strings['back']}}
          </a>
        </div>
      </template>
      <template v-else-if="level > LEVEL_START">
        <Brief
          v-if="step === STEP_BRIEF"/>
        <Game
          v-if="step === STEP_GAME"/>
        <Results
          v-if="step === STEP_RESULT"/>
      </template>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import {
  LEVEL_QUANTITY,
  LEVEL_START,
  STEP_BRIEF,
  STEP_GAME,
  STEP_RESULT
} from './consts'
import { strings } from './strings'

import Welcome from './components/Welcome.vue'
import Brief from './components/Brief.vue'
import Game from './components/Game.vue'
import Results from './components/Results.vue'

export default {
  name: 'app',
  components: {
    Welcome,
    Brief,
    Game,
    Results
  },
  computed: mapState([
    'level',
    'step'
  ]),
  data: () => ({
    strings,
    LEVEL_QUANTITY,
    LEVEL_START,
    STEP_BRIEF,
    STEP_GAME,
    STEP_RESULT
  })
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto&subset=cyrillic');

body, html {
  margin: 0;
  padding: 0;

  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #424242;
  display: flex;

  min-height: 100vh;
  min-width: 900px;

  justify-content: center;
}

#app {
  width: 100%;
  max-width: 900px;
  margin: 70px 50px;
}

h1 {
  font-weight: normal;
}

.text {
  line-height: 1.5;
  color: #616161;
  margin-bottom: 50px;
}

.button:hover,
button:hover {
  background-color: #66BB6A;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
}

.button,
button {
  color: #fff;
  border-radius: 2px;
  background-color: #4CAF50;
  border: none;
  cursor: pointer;
  text-decoration: none;

  padding: 0.8em 3em;

  line-height: 1.8;
  vertical-align: bottom;
  text-align: center;

  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
}

</style>
