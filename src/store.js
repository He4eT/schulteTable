import Vue from 'vue'
import Vuex from 'vuex'

import {
  now,
  getList,
  shuffle
} from './utils'
import {
  LEVEL_START,
  STEP_BRIEF,
  STEP_GAME,
  STEP_RESULT,
  LEVEL_BLACK_INC,
  LEVEL_RED_DEC,
  LEVEL_MIXED,
  BOARD_SIZE,
  LEVEL_BLACK_INC_LAST,
  LEVEL_RED_DEC_LAST,
  LEVEL_MIXED_LAST
} from './consts'

import {
  fnBlackInc,
  fnRedDec,
  fnBlackIncRedDec
} from './coloring'

/* utils */

let levelLastTile = {
  [LEVEL_BLACK_INC]: LEVEL_BLACK_INC_LAST,
  [LEVEL_RED_DEC]: LEVEL_RED_DEC_LAST,
  [LEVEL_MIXED]: LEVEL_MIXED_LAST
}

let displayTile = size => last => ({
  [LEVEL_BLACK_INC]: fnBlackInc(size, last),
  [LEVEL_RED_DEC]: fnRedDec(size, last),
  [LEVEL_MIXED]: fnBlackIncRedDec(size, last)
})

/* */

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    level: LEVEL_START,
    step: STEP_BRIEF,
    last: 0,
    progress: 0,
    hint: false
  },
  mutations: {
    nextLevel (state) {
      state.level++
      state.step = STEP_BRIEF
      state.tiles = shuffle(getList(BOARD_SIZE))
      state.last = levelLastTile[state.level]
      state.displayTile = displayTile(BOARD_SIZE)(state.last)[state.level]
      state.progress = 0
      state.mistakes = 0
    },
    startNextGame (state) {
      state.step = STEP_GAME
      state.startTime = now()
    },
    doProgress (state) {
      state.progress++
    },
    mistake (state) {
      state.mistakes++
    },
    finishGame (state) {
      state.step = STEP_RESULT
      state.time = now() - state.startTime
    },
    showHint (state) {
      state.hint = true
    },
    hideHint (state) {
      state.hint = false
    }
  },
  actions: {
    tileClick (context, id) {
      let current = context.state.progress
      let last = context.state.last
      if (id === current) {
        if (id === last) {
          context.commit('finishGame')
        } else {
          context.commit('doProgress')
        }

        if (context.state.hint) {
          context.commit('hideHint')
        }
      } else {
        context.commit('mistake')
      }
    },
    getHint (context) {
      context.commit('showHint')
      context.commit('mistake')
    }
  }
})
