<template>
  <div class="notes-list">

    <div class="list-header">
      <h2>Notes</h2>
      <div role="group">
        <!-- All Notes button -->
        <button type="button" class="button"
          @click="show = 'all'"
          :class="{active: show === 'all', 'button-outline': show !== 'all'}">
          All Notes
        </button>
        <!-- Favorites Button -->
        <button type="button" class="button"
          @click="show = 'favorites'"
          :class="{active: show === 'favorites', 'button-outline': show !== 'favorites'}">
          Favorites
        </button>
      </div>
    </div>
    <!-- render notes in a list -->
    <div class="container">
      <ul>
        <li v-for="note in filteredNotes">
          <a href="#" :class="{active: activeNote === note}"
            @click="updateActiveNote(note)"
            >{{ note.text.trim().substring(0, 30) }}
          </a>
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  data () {
    return {
      show: 'all'
    }
  },
  methods: {
    ...mapActions(['updateActiveNote'])
  },
  computed: {
    ...mapState(['notes', 'activeNote']),
    filteredNotes() {
      if (this.show === 'all') {
        return this.notes;
      } else if (this.show === 'favorites') {
        return this.notes.filter(note => note.favorite);
      }
    }
  }
};
</script>
