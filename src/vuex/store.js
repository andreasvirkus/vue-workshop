import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  notes: [],
  activeNote: {}
};

const getters = {
  activeNoteText: state => state.activeNote ? state.activeNote.text : ''
};

const mutations = {
  ADD_NOTE(state) {
    const newNote = {
      text: 'New note',
      favorite: false
    };

    state.notes.push(newNote);
    state.activeNote = newNote;
  },
  EDIT_NOTE(state, text) {
    state.activeNote.text = text;
  },
  DELETE_NOTE(state) {
    let index = state.notes.indexOf(state.activeNote);

    if (index > -1) {
      state.notes.splice(index, 1);
      state.activeNote = state.notes[0];
    }
  },
  TOGGLE_FAVORITE(state) {
    state.activeNote.favorite = !state.activeNote.favorite;
  },
  SET_ACTIVE_NOTE(state, note) {
    state.activeNote = note;
  }
};

const actions = {
  addNote({ commit }) {
    commit('ADD_NOTE')
  },
  editNote({ commit }, e) {
    commit('EDIT_NOTE', e.target.value)
  },
  deleteNote({ commit }) {
    commit('DELETE_NOTE')
  },
  updateActiveNote({ commit }, note) {
    commit('SET_ACTIVE_NOTE', note)
  },
  toggleFavorite({ commit }) {
    commit('TOGGLE_FAVORITE')
  }
};

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
});
