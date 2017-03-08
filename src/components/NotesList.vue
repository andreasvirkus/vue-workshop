<template>
  <div class="notes-list">

    <header>
      <h1>Notes</h1>
      <div role="group">
        <!-- All Notes button -->
        <button type="button" class="button"
          @click="favoritesView = false"
          :class="{ active: !favoritesView, 'button-outline': favoritesView }">
          All Notes
        </button>
        <!-- Favorites Button -->
        <button type="button" class="button"
          @click="favoritesView = true"
          :class="{ active: favoritesView, 'button-outline': !favoritesView}">
          Favorites
        </button>
      </div>
    </header>
    <!-- Render notes in a list -->
    <nav>
      <ul>
        <li v-for="(note, index) in filteredNotes">
          <a href="#" :class="{ active: activeNote === note, fav: note.favorite }"
            @click="updateActiveNote(note)">
            <i>{{ index + 1 }}</i> {{ note.text.trim().substring(0, 30) + (note.text.length > 30 ? '...' : '') }}
          </a>
        </li>
      </ul>
    </nav>

  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  data () {
    return {
      favoritesView: false
    }
  },
  methods: {
    ...mapActions(['updateActiveNote'])
  },
  computed: {
    ...mapState(['notes', 'activeNote']),
    filteredNotes() {
      if (this.favoritesView) {
        return this.notes.filter(note => note.favorite);
      }

      return this.notes;
    }
  }
};
</script>

<style lang="scss">
  .notes-list {
    flex-basis: 350px;
    background-color: #F5F5F5;
    padding-top: 1em;

    a {
      padding: .4em .4em .4em 1em;
      display: flex;
      border-radius: 3px;

      &:hover {
        background-color: #BC88DC;
        color: #FFF;
      }

      &.active {
        background-color: #9B4DCB;
        color: #FFF;
      }
    }

    i {
      margin-right: 2em;
    }

    li + li {
      margin-top: .3em;
    }
  }

  nav {
    max-height: 80vh;
    overflow: auto;
  }

  h1 {
    font-weight: 200;
    color: #555;
  }

  // Override milligram styles
  button.button:hover,
  button.button:focus {
    background-color: #9B4DCA;
  }

  .fav::after {
    content: '\02605';
    display: block;
    position: absolute;
    right: 5px;
    top: 5px;
    font-weight: 800;
  }
</style>
